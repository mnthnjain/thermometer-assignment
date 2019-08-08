const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var collections = {}
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'thermometer';
var db={};
 
// Use connect method to connect to the server
MongoClient.connect(url,{auth: {
    user: 'admin',
    password: 'admin123'
}, useNewUrlParser: true} , function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  db.client = client.db(dbName);
  collections.files= db.client.collection('files');
  collections.fileData = db.client.collection('fileData')
  
});

module.exports = {
    collections,
    db
}



