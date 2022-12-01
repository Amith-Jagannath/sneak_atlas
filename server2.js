const express = require("express"); //interact with html file
const bodyParser = require("body-parser"); //to get data from user
const mongoose = require("mongoose"); //package to connect to db
const hbs = require("express-handlebars"); //used for hbs file soo as to use js componenets for displaying images
const { handlebars } = require("hbs");
const cookieParser = require("cookie-parser"); //used to store cookies for user sessions
const sessions = require("express-session");
const oneDay = 1000 * 60 * 60 * 24;

const connectionPara = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const db =
  "mongodb+srv://amyth2002:Soorenji%40456@cluster0.bzzlyno.mongodb.net/sneak?retryWrites=true&w=majority";
mongoose
  .connect(db, connectionPara)
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();
app.set("view engine", "hbs"); //view engine for handlebars page
app.use(express.static(__dirname));
const path = __dirname;
console.log(path);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
var server_port = process.env.YOUR_PORT || process.env.PORT || 205;

console.log(server_port);

const CustomerSchema = new mongoose.Schema({
  cust_id: {
    type: Number,
  },

  name: {
    type: String,
  },
  gender: {
    type: String,
  },
});
const Product = new mongoose.model("Product", ProductSchema);

// const registerDetail = new mongoose.model("project", customerSchema);

module.exports = Product;
