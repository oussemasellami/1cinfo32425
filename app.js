const http = require("http");
const express = require("express");
//connectio to db
const mongo = require("mongoose");
const mongoconnect = require("./config/dbconnection.json");

mongo
  .connect(mongoconnect.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connect");
  })
  .catch((err) => {
    err;
  });

//
const testRouter = require("./routes/test");
const usersRouter = require("./routes/users");
const coursRouter = require("./routes/cours");

const app = express();

app.use(express.json())

app.use("/test", testRouter);
app.use("/users", usersRouter);
app.use("/cours", coursRouter);

const server = http.createServer(app, console.log("server is running"));

server.listen(3000);
