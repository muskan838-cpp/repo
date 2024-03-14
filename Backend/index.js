const express = require("express");
const data=require("./data")
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const prod_Details=require("./Prod_details")
const secretKey = "M123A";
app.use(cors());
app.use(parser.json());

app.use(express.static('Public'))
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.password);

 
  const ans = data.find(
    (val) => val.email === req.body.email_send && val.password===req.body.password
  );
  if(ans) {
    const token = jwt.sign(req.body.email_send, secretKey);
    res.json(token);
  } else {
    res.json("not authorized");
  }
});



app.get("/",(req,res)=>
{
        res.json(prod_Details);
})


app.listen(3000);
