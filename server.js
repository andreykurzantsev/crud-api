"use strict";

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
dotenv.config({ path: "var.env" });

const PORT = process.env.PORT;
const app = express();
const __dirname = path.resolve();

app.use(morgan("tiny"));
app.use(express.json());
//app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/css', express.static(path.resolve(__dirname, "sources/css")));
app.use('/img', express.static(path.resolve(__dirname, "sources/img")));
app.use('/js', express.static(path.resolve(__dirname, "sources/js")));

app.get('/', (req, res) => {
    try {
        res.status(200).render('index.ejs');
    } catch (error) {
        res.status(500).json(error.message);
    }

});

app.get('/adduser', (req, res) => {
    try {
        res.status(200).render('adduser.ejs');
    } catch (error) {
        res.status(500).json(error.message);
    }

});


let startApp = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (error) {
        console.log("ERROR");
    }
};
startApp();