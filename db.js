const mongoose = require('mongoose')

mongoose.connect(process.env.Database).then(
    result=>{
        console.log("mongoose connect");
        
    }
).catch(err=>{
    console.log("connection failed");
    console.log(err);
    
    
})