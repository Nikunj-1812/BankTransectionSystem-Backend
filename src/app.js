const express = require("express")
const cookieparse = require("cookie-parser")
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")

const app = express()


app.use(express.json())
app.use(cookieparse())



app.use("/api/auth",authRouter)
app.use("/api/accounts",accountRouter)

module.exports =app