const express = require("express"); //interact with html file
const bodyParser = require("body-parser"); //to get data from user
const mongoose = require("mongoose"); //package to connect to db
const hbs = require("express-handlebars"); //used for hbs file soo as to use js componenets for displaying images
const { handlebars } = require("hbs");
const cookieParser = require("cookie-parser"); //used to store cookies for user sessions
const sessions = require("express-session");
const oneDay = 1000 * 60 * 60 * 24;
const path = __dirname + "/public/views";
// mongoose
//   .connect("mongodb://localhost:27017/SneakX", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     //useCreateIndex:true
//   })
//   .then(() => {
//     console.log("connection sucessfull");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

mongoose
  .connect(
    "mongodb+srv://amyth2002:Soorenji%40456@cluster0.bzzlyno.mongodb.net/sneak?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex:true
    }
  )
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((e) => {
    console.log(e);
  });
const app = express();
app.set("view engine", "hbs"); //view engine for handlebars page
app.use(express.static(__dirname));
// const path = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
var server_port = process.env.YOUR_PORT || process.env.PORT || 2480;
console.log(server_port);
app.use(
  sessions({
    //this the data sent and stored in brower cookie
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.listen(server_port, function () {
  console.log("Listening on port %d", server_port);
});

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: Number,
  },

  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  images: {
    img1: {
      type: String,
    },
    img2: {
      type: String,
    },
    img3: {
      type: String,
    },
    img4: {
      type: String,
    },
  },
  cost: {
    type: String,
  },
  costInVal: {
    type: Number,
  },
  description: {
    type: String,
  },
});
const CustomerSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  number: {
    type: String,
  },
});
const Product = new mongoose.model("Product", ProductSchema);
const Customer = new mongoose.model("Customer", CustomerSchema);
// const Product_scrap = new mongoose.model("product_scrap");
// const registerDetail = new mongoose.model("project", customerSchema);

module.exports = { Product, Customer };

