var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/student";
var url = "mongodb+srv://nishant:mehta12@cluster0.wn4lfz8.mongodb.net/?retryWrites=true&w=majority/student";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
