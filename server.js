const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

// mongoose.connect(MONGODB_URI,{  
//     useNewUrlParser:true,
//     useFindAndModify:false
// })

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  

require("./routes/htmlRoutes.js")(app)
require("./routes/apiRoutes.js")(app)



// add error here? 
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))