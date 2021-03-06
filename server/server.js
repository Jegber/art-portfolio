const express = require('express');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('../public'));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/art-database', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const tickets = require("./tickets.js");
app.use("/api/tickets", tickets);
const users = require("./users.js");
app.use("/api/users", users);

let port = 3001;
app.listen(port, () => console.log("Server listening on port " + port + "!"));
