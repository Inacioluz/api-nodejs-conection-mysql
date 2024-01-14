const express = require('express');
const app = express();

const db = require("./db")

app.get("/", async (req, res) => {
    res.send("Welcome ")
})

app.listen(8080, () => {
    console.log("Server init in port 8080")
})