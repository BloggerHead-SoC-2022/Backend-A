const Userapp = require("../app/usermodel");
//User apis
// Create and Save a new user
const createuser = (req, res) => {
  console.log(req.body);
  const User = new Userapp({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,  
  });
  User
    .save()
    .then((data) => {
      res.send(data);
    })
 };

// Find a single user with a username
const retrieveuser = (req, res) => {
  Userapp.findById(req.params.username)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with usernamne " + req.params.username,
        });
      }
      res.send(data);
    })

};

// Update a user identified by the username in the request
const updateuser = (req, res) => {
  Userapp.findByIdAndUpdate(
    req.params.username,
    {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with username " + req.params.username,
        });
      }
      res.send(data);
    })

};

// Delete a user with the specified username in the request
const deleteuser = (req, res) => {
  Userapp.findByIdAndRemove(req.params.username)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with username " + req.params.username,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
};


module.exports = {
    createuser,
    retrieveuser,
    updateuser,
    deleteuser
}