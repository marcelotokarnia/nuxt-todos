const bodyParser = require('body-parser')
const app = require('express')()
const { assoc } = require('ramda')
const { mongodbClient } = require('./middlewares/mongodb')

app.use(bodyParser.json())
app.get('/tasks/pending', async (req, res) => {
  const tasks = await mongodbClient().getPendingTasks()
  res.json(tasks.map((e) => assoc('id', e._id, e)))
})
app.get('/tasks/completed', async (req, res) => {
  const tasks = await mongodbClient().getCompletedTasks()
  res.json(tasks.map((e) => assoc('id', e._id, e)))
})
app.put('/task/:id', async (req, res) => {
  const task = req.body
  res.json(await mongodbClient().updateTask(task))
})
app.post('/task', async (req, res) => {
  const task = req.body
  res.json(await mongodbClient().createNewTask(task))
})

module.exports = app
