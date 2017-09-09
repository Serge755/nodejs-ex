const express = require('express');

const SocketServer = require('ws').Server;

/*
var colors = require('colors');  

colors.setTheme({
  custom: ['green', 'bold', 'italic'],
  error: ['red', 'bold'],
  warn:['yellow', 'bold'],
});

console.info('Server started..............................................'.custom);  
*/
console.log('Server started..............................................');

const wss = new SocketServer({ port:3000, verifyClient: function(info, callback) 
{
  //callback(true);
  //console.log('origin: ' + info.origin);
  console.log('Created');
}});


//*****************************************************************************************************
wss.on('connection', (ws) => 
{
	//console.log('ws.origin: ' + ws.upgradeReq.headers.origin);	
    //console.log('Client connected :' + current);

	//**********************************
    ws.on('close', () =>{
		console.log('Client disconnected');
	});
	
	ws.onmessage = function(event){
		//console.info('message'.warn);  
		console.log('message');
	}
	
});
