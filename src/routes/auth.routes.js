const express = require("express")
const authCont = require("../controllers/auth.controller")
const router = express.Router()

router.post("/register", authCont.userRegCon)

module.exports = router