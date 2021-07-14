const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  updateUsuario,
  list,
  //updateMoney,
} = require("../controllers/authController");

router.get("/usuarios", list);

router.post("/signup", signup);
router.post("/signin", signin);
router.put("/updUsuario/:authId", updateUsuario);
//router.put('/:authId', updateMoney);

module.exports = router;
