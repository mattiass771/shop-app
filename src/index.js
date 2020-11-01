// IMPORTS //
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;

require("dotenv").config();

// CREATE SESSION //

const expressSession = require("express-session")({
  secret: process.env.AUTH_SECRET,
  resave: false,
  saveUninitialized: false
});

// USE MIDDLEWARE //
app.use(
  cors({
    origin: /.*mlty7-3000\.sse\.codesandbox\.io.*/, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressSession);
// extended logger:
// app.use(require("morgan")("combined"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

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
const shopRouter = require("./db/shopDb");
app.use("/shop", shopRouter);
const userRouter = require("./db/userDb").router;
app.use("/users", userRouter);

// ACCESS USER DATABASE //
const User = require("./db/userDb").User;

// PASSPORT //
passport.use(
  new Strategy((username, password, cb) => {
    User.findOne({ userName: username }, (err, user) => {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password !== password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "https://mlty7-3000.sse.codesandbox.io/login",
    successRedirect: "https://mlty7-3000.sse.codesandbox.io/shop"
  })
);

app.get("/logout", (req, res) => {
  req.logout();
  return res.redirect("/");
});

app.get("/get-user-data", (req, res) => {
  return req.user ? res.json(req.user) : res.json({});
});

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
