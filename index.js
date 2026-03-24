import express from "express";
import morgan from "morgan";

var app = express();
var port = 3000;

// morgan prints request logs in terminal
app.use(morgan("combined"));

// needed to read form and json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// GET /
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Node.js Server</h1>");
});

// GET /about
app.get("/about", (req, res) => {
    res.send("<h1>About</h1> <p>Name: Varad</p> <p>Roll No: 23</p> <p>Course: Computer Engineering</p>");
});

// GET /contact
app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1> <p>Email: varad@example.com</p>");
});

// POST /register 
app.post("/register", (req, res) => {
    res.sendStatus(201);
});

// PUT /update
app.put("/update", (req, res) => {
    res.sendStatus(200);
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});