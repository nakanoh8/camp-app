'use strict';

const express = require('express');

const app = require('./app.js')

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);