const db = require("../models");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  
  app.get("/projects", (req, res) => {
    db.Project.findAll().then(function(result){
      console.log(result)
      res.render("songs-dir", { project: result });
    })
  });

  app.get("/workstation/:id", (req, res) => {
    console.log("this is req.params.id: " + req.params.id)
    db.Project.findOne({
      where: {
        id: req.params.id,
      },
    }).then((project) => {
      // and then displays it via handlebars
      console.log(project);
      res.render("workstation", { project: project });
    });
  });
};
