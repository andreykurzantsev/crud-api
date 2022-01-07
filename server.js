"use strict";

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import renderRouter from './server/routers/router.js';
dotenv.config({ path: "var.env" });

const PORT = process.env.PORT;
const app = express();
const __dirname = path.resolve();

app.use(morgan("tiny"));
app.use(express.json());
app.use('/', renderRouter);
app.set("view engine", "ejs");

app.use('/css', express.static(path.resolve(__dirname, "sources/css")));
app.use('/img', express.static(path.resolve(__dirname, "sources/img")));
app.use('/js', express.static(path.resolve(__dirname, "sources/js")));


let startApp = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (error) {
        console.log("ERROR");
    }
};
startApp();