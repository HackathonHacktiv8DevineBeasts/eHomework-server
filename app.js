if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const morgan = require('morgan')

const port = process.env.PORT || 3001;
const router = require('./routes/index');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const cors = require('cors');
// const { url } = require('./config/database.config')
// const {url} = require('./config/database.config')
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/"
// const url = "mongodb://heroku_mpx3kbqd:ikuqj6ppfec0t1plc2eok78veq@ds163044.mlab.com:63044/heroku_mpx3kbqd"


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

connection.on('error', (err) => {
  console.error(err);
})

connection.once('open', () => {
  console.log('MONGODB SERVER CONNECTED');
  connection.emit('ready')
})

connection.on('ready', () => {
  app.use(cors())
  app.use(express.urlencoded({extended: false}))
  app.use(express.json())
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  app.use(router)
  app.listen(port, () => {
		console.log(`LISTENING ON: ${port}`)
	})
})