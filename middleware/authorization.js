const {verifyToken} = require('../helpers/jwt')
const User = require('../models/User')
// const {customError} = require("../helpers/customError.js")

async function authorization(req, res, next) {
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
        if(data.role === 'teacher') {
            console.log("AUTHORIZED");
            next()
        }

    }
    catch(err) {
        console.error(err)
    }


}

module.exports = {authorization}