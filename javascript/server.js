// server.js - simple HTTPS server (self-signed) for local testing
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  // honorCipherOrder: true, // optional
};

https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from local HTTPS server\n');
}).listen(8443, () => {
  console.log('🔒 HTTPS server listening on https://localhost:8443');
});
