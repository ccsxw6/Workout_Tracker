const express = require('express')
const mongoose = require('mongoose');
var morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


require("./routes/htmlRoutes.js")(app)



// add error here? 
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))