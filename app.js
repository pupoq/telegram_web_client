const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
require('./modules/telegramBot')

const usersRouter = require("./routers/usersRouter");


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/users", usersRouter);

const CONNECTION_STRING = "mongodb+srv://Pupoq:Vasness06031412@cluster0.56vbdv4.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(CONNECTION_STRING, (err) => {
    if(err) return console.log(err);
    app.listen(8080);
    }
);

