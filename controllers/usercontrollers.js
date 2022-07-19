const Userapp = require("../app/usermodel");
//User apis
// Create and Save a new user
const createuser = async (req, res) => {
  console.log(req.body);
  const ExistingUser = await Userapp.findOne({ email: req.body.email });
  if(ExistingUser){
    res.status(403).json({ "message": "EmailID already exists" })
  } else{
  const User = new Userapp({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,  
  });
  User
    .save()
    .then((data) => {
      res.send(data);
    })
  }
 };

// Find a single user with a username
const retrieveuser = (req, res) => {
  Userapp.findById(req.body.userID)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with usernamne " + req.body.userID,
        });
      }
      res.send(data);
    })

};

// Update a user identified by the username in the request
const updateuser = (req, res) => {
  Userapp.findByIdAndUpdate(
    req.body.userID,
    {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with userID " + req.body.userID,
        });
      }
      res.send(data);
    })

};

// Delete a user with the specified username in the request
const deleteuser = (req, res) => {
  Userapp.findByIdAndRemove(req.body.userID)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with userID " + req.body.userID,
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
};


module.exports = {
    createuser,
    retrieveuser,
    updateuser,
    deleteuser
}