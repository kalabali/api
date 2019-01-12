const express = require('express');
const mongoose = require('mongoose');

const v1Router = require('./routers/v1');
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV !== 'development'){
    mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, keepAlive: true })
    .then(() => {
        console.log('database connected');
    })
}

const app = express();

app.use('/v1', v1Router);

app.get('/', (req, res) => {    
    res.status(200).json({ status: 1 });
})

module.exports = app;