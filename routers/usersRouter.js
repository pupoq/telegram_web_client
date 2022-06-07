const express = require("express");
const userRouter = express.Router();
const models = require('./../Models.js');
const telegramBot = require('../modules/telegramBot');
const { model } = require("mongoose");

userRouter.get('/', (req, res) => {
    models.User.find({}, (err, results) => {
        if(err) return console.log(err)
        res.send(results)
        console.log(results)
    })
})

userRouter.put('/', async (req, res) => {
    const {_id, fullName, chatId} = req.body

    await models.User.findByIdAndUpdate(_id, {fullName, chatId})
    res.status(200).send("User updated")
})

userRouter.post('/sendMessage', (req, res) => {
    const {chatId, message} = req.body;
    telegramBot.sendMessage(chatId, message)
    res.status(200).send('Message sent')
})

userRouter.delete('/', (req, res) => {
    const {chatId} = req.body;
    models.User.find({}, (err, results) => {
        if(err) return console.log(err)
        res.send(results)
        console.log(results)
    })
})

module.exports = userRouter