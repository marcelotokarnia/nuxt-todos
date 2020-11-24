const { MongoClient } = require('mongodb')

export const mongodbClient = () => {
  const dbName = process.env.DB_NAME
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD
  const cluster = process.env.DB_CLUSTER
  const uri = `mongodb+srv://${user}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const getTasks = async () => {
    const collection = await getCollection('tasks')

    const tasks = await collection.find({}).toArray()

    closeClient()

    return tasks
  }

  const getCollection = async (collectionName) => {
    const conn = await getConnection()
    return conn.db(dbName).collection(collectionName)
  }

  const getConnection = async () => {
    return await client.connect()
  }

  const closeClient = () => {
    client.close()
  }

  return {
    getTasks,
  }
}
