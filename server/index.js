let express = require("express")
let mongoose = require("mongoose")
let bodyParser = require("body-parser")
let bossRoutes = require("./routes/Boss")
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:strongpass1@ds117423.mlab.com:17423/checkpoint-2")


// .then(
//   () => { 
//     console.log("mongoose connected successfully");
   
//     startWebServer();
//   },
//   err => {
//     console.log("mongoose did not connect",err);
//    }
// );

app.use(bodyParser.json());
app.use(bossRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
