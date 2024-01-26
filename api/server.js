const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Express is here");
});

app.listen(3001, function() {
    console.log("Server is running");
})