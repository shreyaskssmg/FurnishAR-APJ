require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
const db = mongoose.connection
db.on('error' , (error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

app.use(express.json())

const chairsRouter = require('./routes/chairs')
app.use('/chairs',chairsRouter)

const sofasRouter = require('./routes/sofas')
app.use('/sofas',sofasRouter)

const furnisRouter = require('./routes/furnis')
app.use('/furnis',furnisRouter)

app.listen(PORT, () => console.log("Server Started"))
