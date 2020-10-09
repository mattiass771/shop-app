// IMPORTS //
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// USE MIDDLEWARE //
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DATABASE CONNECT //
mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  (err) => {
    if (err) return console.log(err);
    return console.log("DB connection successful!");
  }
);

// DATABASE COLLECTIONS //
const testRouter = require("./db/testDB");
app.use("/test", testRouter);

app.get("/", (req, res) => res.send("Hello World"));

// ACCESS APP IN PRODUCTION //
if (process.env.NODE_ENV === "production") {
  app.use(express.static("geroproject/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/public", "index.html"));
  });
}

// RUN SERVER //
const listener = app.listen(process.env.PORT || 5000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
