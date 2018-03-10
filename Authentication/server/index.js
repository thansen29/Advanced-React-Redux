// Main starting point of the app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost/auth');

// App Setup - getting express working the way we want it to
app.use(morgan('combined')); // express middleware - logging
app.use(cors()); // express middleware to handle cors
app.use(bodyParser.json({ type: '*/*' })); // express middleware - parse incoming requests
router(app);

// Server Setup - getting express setup to talk to outside world
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
