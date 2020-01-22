const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];

const waitlist = [];

// front end functions
const getTables = () => {
    $.get("/api/tables", function(data) {
        console.log(data)
    })
}
const getWait = () => {
    $.get("/api/waitlist", function(data) {
        console.log(data)
    })
}
// ======================================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    getTables();
    getWait();
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

// app.post Here
// ====================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})