const express = require('express');
var fileupload = require("express-fileupload");

const app = express();
const http = require('http');
const reload = require('reload')
const httpProxy = require('http-proxy');
const { router } = require('./services-handler');
var apiProxy = httpProxy.createProxyServer();

//add the router

app.use(fileupload())
app.use((err, req, res, next)=>{
  console.log(req)
})
app.use('/', router);

app.all('/*',(req, res)=>{
  apiProxy.web(req, res, {target: 'http://localhost:4200',});
})
app.listen(process.env.port || 3000);

var server = http.createServer(app);

// Reload code here
reload(app).then(function (reloadReturned) {
  // reloadReturned is documented in the returns API in the README

  // Reload started, start web server
  server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
  })

}).catch(function (err) {
  console.error('Reload could not start, could not start server/sample app', err)
})

console.log('Running at Port 3000');
