const App = require("../app/model");

// Create and Save a new Message
const create = (req, res) => {
    console.log(req.body);
  const User = new App({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,  
  });
  User
    .save()
    .then((data) => {
      res.send(data);
    })
 };

// Find a single message with a messageId
const retrieve = (req, res) => {
  App.findById(req.params.messageId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send(data);
    })

};

// Update a message identified by the messageId in the request
const update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.messageId,
    {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send(data);
    })

};

// Delete a message with the specified messageId in the request
const deleteMsg = (req, res) => {
  App.findByIdAndRemove(req.params.messageId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
};

module.exports = {
    create,
    retrieve,
    update,
    deleteMsg
}