const http = require("http");
const express = require("express");
//connectio to db
const mongo = require("mongoose");
const mongoconnect = require("./config/dbconnection.json");

const path = require("path");

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
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(express.json());

app.use("/test", testRouter);
app.use("/users", usersRouter);
app.use("/cours", coursRouter);

const server = http.createServer(app, console.log("server is running"));
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connected");
  socket.emit("msg1", "user connected");

  socket.on("m1", (data) => {
    console.log(data);
    io.emit("m1", data);
  });

  socket.on("typing", (data) => {
    console.log(data);
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => {
    console.log("user diconnecter");
    io.emit("msg1", "user diconnecter");
  });
});

server.listen(3000);
