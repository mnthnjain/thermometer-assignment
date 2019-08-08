const express = require('express');
const assert = require('assert');
const { collections, db } = require('./mongodb')
const path = require('path');
const router = express.Router();
const jsonpack = require('jsonpack')


router.post('/upload/', uploadHandler)
router.get('/files/', getFiles)
router.get('/file-data/:fileName', getFileData)

function uploadHandler(req, response) {
  req.on('err', (error)=>{
    console.error(error);
    res.end()
  })
  if (!req.files) {
    response.status(400).end();
    return;
  }
  var data = JSON.parse(req.files.file0.data);
  var name = req.files.file0.name;


  collections.files.findOneAndUpdate({ name: req.files.file0.name },
    { $set: { name: req.files.file0.name, lastModificationTime: new Date() } },
    { new: true, upsert: true, returnNewDocument: true }, (err, q) => {
      assert.equal(null, err)
      // assert.equal(1, q.insertedCount)

      db.client.createCollection(req.files.file0.name, async (err, q) => {
        var fileNameCollection = db.client.collection(name);

        await fileNameCollection.deleteMany({});
        for (var i = 0; i < data.length; i += 10000) {
          var formatedList = []
          data.slice(i, i + 9999).map((dataPoint) => {
            formatedList.push(Object.values(dataPoint))
          })
          db.client.collection(req.files.file0.name).insertOne({
            startingTS: data[i].ts,
            data: formatedList
          })
        }

        console.log(name+' file uploaded successfully')
        response.sendStatus(201)

      })
    })
}

function getFiles(req, res) {
  req.on('err', (error)=>{
    console.log(error)
    res.end()
  })
  collections.files.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    res.send(docs)
  })
  
}

function getFileData(req, res) {
  // db.client.collection(req.params.fileName).find().toArray((err, docs) => {
  //   let mergeFileData = [];
  //   docs.map((pieces) => {
  //     mergeFileData = mergeFileData.concat(pieces.data)
  //   })
  //   console.log(mergeFileData)
  //   res.send({body: jsonpack.pack(mergeFileData)});
  // })
  req.on('err', (error)=>{
    console.log(error)
    res.end()
  })
  res.write('[')
  var stream = db.client.collection(req.params.fileName).find().stream()
  var flagFirst = true;
  stream.on('error', function (err) {
    res.error()
    console.error(err)
  })
  stream.on('data', function (doc) {
    if (!flagFirst) {
      res.write(',')
    }
    flagFirst = false;
    res.write(JSON.stringify(doc.data).slice(1, -1))
  })
  stream.on('end', () => {
    res.write(']')
    res.end()
  })
  
}

module.exports = {
  router
}
