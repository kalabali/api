const express = require('express');
const mongoose = require('mongoose');

const v1Router = require('./routers/v1');

require('dotenv').config()

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, keepAlive: true })
    .then(() => {
        console.log('database connected');
    })

const app = express();

app.use('/v1', v1Router);

app.get('/', (req, res) => {    
    res.json({ status: 1 });
})

app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}`)    
})