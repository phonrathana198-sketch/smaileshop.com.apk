const https = require('https');
const fs = require('fs');

https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/master.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/master.com/fullchain.pem'),
}, (req, res) => {
  res.end("master.com HTTPS OK");
}).listen(443);