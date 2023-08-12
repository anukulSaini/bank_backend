const express = require('express')

const mongoose = require('mongoose')

const routes = require('./routes/routes')

const cors = require('cors')

const cookieParser = require('cookie-parser')

const app = express()



app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))

app.use(cookieParser())

app.use(express.json())

app.use("/api",routes)

mongoose.connect("mongodb://localhost:27017/project",{
    useNewUrlParser:true
})
.then(()=>{
    console.log("database connected")

    app.listen(5001,()=>{
        console.log("App is on port 5001")
    })
})