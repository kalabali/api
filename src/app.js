const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');

const v1Router = require('./routers/v1');
const graphSchema = require('./schema/schema.schema');

require('dotenv').config()

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV !== 'development'){
    mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, keepAlive: true })
    .then(() => {
        console.log('database connected');
    })
}

const app = express();

app.use('/v1', v1Router);
app.use('/graph', graphqlHTTP({
    schema: graphSchema,
    graphiql: true
}))

app.get('/', (req, res) => {    
    res.status(200).json({ status: 1 });
})

module.exports = app;