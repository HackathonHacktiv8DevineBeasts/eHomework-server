const {verifyToken} = require('../helpers/jwt')
const User = require('../models/User')
// const {customError} = require("../helpers/customError.js")

async function authentication(req, res, next) {
    // console.log(">>> AUTHENTICATION");
    let token = req.headers.token
    let payload = verifyToken(token)
    console.log("WHAT IS PAYLOAD?");
    console.log(payload);
    var data
    try {

        data = await User.findOne({
                _id: payload._id,
            });
        console.log("THIS IS RETRIEVED DATA");
        console.log(data);
        if(String(data._id) == String(payload._id)) {
            console.log("AUTHENTICATION SUCCESS");
            req.decoded = payload
            next()
        }

    }
    catch(err) {
        console.error(err)
    }


}

module.exports = {authentication}