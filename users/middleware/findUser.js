const User = require('../models/User.js')

async function findUser(req, res, next) {
    let user
    try {
        // console.log("IS USER IN DATABASE?");
        // console.log("ID ", req.params.userid);
        user = await User.findById(req.params.userid)
        // console.log(user);
        if(user === null) {
            return res.status(404).json({
                message: 'NOT FOUND'
            })
        }
    } catch (err) {
        return res.status(404).json({
            message: 'NOT FOUND'
        })
        
    }
    res.user = user
    next()
}

module.exports = {findUser}