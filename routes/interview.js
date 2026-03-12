const express = require("express")
const router = express.Router()

const { generateQuestion } = require("../controllers/aiController")

router.get("/question", generateQuestion)

module.exports = router