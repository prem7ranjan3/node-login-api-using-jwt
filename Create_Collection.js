let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    let myobj = { userid: "vicky", password: "vicky" };
    dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted!");
        db.close();
    });
});
