// need to include express, mongoose, morgan

const express = require('express')
var morgan = require('morgan')
const mongoose = require('mongoose');

const app = express()
// telling web server what port to listen to
// listen to whatever is in the environment variable OR 8080 if nothing in env variable
//process.env global variable is injected by Node at runtime for your application to use, it represents the state of the system environment your application is in when it starts
const PORT = process.env.PORT || 8080;



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))