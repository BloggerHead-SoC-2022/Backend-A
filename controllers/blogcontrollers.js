const Blogdata = require("../app/blogmodel");

//Blog apis
//Create and save blog
const createblog = (req, res) => {
    console.log(req.body);
    const Blog = new Blogdata({
      title: req.body.title,
      content: req.body.content,
      userID: req.body.userID,  
    });
    Blog
      .save()
      .then((data) => {
        res.send(data);
      })
    };
  
  //Update a blog using blogID
  const updateblog = (req,res) => {
    Blogdata.findByIdAndUpdate(
      req.body.blogID,
      {
        title: req.body.title,
        content: req.body.content,
        userID: req.body.userID,
      },
      { new: true}
    )
    .then((data) => {
     if(!data){
       return res.status(404).send({
         message: "Blog with this ID not found",
       });
      }
     res.send(data);
    })
  };
  
  
  //Delete a blog using blogID
  const deleteblog = (req, res) => {
    console.log(req)
    Blogdata.findByIdAndRemove((req.body.blogID))
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Blog not found with ID " + req.body.blogID,
          });
        }
        res.send({ message: "Message deleted successfully!" });
      })
  };
  
  
  //Retrieve a blog using blogID
  const retrieveblog = (req, res) => {
    Blogdata.findById(req.body.blogID)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Blog not found with blogID " + req.body.blogID,
        });
      }
      res.send(data);
    })
  
  };

  const retrieveallblogs = (req, res) => {
    Blogdata.find({userID: req.body.userID})
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Blog not found for the user " + req.body.userID,
        });
      }
      res.send(data);
    })
  }

module.exports = {
    createblog,
    retrieveblog,
    updateblog,
    deleteblog,
    retrieveallblogs
}