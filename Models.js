const mongoose = require('mongoose')
const schemas = require('./Schemas')

const User = mongoose.model("User", schemas.userSchema)

module.exports = {
    User
}