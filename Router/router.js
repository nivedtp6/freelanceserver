const express = require("express")

const { register, login } = require("../Controllers/userController.js")

const router = new express.Router()

router.post('/register',register)

router.post("/login",login)

module.exports = router 