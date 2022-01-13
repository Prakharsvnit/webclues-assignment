const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const userRouter = require("./routes/user.routes")
const app = express()
require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use("",userRouter)

const url = process.env.MONGO_URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(3007, () => console.log("Server up and running at 3007!")))
.catch((error) => console.log(error.message))
