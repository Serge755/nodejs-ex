const express = require('express');

const SocketServer = require('ws').Server;

console.log('Server started..............................................');

const wss = new SocketServer({ port:3000});


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
