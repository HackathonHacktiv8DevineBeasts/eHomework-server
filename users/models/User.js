const mongoose = require('mongoose')
// const Double = require('@mongoosejs/double')
const UserSchema = new mongoose.Schema({
  username: {
        type: String,
        required: [true, 'Name must be filled']
  },
  password: {
        type: String,
        required: [true, 'Passwords must be filled']
  },
  role: {
        type: String,
        required: [true, 'Roles must be either student or teacher'],
        enum: ['student', 'teacher']
  }
})

module.exports = mongoose.model('User', UserSchema)