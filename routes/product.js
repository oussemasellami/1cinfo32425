const express = require("express");
const r = express.Router();

const product=require('../products.json')

r.get("/show", (req, res) => {
  res.send("salut 1 cinfo 3");
});

r.get("/show1", (req, res) => {
  res.send("bonjour");
});


r.get("/product", (req, res) => {
  res.json(product)
});

r.get("/product/:id", (req, res) => {
  const name=req.params.id
  res.json(product[name])
});

r.get("/product/:id/:qt", (req, res) => {
  
  res.json({
    id:req.params.id,
    qt:req.params.qt,
    unitprice:product[req.params.id].price,
    total:product[req.params.id].price*req.params.qt
  })
});
module.exports = r;
