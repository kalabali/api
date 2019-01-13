require('dotenv').config()

const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}`)    
})