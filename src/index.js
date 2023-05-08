//Template Engines (pug, hbs, EJS) in Node.js.
//Add dynamic content in Express.js.

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const path = require("path");

/* console.log(`DIRNAME: ${__dirname}`);
console.log(`FILENAME: ${__filename}`); */
console.log(`PATH JOIN: ${path.join(__dirname, '../public')}`);

//built middleware
const staticPath = path.join(__dirname, "../public");

//to set the view engine path
app.set("view engine", "pug");

app.use(express.static(staticPath));

//template engine routes
app.get("/", (req, res) => {
    res.render("index", { title: "Home  page", template : "index.html", props : "by Aseef Ahmed" }); // renders 
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Example app listening on port http://localhost:${PORT}/`);
    console.log("Press Ctrl+C to quit.");
});