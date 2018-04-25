const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(`Received this beautiful message: "${message}"`)
  });

  ws.send('something');
});

console.log("started a server on: ws://localhost:8080/");
