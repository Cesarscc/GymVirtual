const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  updateUsuario,
  //updateMoney,
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/signin", signin);
router.put("/updUsuario/:authId", updateUsuario);
//router.put('/:authId', updateMoney);

module.exports = router;
