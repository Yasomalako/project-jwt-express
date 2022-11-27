
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userNAme: {type:String,require:true},
    country: {type:String,require:true},
    Email: {type:String,require:true},
    Password: {type:String,require:true},
    id: {type:Number,require:false},
    },
        {
        timestamps: true
    ,
})  

module.exports = mongoose.model("user",userSchema)