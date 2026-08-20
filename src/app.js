const express = require("express")
const cookieparse = require("cookie-parser")
const authRouter = require("./routes/auth.routes")

const app = express()
app.use(express.json())
app.use(cookieparse())
app.use("/api/auth",authRouter)


module.exports =app