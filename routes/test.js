const express = require("express");
const router = express.Router();

router.get("/show", (req, res) => {
  res.send("hello test");
});

module.exports = router;
