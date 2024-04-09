const express = require("express");
const data = require("./data");
const app = express();
const parser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { Products } = require("./Prod_details");
const secretKey = "M123A";
app.use(cors());
app.use(parser.json());

main();

async function main() {
  await mongoose.connect(
    "mongodb+srv://muskan:muskanahuja8080@cluster0.roaeblt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  rating: Number,
  Gender:String,
  Category: String,
  subCategory:String,
  Stock: Number,
  brand: String,
  description: { type: String },  
  image:{type:String}
});

const product = mongoose.model("productSchema", productSchema);
const user = mongoose.model("userSchema", userSchema);
app.get("/products", async (req, res) => {
  const response = await product.find();
  console.log(response);
  res.json(response);
});
app.post("/products", (req, res) => {
  console.log(req.body.products);
  product.create({
   // images: [{ url: req.body.products.images }],
    name: req.body?.products?.name,
    price: req.body?.products?.Price,
   // rating: req.body?.products?.rating,
    Gender: req.body?.products?.gender,
    Category:req.body?.products?.category,
    subCategory:req.body?.products?.subcategory,
    Stock: req.body?.products?.Stock,
    brand: req.body?.products?.Brand,
    description: req.body?.products?.description,
    image:`${req.body.products.name}`
  });
});


app.post("/updateprods",async(req,res)=>
{
    const response=  await product.find({_id:req.body.id})
    console.log(response)
    res.json(response)
})
app.post("/delete",async(req,res)=>
{
      await product.deleteOne({_id:req.body.productId})
})
app.use(express.static("Public"));

const helper = async (req, res) => {
  const response = await user.find({
    email: req.body.email_send,
  });
  if (response.length == 0) {
    res.json("user Not Authorized");
  } else {
    await bcrypt.compare(
      req.body.password,
      response[0].password,
      function (err, resp) {
        if (resp === true) {
          const token = jwt.sign(req.body.email_send, secretKey);
          res.json(token);
        } else {
          res.json("user Not Authorized");
        }
      }
    );
  }
};
app.post("/", (req, res) => {
  helper(req, res);
});

app.get("/", (req, res) => {
  res.json(Products);
});

app.post("/review", (req, res) => {
  const ans = Products.filter((product) => product.Id === req.body.id);
  res.json(ans);
});

app.post("/register", async (req, res) => {
  const response = await user.findOne({
    email: req.body.Email,
  });

  if (response.length > 0) res.json("User Already Exists");
  else {
    let encpass;
    let pass = req.body.Password;
    let hash = await bcrypt.hash(pass, 10);

    const insetUser = () => {
      user.create({
        name: req.body.Name,
        email: req.body.Email,
        password: hash,
      });
    };
    insetUser();
  }
});

app.post("/filters", (req, res) => {
  const dressTypes = [];
  Products.map((val) => {
    req.body.filters.map((category) => {
      if (category === val.type) dressTypes.push(val);
    });
  });
  const dressStyle = [];
  dressTypes.map((val) => {
    req.body.style.map((element) => {
      if (val.style === element) {
        dressStyle.push(val);
      }
    });
  });
  const dressPrice = [];

  dressStyle.map((val) => {
    console.log(req.body.minVal);
    if (val.Price >= req.body.minVal && val.Price <= req.body.maxVal) {
      dressPrice.push(val);
    }
  });
  const filteredProducts = [];
  dressPrice.map((val) => {
    req.body.sizes.map((element) => {
      if (val.sizes.includes(element)) {
        filteredProducts.push(dressPrice);
      }
    });
  });
  console.log(dressPrice);
  res.json(filteredProducts);
});

app.listen(3000);
