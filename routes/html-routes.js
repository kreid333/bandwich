module.exports = function (app) {

    app.get("/workstation", (req, res)=> {
        res.render("workstation");
    });
}