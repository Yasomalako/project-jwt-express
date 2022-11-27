const mongoose = require('mongoose');
const CONNETIONֹֹֹֹֹSTRING = process.env.CONNETIONֹֹֹֹֹSTRING;

mongoose.connect("mongodb://127.0.0.1:27017/Traveldb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connection succeed..."))
    .catch((err) => console.error('connection felid', err))

const db = mongoose.connection
module.exports = db