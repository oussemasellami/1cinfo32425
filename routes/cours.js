const express = require("express");
const router = express.Router();
const UserController = require("../controller/coursController");

router.get("/show", (req, res) => {
  res.send("hello test");
});

/*router.get("/add/:username/:email/:cin", (req, res) => {
  new User({
    username: req.params.username,
    email: req.params.email,
    cin: req.params.cin,
  }).save();
  res.send("good added");
});*/

router.post("/add", UserController.add);

router.get("/showusers", UserController.showuser);

router.get("/showuser/:id", UserController.showbyid);

router.get("/showbyusername/:username", UserController.showusername);

router.get("/showbyusernames/:username", UserController.showusernames);

router.delete("/deleteuser/:id", UserController.deleteUser);

router.put("/updateuser/:id", UserController.updateuser);

module.exports = router;