let express = require("express")
let bodyParser = require("body-parser")
let bossRoutes = require("./routes/Boss")

let mongoose = require("mongoose")
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:strongpass1@ds117423.mlab.com:17423/checkpoint-2")

const app = express();

app.use(bodyParser.json());
app.use(bossRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
