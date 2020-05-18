const User = require("../models/User.js");
var data;
class UserCtrl {


    static async register(req, res) {
        let inputData = {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        };

        try {
            await User.create(inputData).then((response) => {
                console.log("SUCCESS ADD");
                res.status(201).json({
                    message: "NEW MOVIE ADDED",
                    result: response,
                });
            });
        } catch (err) {
            console.log("ERROR, ", err);
            return res.status(err.status).json({
                message: err.message,
            });
        }
    }


    static async login(req, res) {
        
    }


    static async findAll(req, res) {
        try {
            data = await User.find();
            return res.status(200).json({
                message: "FETCH ALL SUCCESS",
                result: data,
            });
        } catch (err) {
            console.log("ERROR, ", err);
            return res.status(err.status).json({
                message: err.message,
            });
        }
    }

    static async findOne(req, res) {
        try {
            data = await User.findOne({
                _id: req.params.userid,
            });

            if (!data) {
                return res.status(404).json({
                    message: "NOT FOUND",
                });
            }

            return res.status(200).json({
                message: "FETCH ONE SUCCESS",
                result: data,
            });
        } catch (err) {
            console.log("ERROR, ", err);
            return res.status(err.status).json({
                message: err.message,
            });
        }
    }


    static async update(req, res) {
        let updData = {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        };

        try {
            // await User.updateOne({
            //     _id: req.params.userid
            //   }, updData)
            console.log("THIS IS ID 2 UPDATE");
            console.log(req.params.userid);
            await User.findOneAndUpdate(
                {
                    _id: req.params.userid,
                },
                updData,
                {
                    new: true,
                }
            ).then((response) => {
                console.log("UPDATE SUCCESS");
                return res.status(200).json({
                    message: "UPDATE USER SUCCESS",
                    result: response,
                });
            });
        } catch (err) {
            console.log("ERROR, ", err);
            return res.status(err.status).json({
                message: err.message,
            });
        }
    }

    static async drop(req, res) {
        try {
            // await User.deleteOne({_id: req.params.userid})
            await User.findOneAndDelete({_id: req.params.userid}, {rawResult: true}).then((response) => {
                console.log("DELETE SUCCESS");
                console.log(response);
                return res.status(200).json({
                    message: "DELETE USER SUCCESS",
                    result: response,
                });
            });
        } catch (err) {
            console.log("ERROR, ", err);
            return res.status(err.status).json({
                message: err.message,
            });
        }
    }
}

module.exports = UserCtrl;
