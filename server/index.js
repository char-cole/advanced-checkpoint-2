const path = require('path');
require("dotenv").config();
let express = require("express")
let bodyParser = require("body-parser")
let bossRoutes = require("./routes/Boss")

let mongoose = require("mongoose")
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongodburi).then(
  () => { 
    console.log("mongoose connected successfully");
    
    startWebServer();
  },
  err => {
    console.log("mongoose did not connect",err);
   }
);


function startWebServer(){

const app = express();

app.use(bodyParser.json());
app.use(bossRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

}