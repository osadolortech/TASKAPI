
const express = require('express')
const app = express()
const tasks = require('./route/task')

const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/task',tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)


const port = process.env.PORT  || 4000

const start = async ()=>{
     try{
         await connectDB(process.env.MONGO_URI)
         app.listen(port, console.log(`server is listing at ${port}....`))
     } catch (error){
         console.log(error)
     }
}

start()