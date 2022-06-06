const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    chatId: Number
})

module.exports = {
    userSchema
}