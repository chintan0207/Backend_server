const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/chintan",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("Mongodb connection sucessfully")
}).catch((e)=>{
    console.log("Mongodb connection failed")
})


