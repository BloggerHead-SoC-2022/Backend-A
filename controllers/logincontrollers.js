// const passport = require("passport");
const Userapp = require("../app/usermodel");
const jwt = require("jsonwebtoken")

const logincheck = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({ "message": " enter all credentials" })
    } else {
        const User = await Userapp.findOne({ email: req.body.email });
        // console.log(req.body.email);
        // console.log(User.password);
        if (User) {
            if (User.password == req.body.password) {
                const payload = {
                    '_id' : User._id,
                };
                var token = jwt.sign(payload, "BLOGGERHEADBLOGGERHEADBLOGGERHEA", { expiresIn: '1h' });
            
                res.json({ "message": " login successful", token })
            }
            else {
                res.status(403).json({ "message": "incorrect credentials" })
            }

        }
        else {

            res.status(403).json({ "message": "incorrect credentials" })


        }
    }
}
    

module.exports = { logincheck };


// passport.authenticate('local', function (err, user, info){
//     if (err) {
//         res.json({"message" : err})
//     } else {
//         if(!user) {
//             res.json({"message" : " incorrect login or password"})
//         } else {
//             req.login(user, function(err){
//                 if(err){
//                     res.json({err})
//                 } else {
//                     res.json({"message" : " login successful"})
//                 }
//             })
//         }
//     }
// })