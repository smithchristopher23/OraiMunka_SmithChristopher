const express = require("express");
const mysql = require("mysql")
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const { error } = require("console");
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3307,
        password: "",
        database: "atletikavb2017"
    }

)
app.get("/", (req, res) => {
    res.send("Szerver működik!")
}
)










app.listen(3000, () => {
    console.log("A server a 3000 porton fut!")
})