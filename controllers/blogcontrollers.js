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
      req.params.blogID,
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
    Blogdata.findByIdAndRemove((req.query.blogID))
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Blog not found with ID " + req.query.blogID,
          });
        }
        res.send({ message: "Message deleted successfully!" });
      })
  };
  
  
  //Retrieve a blog using blogID
  const retrieveblog = (req, res) => {
    Blogdata.findById(req.params.blogID)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Blog not found with blogID " + req.params.blogID,
        });
      }
      res.send(data);
    })
  
  };

module.exports = {
    createblog,
    retrieveblog,
    updateblog,
    deleteblog
}