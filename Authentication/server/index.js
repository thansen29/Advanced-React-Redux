const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

// App Setup - getting express working way we want it to
app.use(morgan('combined')); // express middleware - logging
app.use(bodyParser.json({ type: '*/*' })); // express middleware - parse incoming requests
router(app);

// Server Setup - getting express setup to talk to outside world
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
