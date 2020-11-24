const bodyParser = require('body-parser')
const app = require('express')()
const { mongodbClient } = require('./middlewares/mongodb')

app.use(bodyParser.json())
app.all('/getJSON', async (req, res) => {
  res.json(await mongodbClient().getTasks())
})

module.exports = app
