const express = require("express");
const data = require("./data");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { Products } = require("./Prod_details");
const secretKey = "M123A";
app.use(cors());
app.use(parser.json());

app.use(express.static("Public"));
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.password);

  const ans = data.find(
    (val) =>
      val.email === req.body.email_send && val.password === req.body.password
  );
  if (ans) {
    const token = jwt.sign(req.body.email_send, secretKey);
    res.json(token);
  } else {
    res.json("not authorized");
  }
});

app.get("/", (req, res) => {
  res.json(Products);
});

app.post("/review", (req, res) => {
  const ans = Products.filter((product) => product.Id === req.body.id);
  res.json(ans);
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
