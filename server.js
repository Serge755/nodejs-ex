//  OpenShift sample Node application






const express = require('express');

const SocketServer = require('ws').Server;


var colors = require('colors');  

colors.setTheme({
  custom: ['green', 'bold', 'italic'],
  error: ['red', 'bold'],
  warn:['yellow', 'bold'],
});

console.info('Server started..............................................'.custom);  
  


const wss = new SocketServer({ port:3000, verifyClient: function(info, callback) 
{
  callback(true);
  console.log('origin: ' + info.origin);
}});


//*****************************************************************************************************
wss.on('connection', (ws) => 
{
	//console.log('ws.origin: ' + ws.upgradeReq.headers.origin);	
    //console.log('Client connected :' + current);

	//**********************************
    ws.on('close', () =>
	{
		console.log('Client disconnected : ' + ws.num + ' ' + ws.name);
	});
	
	ws.onmessage = function(event){
		console.info('message'.warn);  
	}
	
});



/*
var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = 3000;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static(__dirname + "/"))
app.engine('html', require('ejs').renderFile);

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created");
console.log(wss);

//***********************************************
wss.on("connection", function(ws) 
{
    ws.send("Hi");
	console.log('message');
  
    ws.on('message', function message(data) 
    {
      console.log('message');
    })

})


app.get('/', function (req, res) {
     console.log("Hello!!!");
    res.render('index.html', { pageCountMessage : null});

});

app.listen(8080, ip);
module.exports = app;




/*
//var express = require('express'),
//    app     = express(),
 var   morgan  = require('morgan');
    
Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
      mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
      mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
      mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
      mongoPassword = process.env[mongoServiceName + '_PASSWORD']
      mongoUser = process.env[mongoServiceName + '_USER'];

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

  }
}
var db = null,
    dbDetails = new Object();

var initDb = function(callback) {
  if (mongoURL == null) return;

  var mongodb = require('mongodb');
  if (mongodb == null) return;

  mongodb.connect(mongoURL, function(err, conn) {
    if (err) {
      callback(err);
      return;
    }

    db = conn;
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
  });
};

app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  console.log("Hello!!!");
  if (!db) {
    initDb(function(err){});
  }
  if (db) {
    var col = db.collection('counts');
    // Create a document with request IP and current time of request
    col.insert({ip: req.ip, date: Date.now()});
    col.count(function(err, count){
      res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
    });
  } else {
    res.render('index.html', { pageCountMessage : null});
  }
});

app.get('/pagecount', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  if (!db) {
    initDb(function(err){});
  }
  if (db) {
    db.collection('counts').count(function(err, count ){
      res.send('{ pageCount: ' + count + '}');
    });
  } else {
    res.send('{ pageCount: -1 }');
  }
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

initDb(function(err){
  console.log('Error connecting to Mongo. Message:\n'+err);
});

app.listen(port, ip);
console.log('Okay Server running on http://%s:%s', ip, port);

module.exports = app ;

*/
