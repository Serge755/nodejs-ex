
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

const wss = new SocketServer({ port:5858});


//*****************************************************************************************************
wss.on('connection', (ws) => 
{
	//console.log('ws.origin: ' + ws.upgradeReq.headers.origin);	
    console.log('Client connected :');

	//**********************************
    ws.on('close', () =>{
		console.log('Client disconnected');
	});
	
	ws.onmessage = function(event){
		//console.info('message'.warn);  
		console.log('message');
	}
	
});
