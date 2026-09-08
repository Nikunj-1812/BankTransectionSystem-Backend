const express = require("express")
const cookieparse = require("cookie-parser")
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionRouter = require("./routes/transection.routes")

const app = express()


app.use(express.json())
app.use(cookieparse())



app.use("/api/auth",authRouter)
app.use("/api/accounts",accountRouter)
app.use("/api/transactions", transactionRouter)

module.exports =app