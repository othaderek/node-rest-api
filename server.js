require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const chalk = require('chalk')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection 
db.on('error', (error) => console.error(error))
db.once('open', () => console.log(chalk.bold.inverse.green(' ~~ Connected to Database ~~ ')))

app.use(express.json())
app.use(cors())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => {
    console.log(chalk.bold.inverse.green(' ~~ Server Started ~~ '))
});


