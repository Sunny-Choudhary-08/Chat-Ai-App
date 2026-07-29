const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');


const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({ message: "Unauthrized Access" })
        }
        const result = jwt.verify(token, process.env.SECRET_KEY);

        const user = await userModel.findOne({ _id:result.userId });
        if (!user) {
            return res.status(400).json({ message: "no user found" })
        }

        req.id = result.userId;

        next();

    }
    catch (error) {
        console.log(error);
    }
}


module.exports = isAuthenticated;