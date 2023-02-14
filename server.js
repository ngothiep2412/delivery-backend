const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const multer = require("multer");

const usersRoutes = require("./routes/userRoute");

const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.disable("x-powered-by");

app.set("port", port);

const upload = multer({
  storage: multer.memoryStorage(),
});

usersRoutes(app, upload);

server.listen(3000, "192.168.56.1" || "localhost", function () {
  console.log("Aplication Nodejs " + port + "runing....");
});

app.get("/", (req, res) => {
  res.send("Backend");
});

app.get("/test", (req, res) => {
  res.send("Testing");
});

app.get("/", (req, res) => {
  res.send("Backend");
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.staus || 500).send(err.stack);
});
