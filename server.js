require('dotenv').config()

const app = require('./src/app')

app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}`)    
})