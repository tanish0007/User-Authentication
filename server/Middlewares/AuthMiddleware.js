const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userVerification = (req, res) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({ message: "Token not present", status: false });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if(err){
            return res.json({ message: "User not authenticated", status: false });
        } else {
            const user = await User.findById(data.id);
            if( user ) return res.json ({ message: "User authenticated", status: true, user: user.username });
            else return res.json({ message: "User not authenticated", status: false });
        }
    })
}

module.exports = { userVerification };