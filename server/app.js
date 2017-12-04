const express = require('express');
const mongoose = require('moongoose');

const app = express();

var port = 8000;
app.listen(port);

console.log('Express server is running on ' + port);
