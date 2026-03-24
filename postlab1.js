import express from "express";

var app = express();
var port = 3001;

// needed to read form data from req.body
app.use(express.urlencoded({ extended: true }));

// serve files from public folder
app.use(express.static("public"));


// GET /  - opens the html form
app.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: "." });
});

// POST /submit  - reads form data and shows it back
app.post("/submit", (req, res) => {
    var name = req.body.studentName;
    var branch = req.body.branch;
    var year = req.body.year;

    res.send(`
        <h1>Form Submitted!</h1>
        <p>Student Name: ${name}</p>
        <p>Branch: ${branch}</p>
        <p>Year: ${year}</p>
    `);
});


app.listen(port, () => {
    console.log(`Postlab 1 server started on port ${port}`);
});