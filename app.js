if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const morgan = require('morgan')
// const port = process.env.PORT || 3001;
const router = require('./routes/index');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const { url } = require('./config/database.config')
// const url = "mongodb://localhost:27017/"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

connection.on('error', (err) => {
  console.error(err);
})

connection.once('open', () => {
  console.log('MONGODB SERVER CONNECTED');
  connection.emit('ready')
})

connection.on('ready', () => {
  app.use(express.urlencoded({extended: false}))
  app.use(express.json())
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  app.use(router)
  app.listen(3000, () => {
		console.log(`LISTENING ON: 3000`)
	})
})