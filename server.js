const express = require('express');
const app = express();
const mysql = require('mysql');
var db = require('./db');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var ejs = require("ejs");
let pdf = require("html-pdf");
const mailer = require("@sendgrid/mail"); 
app.set("view engine","ejs");

app.use(express.static(__dirname+ "/public"));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

  


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));