const createDoc = async () => {
  try {
    const result = await Product.insertMany([
      new Product({
        product_id: 16,
        name: "sparx",
        gender: "male",
        images: {
          img1: "https://m.media-amazon.com/images/I/61dDl5SmqPL._UY695_.jpg",
          img2: "https://m.media-amazon.com/images/I/71b2m6DMatL._UY695_.jpg",
          img3: "https://m.media-amazon.com/images/I/71mJwirv7aL._UY695_.jpg",
          img4: "https://m.media-amazon.com/images/I/61lxnwhLurL._UY695_.jpg",
        },
        cost: " ₹1,311",
        costInVal: 1311,
        description: "Sparx Mens Sx0379g Running Shoes",
      }),
      new Product({
        product_id: 17,
        name: "sparx",
        gender: "male",
        images: {
          img1: "https://m.media-amazon.com/images/I/81EQqPZZfML._UX695_.jpg",
          img2: "https://m.media-amazon.com/images/I/81A7aUn2NFL._UY695_.jpg",
          img3: "https://m.media-amazon.com/images/I/81tRrciH4TL._UX695_.jpg",
          img4: "https://m.media-amazon.com/images/I/8115zQQMd0L._UX695_.jpg",
        },
        cost: "₹1,367",
        costInVal: 1367,
        description: "Sparx mens Sm-610 Sports Shoes",
      }),
      new Product({
        product_id: 18,
        name: "adidas",
        gender: "male",
        images: {
          img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d1d26e792fa4654b597ae32012603bd_9366/NMD_R1_Shoes_Black_GX6978_01_standard.jpg",
          img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2bc8a9245c74eb3908eae3201262106_9366/NMD_R1_Shoes_Black_GX6978_04_standard.jpg",
          img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa78923a44b147baaf60ae3201261257_9366/NMD_R1_Shoes_Black_GX6978_02_standard_hover.jpg",
          img4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d1548d3f9d384a81a775ae32012619b4_9366/NMD_R1_Shoes_Black_GX6978_03_standard.jpg",
        },
        cost: "11,299",
        costInVal: 11299,
        description: "",
      }),
      new Product({
        product_id: 19,
        name: "adidas",
        gender: "male",
        images: {
          img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc685791576a4273ad5eaed701484af6_9366/NMD_R1_Shoes_Red_GX9888_01_standard.jpg",
          img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/27bf77e4f5894286bd41aed701485ac1_9366/NMD_R1_Shoes_Red_GX9888_02_standard_hover.jpg",
          img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/06908b61003d4e7bb2a6aed701486147_9366/NMD_R1_Shoes_Red_GX9888_03_standard.jpg",
          img4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/39d36024c85a4e6f82e2aed7014869f7_9366/NMD_R1_Shoes_Red_GX9888_04_standard.jpg",
        },
        cost: "₹12,999",
        costInVal: 12999,
        description: "Men Original NMD_R1 SHOES",
      }),
      new Product({
        product_id: 20,
        name: "adidas",
        gender: "male",
        images: {
          img1: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f320dcd7a7f249319bf6aee500e3840b_9366/OZELLE_Cloudfoam_Lifestyle_Running_Shoes_Black_GX6768_01_standard.jpg",
          img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f79642b902b45f8bc73aee500e3cccb_9366/OZELLE_Cloudfoam_Lifestyle_Running_Shoes_Black_GX6768_04_standard.jpg",
          img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab1934da03f4417796d7aee500e3dc97_9366/OZELLE_Cloudfoam_Lifestyle_Running_Shoes_Black_GX6768_05_standard.jpg",
          img4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d064c77b2b4448cf9ccaaee500e3adfe_9366/OZELLE_Cloudfoam_Lifestyle_Running_Shoes_Black_GX6768_02_standard_hover.jpg",
        },
        cost: "₹7,599",
        costInVal: 7599,
        description: "",
      }),
      new Product({
        product_id: 21,
        name: "adidas",
        gender: "male",
        images: {
          img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1dab1fe38f26418d9f01ae6f01792e5a_9366/Questar_Shoes_Blue_GY2261_01_standard.jpg",
          img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/255e5498e5704f0f862fae6f017951ef_9366/Questar_Shoes_Blue_GY2261_04_standard.jpg",
          img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c5d31f0e72e946ec819fae6f01795c88_9366/Questar_Shoes_Blue_GY2261_05_standard.jpg",
          img4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0b1edf53d237487783ccae6f01794081_9366/Questar_Shoes_Blue_GY2261_02_standard_hover.jpg",
        },
        cost: "₹7,999",
        costInVal: 7999,
        description: "",
      }),
    ]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
// createDoc();
var session;
app.get("/", function (req, res) {
  session = req.session;
  console.log(session);
  res.render("/index.html");
});
app.post("/shoes", async function (req, res) {
  const shoes_details = await Product.find({});
  //   res.send(shoes_details);
  // console.log(shoes_details);
  console.log(shoes_details);
  res.render("shop", { info: shoes_details });
});

app.post("/register", async function (req, res) {
  try {
    const values = req.body;
    if (
      !values.email ||
      !values.username ||
      !values.password ||
      !values.number
    ) {
      res.send("fields cannot be empty");
    } else {
      Customer.findOne({ email: values.email }, async function (err, data) {
        if (data) res.send("email already exists");
        else {
          const entry1 = new Customer({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            number: req.body.number,
          });
          await entry1.save();
          console.log(entry1);
        }
      });

      res.status(201).sendFile(path + "/index.html");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.post("/login", async function (req, res) {
  try {
    const values = req.body;
    session = req.session;
    console.log(values);
    if (!values.email || !values.password) {
      res.send("fields cannot be empty");
    } else {
      data = await Customer.find({ email: values.email });
      if (!data[0]) {
        res.send("Email not has been registered");
      } else {
        console.log(data);
        console.log(
          data[0].name,
          data[0].email,
          data[0].password,
          values.password
        );
        if (data[0].password === values.password) {
          session.userid = values.email;
          console.log(session.userid);
          res.send("Successfully logged in");
        } else {
          res.send("Incorrect password");
        }
      }
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.post("/individualshoe", async function (req, res) {
  console.log(req.body.product_id);
  const val = req.body.product_id;
  const shoes_det = await Product.findOne({ product_id: val });
  console.log(shoes_det);
  // console.log(session.userid);
});
console.log(path);
app.post("/nike", async function (req, res) {
  console.log("yes");
  const nike = await Product.find({ name: "nike" });
  console.log(nike);
  res.render("shop", { info: nike });
  // res.render(path + "/shop.hbs", { info: nike });
  // res.send("nike");
});

app.post("/puma", async function (req, res) {
  const puma = await Product.find({ name: "puma" });
  res.render("shop", { info: puma });
});
app.post("/adidas", async function (req, res) {
  const adidas = await Product.find({ name: "adidas" });
  res.render("shop", { info: adidas });
});
app.post("/sparx", async function (req, res) {
  const sparx = await Product.find({ name: "sparx" });
  res.render("shop", { info: sparx });
});

app.post("/search_box", async function (req, res) {
  const name = req.body.shoe_name.toLowerCase();
  const shoes = await Product.find({ name: name });
  res.render("shop", { info: shoes });
});

app.post("/male", async function (req, res) {
  const male_shoe = await Product.find({ gender: "male" });
  res.render("shop", { info: male_shoe });
});
app.post("/female", async function (req, res) {
  const female_shoe = await Product.find({ gender: "female" });
  res.render("shop", { info: female_shoe });
});
