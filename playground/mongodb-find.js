//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

var server = "mongodb://danieltest:123@ds119395.mlab.com:19395/todo";

MongoClient.connect(server, (error, db) => {
  if (error) {
    return console.log("Unable to connect to server");
  }
  console.log("Connected to mongoDB server");

  db
    .collection("Todos")
    .find({})
    .toArray()
    .then(
      docs => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      error => {
        console.log("Unable to fetch todos", error);
      }
    );

  //db.close();
});
