const express = require("express"); //interact with html file
const bodyParser = require("body-parser"); //to get data from user
const mongoose = require("mongoose"); //package to connect to db
const hbs = require("express-handlebars"); //used for hbs file soo as to use js componenets for displaying images
const { handlebars } = require("hbs");
const cookieParser = require("cookie-parser"); //used to store cookies for user sessions
const sessions = require("express-session");
const oneDay = 1000 * 60 * 60 * 24;
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
const path = __dirname;
console.log(path);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
var server_port = process.env.YOUR_PORT || process.env.PORT || 3012;

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
// const registerDetail = new mongoose.model("project", customerSchema);

module.exports = { Product, Customer };

const createDoc = async () => {
  try {
    const result = await Product.insertMany([
      new Product({
        product_id: 2,
        name: "nike",
        gender: "male",
        images: {
          img1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ffd71468-75b5-45bb-a3ec-78a510e16b7f/sb-zoom-blazer-mid-plus-skate-shoes-tMlr98.png",
          img2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2ec24c69-5583-43b1-bd9b-10ab754096fc/sb-zoom-blazer-mid-plus-skate-shoes-tMlr98.png",
          img3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4e300a8f-fd1a-446d-8d0f-31c84d7e17c7/sb-zoom-blazer-mid-plus-skate-shoes-tMlr98.png",
          img4: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1aff4c51-409b-4abc-b4d6-746b5c6ba7e4/sb-zoom-blazer-mid-plus-skate-shoes-tMlr98.png",
        },
        cost: " ₹8,695",
        costInVal: 8695,
        description: "Nike SB Zoom Blazer Mid Premium Plus",
      }),
      new Product({
        product_id: 3,
        name: "nike",
        gender: "male",
        images: {
          img1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/316ba9d5-f036-45cb-8546-38126f91c838/air-more-uptempo-96-shoes-cSXb2N.png",
          img2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3aaa7aef-4dd2-4b08-ad9a-b64e0d8dbea4/air-more-uptempo-96-shoes-cSXb2N.png",
          img3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b252167d-a10d-425b-9f5a-b5534b5f8d30/air-more-uptempo-96-shoes-cSXb2N.png",
          img4: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd73be60-9604-4254-bc91-345fb47b32d4/air-more-uptempo-96-shoes-cSXb2N.png",
        },
        cost: "  ₹15,995",
        costInVal: 15995,
        description: "Nike Air More Uptempo '96",
      }),
      new Product({
        product_id: 4,
        name: "nike",
        gender: "male",
        images: {
          img1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4c6d47f-1057-400d-bc98-f5194d041a96/air-max-plus-se-shoes-LMv0R8.png",
          img2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d2481c44-5c46-44c6-a74a-a4af2238d96e/air-max-plus-se-shoes-LMv0R8.png",
          img3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/590f417c-606a-45ec-bd7e-de179c3a1d46/air-max-plus-se-shoes-LMv0R8.png",
          img4: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/171fe582-3f1f-4d27-af04-18025c2d3f27/air-max-plus-se-shoes-LMv0R8.png",
        },
        cost: " ₹15,995",
        costInVal: 15995,
        description: "Nike Air Max Plus SE",
      }),
      new Product({
        product_id: 5,
        name: "nike",
        gender: "male",
        images: {
          img1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ac52ba43-3cff-4dce-ac1d-daf43e84dca1/air-max-plus-se-shoes-hH93Cl.png",
          img2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/526d6f7f-e38f-488a-8b04-f11588c3c1bf/air-max-plus-se-shoes-hH93Cl.png",
          img3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6aacc51b-a741-466a-b908-2fe4d84abb5f/air-max-plus-se-shoes-hH93Cl.png",
          img4: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eaa175d5-79e2-4404-b0d5-b72c27b9db92/air-max-plus-se-shoes-hH93Cl.png",
        },
        cost: " ₹15,995",
        costInVal: 15995,
        description: "Nike Air Max Plus SE5",
      }),
      new Product({
        product_id: 6,
        name: "nike",
        gender: "male",
        images: {
          img1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1fdaff44-67e1-4513-a10a-e8e78696e354/air-jordan-xxxvii-pf-basketball-shoes-rthNXn.png",
          img2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2fb5f15b-b721-487c-9163-04d50ed6f04f/air-jordan-xxxvii-pf-basketball-shoes-rthNXn.png",
          img3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/184a3e9f-a49c-4169-9e6c-837f4a72317e/air-jordan-xxxvii-pf-basketball-shoes-rthNXn.png",
          img4: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/692fb279-9d1a-4f05-8152-d57e29132db4/air-jordan-xxxvii-pf-basketball-shoes-rthNXn.png",
        },
        cost: "  ₹17,295",
        costInVal: 17295,
        description: "Air Jordan XXXVII PF",
      }),
      new Product({
        product_id: 7,
        name: "nike",
        gender: "male",
        images: {
          img1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b56de370-c5b8-43d3-bbd1-e9c44f4ed247/air-jordan-6-retro-shoes-fjwJgW.png",
          img2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/296d6cb2-b2e2-42a7-9265-8661efcef918/air-jordan-6-retro-shoes-fjwJgW.png",
          img3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/285d16bf-dba4-4726-a62f-80b79f888fc3/air-jordan-6-retro-shoes-fjwJgW.png",
          img4: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b5ae472-ff1e-4bfd-a47c-d46f73665a9e/air-jordan-6-retro-shoes-fjwJgW.png",
        },
        cost: " ₹18,395",
        costInVal: 18395,
        description: "Air Jordan 6 Retro",
      }),
      new Product({
        product_id: 8,
        name: "nike",
        gender: "male",
        images: {
          img1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/728d443c-e22e-4c91-b2a8-e5ea7722fd60/air-max-95-shoes-nv8gnV.pnghttps://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2d044915-0165-43a2-b57f-1acc42066263/acg-air-zoom-gaiadome-gore-tex-shoes-2t1Qbv.png",
          img2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b65d3388-d106-4a7f-80e8-1afca840929b/acg-air-zoom-gaiadome-gore-tex-shoes-2t1Qbv.png",
          img3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9a258e82-b361-4ab3-89b0-81f99bdfb15e/acg-air-zoom-gaiadome-gore-tex-shoes-2t1Qbv.png",
          img4: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1028e74e-fd9b-41ca-a941-478708d11a85/acg-air-zoom-gaiadome-gore-tex-shoes-2t1Qbv.png",
        },
        cost: "₹19,695",
        costInVal: 19695,
        description: "Nike ACG Air Zoom Gaiadome GORE-TEX",
      }),
      new Product({
        product_id: 9,
        name: "nike",
        gender: "male",
        images: {
          img1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8c6c0164-318d-412c-8941-25f919fa7215/air-jordan-7-retro-sp-shoes-x5NMM9.png",
          img2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/74de07bb-6e0b-4e8c-b010-5e3d87546d01/air-jordan-7-retro-sp-shoes-x5NMM9.png",
          img3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2953e005-badb-4a5e-8abc-3733edba8eb2/air-jordan-7-retro-sp-shoes-x5NMM9.png",
          img4: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9868ce17-8b96-478a-8c59-2ef247789954/air-jordan-7-retro-sp-shoes-x5NMM9.png",
        },
        cost: "  ₹20,295",
        costInVal: 20295,
        description: "Air Jordan 7 Retro SP",
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
  console.log(session.userid);
});
