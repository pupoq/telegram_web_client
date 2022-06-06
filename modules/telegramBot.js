const TelegramBot = require('node-telegram-bot-api');
const models = require('../Models')
const token = '5461701015:AAHz8hCEymIIQ6sP2SCU6BIFTzIYfX59By0';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/register/, async (msg) => {
    let fullName = msg.from.first_name
    let chatId = msg.chat.id

    let newUser = new models.User({fullName, chatId})

    await newUser.save()

    if(msg.text == "Алина" || msg.text == "Олина" || msg.text == "Алина" )

    bot.sendMessage(msg.chat.id, "Вы успешно зарегистрированы!")
})

const sendMessage = (chatId, message) => {
    bot.sendMessage(chatId, message)
}

module.exports = {
    sendMessage
}