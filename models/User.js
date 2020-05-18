const mongoose = require('mongoose')
// const Double = require('@mongoosejs/double')
const UserSchema = new mongoose.Schema({
  email: {
        type: String,
        required: [true, 'Email must be filled']
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