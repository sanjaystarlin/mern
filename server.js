const express = require("express")
const cors = require("cors")
require("dotenv").config()
console.log(process.env.GROQ_API_KEY)

const interviewRoutes = require("./routes/interview")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("HireForge AI Backend Running")
})

app.use("/api/interview", interviewRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})