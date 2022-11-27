const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const port = 8086;
const cors = require('cors')
require('./DB')
const passport = require('passport')
const passportMiddelWare = require('./config/passport-midellwear')(passport)

const {usersRoute} = require('./routes/users-router')
app.use(express.json({express: true}))
app.use(express.urlencoded({extended: true}))
app.use.apply(cors())
app.use(passport.initialize())

app.use('/users',passport.authenticate('jwt',{session:false}), usersRoute);
// app.use('/flights',flightRoute);

 app .get('/',(req,res)=>{
    res.send({massage:"get data successflully"})
 })

 app.listen(port,()=>{
    console.log('server is connected to server');
 })