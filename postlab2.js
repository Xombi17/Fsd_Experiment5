import express from "express";

var app = express();
var port = 3002;

// tell express to use ejs
app.set("view engine", "ejs");


// GET /  - renders profile.ejs with student data
app.get("/", (req, res) => {
    res.render("profile", {
        name: "Varad",
        branch: "Computer Engineering",
        year: "SE"
    });
});


app.listen(port, () => {
    console.log(`Postlab 2 server started on port ${port}`);
});