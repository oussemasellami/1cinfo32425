const express = require("express");
const r = express.Router();
const os=require('os')
r.get("/show", (req, res) => {
  res.send("salut os");
});

r.get("/show1", (req, res) => {
  res.send("bonjour os");
});

r.get("/os", (req, res) => {
  res.json({
    hostname:os.hostname(),
    typ: os.type(),
    platform:os.platform()
  })
});

r.get("/cpus", (req, res) => {
  res.json(os.cpus())
});

r.get("/cpus/:id", (req, res) => {
  const id=req.params.id
  console.log(id)
  res.json(os.cpus()[id])
});

module.exports = r;
