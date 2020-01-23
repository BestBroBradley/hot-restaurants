const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    tables= [],
    waitList = []
]

   

   



// front end functions
const getTables = () => {
    app.get("/api/tables", data => {
        console.log(data)
    })
}
const getWait = () => {
    app.get("/api/waitlist", data => {
        console.log(data)
    })
}
// ======================================================================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
    getTables();
    getWait();
});

app.get("/api/tables", (req, res) => {
    return res.json(reservations.tables);
});

app.get("/api/waitlist", (req, res) =>{
    return res.json(reservations.waitlist);
});

// app.post Here
app.post("/api/reservations", (req, res) => {
    const newReservation = req.body
    if (reservations.tables.length < 5) {
        reservations.tables.push(newReservation)
    } else {
        reservations.waitlist.push(newReservation)
    }
})
// ====================================================================

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT)
})