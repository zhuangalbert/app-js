const {createUser, getUserById, getUserByUsername} = require("./user_service");
const {hashSync, genSaltSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        createUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Database Error"
                });
            }
            
            userId = results.insertId;
            getUserById(userId, (err, results) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: "error occured"
                    });
                }
                if (!results) {
                    return res.status(404).json({
                        message: "User Not Found"
                    });
                }
                return res.status(201).json({
                    data: results
                });
            });
        });
    },

    getUserById: (req, res) => {
        const id = req.params.id 
        getUserById(id, (err,results) => {
            if (err) {
                console.log(err)
                return;
            }
            if (!results) {
                return res.status(200).json({
                    message: "record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        }); 
    },

    login: (req, res) => {
        const body = req.body;
        getUserByUsername(body.username, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "error occured"
                });
            }
            if (!results) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            const validPassword = compareSync(body.password, results.password);
            if(validPassword) {
                results.password = undefined;
                const token = sign({result: results}, process.env.API_SECRET, {
                    expiresIn : "1h"
                });
                return res.status(200).json({
                    access_token: token,
                    username: results.username,
                    name: results.name,
                    role: results.role
                });
            }
            return res.status(400).json({
                message: "Invalid username or password"
            })
        });
    },
    getProfile: (req, res) => {
        const id = req.decoded.result.id
        getUserById(id, (err,results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    message: "error occured"
                });
            }
            if (!results) {
                return res.status(404).json({
                    message: "record not found"
                });
            }
            return res.status(200).json({   
                results
            });
        }); 
    }
}