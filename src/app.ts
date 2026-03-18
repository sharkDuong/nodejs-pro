// const express = require("express");
import express from "express";
import 'dotenv/config';
import wedRouters from "./routes/wed";

const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views",__dirname + "/views");

//config req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// config static files
app.use(express.static("public"));

//config route
wedRouters(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});