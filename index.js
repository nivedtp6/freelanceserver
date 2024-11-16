require('dotenv').config()
const express = require("express")
const cors = require("cors")
const router = require('./Router/router.js')
 require('./db.js')
const server = express()

server.use(cors())
server.use(express.json());
server.use(router)
const PORT = 3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log("server startted ");
    
})

server.get('/',(req,res)=>{
    res.status(200).send("get server")
}) 