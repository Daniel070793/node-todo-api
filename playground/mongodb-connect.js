//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

var server = "mongodb://danieltest:123@ds119395.mlab.com:19395/todo";

MongoClient.connect(server, (error, db) => {
  if (error) {
    return console.log("Unable to connect to server");
  }
  console.log("Connected to mongoDB server");

  //The name of the collection i want to insert into.
  //   db.collection("Todos").insertOne({
  //     text: "a todo test",
  //     completed: false
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert todo", error);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   });

  //   db.collection("Users").insertOne({
  //     name: "Daniel test",
  //     age: 24,
  //     location: "Denmark"
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert user", error);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   });

  db.close();
});
