const express = require("express")
const mongoose = require("mongoose")
const app = express()
const authRoute = require('./routes/auth')
let port = 2400

let MongoClient = require('mongodb').MongoClient;

const  dbURI = "mongodb://localhost:27017/";
app.use(express.json())
app.use('api/auth', authRoute)

mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)});
db.once("open", () => {
    console.log("DB started successfully")
    db.db.collection("users", function(err, collection) {
        collection.find({}).toArray(function (err, data) {
            console.log(data); // it will print your collection data
        })
    });
});

app.listen(port, () => {
    console.log(`Server started: 2400 at http://localhost:${port}`)
})