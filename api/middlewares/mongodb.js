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

  const getPendingTasks = (conn) => async () => {
    const collection = await getCollection(conn)('tasks')
    return collection.find({ done: false }).toArray()
  }

  const getCompletedTasks = (conn) => async () => {
    const collection = await getCollection(conn)('tasks')
    return collection.find({ done: true }).toArray()
  }

  const updateTask = (conn) => async (task) => {
    const collection = await getCollection(conn)('tasks')
    return collection.save({
      _id: task.id,
      notes: task.notes,
      done: task.done,
      name: task.name,
    })
  }

  const useMongo = (fn) => async (p) => {
    const conn = await client.connect()
    const resp = await fn(conn)(p)
    client.close()
    return resp
  }

  const getCollection = (conn) => (collectionName) => {
    return conn.db(dbName).collection(collectionName)
  }

  return {
    getPendingTasks: useMongo(getPendingTasks),
    getCompletedTasks: useMongo(getCompletedTasks),
    updateTask: useMongo(updateTask),
  }
}
