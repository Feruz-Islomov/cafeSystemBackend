// const mydata = require("./data.js");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const fileGetRoutes = require("./routes/fileGetRoutes");
const filePostRoutes = require("./routes/fileUploadRoutes");
const fileDeleteRoutes = require("./routes/fileDeleteRoutes");
const fileUpdateRoutes = require("./routes/fileUpdateRoutes");
// const { checkUser } = require("./middleware/authMiddleware");
const app = express();
const server = require("http").createServer(app);

const PORT = process.env.PORT || 5000;
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// app.use(bodyParser.json());
app.use(cookieParser());
require("./database")();
// app.get("*", checkUser);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// app.use(express.static(path.join(__dirname, "/frontend/build")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
// );
app.use("/api", filePostRoutes.routes);
app.use("/deleteSingle", fileDeleteRoutes.routes);
app.use("/update", fileUpdateRoutes.routes);
app.use("/products", fileGetRoutes.routes);

io.on("connection", (socket) => {
  console.log("connected successfully: " + socket.id);

  socket.on("moveToStart", (payload) => {
    socket.broadcast.emit("moveToStart", payload.items);
  });
  socket.on("deleteStart", (payload) => {
    socket.broadcast.emit("deleteStart", payload.item);
  });
  socket.on("fromStartToKitchen", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen", paylaod.item);
  });
  socket.on("fromKtichenToFinish", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish", paylaod.item);
  });
  socket.on("fromFinishToCheck", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck", paylaod.item);
  });
  socket.on("getChecks", (paylaod) => {
    socket.broadcast.emit("getChecks", paylaod.items);
  });

  socket.on("moveToStart2", (payload) => {
    socket.broadcast.emit("moveToStart2", payload.items);
  });
  socket.on("deleteStart2", (payload) => {
    socket.broadcast.emit("deleteStart2", payload.item);
  });
  socket.on("fromStartToKitchen2", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen2", paylaod.item);
  });
  socket.on("fromKtichenToFinish2", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish2", paylaod.item);
  });
  socket.on("fromFinishToCheck2", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck2", paylaod.item);
  });
  socket.on("getChecks2", (paylaod) => {
    socket.broadcast.emit("getChecks2", paylaod.items);
  });

  socket.on("moveToStart3", (payload) => {
    socket.broadcast.emit("moveToStart3", payload.items);
  });
  socket.on("deleteStart3", (payload) => {
    socket.broadcast.emit("deleteStart3", payload.item);
  });
  socket.on("fromStartToKitchen3", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen3", paylaod.item);
  });
  socket.on("fromKtichenToFinish3", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish3", paylaod.item);
  });
  socket.on("fromFinishToCheck3", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck3", paylaod.item);
  });
  socket.on("getChecks3", (paylaod) => {
    socket.broadcast.emit("getChecks3", paylaod.items);
  });

  socket.on("moveToStart4", (payload) => {
    socket.broadcast.emit("moveToStart4", payload.items);
  });
  socket.on("deleteStart4", (payload) => {
    socket.broadcast.emit("deleteStart4", payload.item);
  });
  socket.on("fromStartToKitchen4", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen4", paylaod.item);
  });
  socket.on("fromKtichenToFinish4", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish4", paylaod.item);
  });
  socket.on("fromFinishToCheck4", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck4", paylaod.item);
  });
  socket.on("getChecks4", (paylaod) => {
    socket.broadcast.emit("getChecks4", paylaod.items);
  });

  socket.on("moveToStart5", (payload) => {
    socket.broadcast.emit("moveToStart5", payload.items);
  });
  socket.on("deleteStart5", (payload) => {
    socket.broadcast.emit("deleteStart5", payload.item);
  });
  socket.on("fromStartToKitchen5", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen5", paylaod.item);
  });
  socket.on("fromKtichenToFinish5", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish5", paylaod.item);
  });
  socket.on("fromFinishToCheck5", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck5", paylaod.item);
  });
  socket.on("getChecks5", (paylaod) => {
    socket.broadcast.emit("getChecks5", paylaod.items);
  });

  socket.on("moveToStart6", (payload) => {
    socket.broadcast.emit("moveToStart6", payload.items);
  });
  socket.on("deleteStart6", (payload) => {
    socket.broadcast.emit("deleteStart6", payload.item);
  });
  socket.on("fromStartToKitchen6", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen6", paylaod.item);
  });
  socket.on("fromKtichenToFinish6", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish6", paylaod.item);
  });
  socket.on("fromFinishToCheck6", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck6", paylaod.item);
  });
  socket.on("getChecks6", (paylaod) => {
    socket.broadcast.emit("getChecks6", paylaod.items);
  });

  socket.on("moveToStart7", (payload) => {
    socket.broadcast.emit("moveToStart7", payload.items);
  });
  socket.on("deleteStart7", (payload) => {
    socket.broadcast.emit("deleteStart7", payload.item);
  });
  socket.on("fromStartToKitchen7", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen7", paylaod.item);
  });
  socket.on("fromKtichenToFinish7", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish7", paylaod.item);
  });
  socket.on("fromFinishToCheck7", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck7", paylaod.item);
  });
  socket.on("getChecks7", (paylaod) => {
    socket.broadcast.emit("getChecks7", paylaod.items);
  });

  socket.on("moveToStart8", (payload) => {
    socket.broadcast.emit("moveToStart8", payload.items);
  });
  socket.on("deleteStart8", (payload) => {
    socket.broadcast.emit("deleteStart8", payload.item);
  });
  socket.on("fromStartToKitchen8", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen8", paylaod.item);
  });
  socket.on("fromKtichenToFinish8", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish8", paylaod.item);
  });
  socket.on("fromFinishToCheck8", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck8", paylaod.item);
  });
  socket.on("getChecks8", (paylaod) => {
    socket.broadcast.emit("getChecks8", paylaod.items);
  });

  socket.on("moveToStart9", (payload) => {
    socket.broadcast.emit("moveToStart9", payload.items);
  });
  socket.on("deleteStart9", (payload) => {
    socket.broadcast.emit("deleteStart9", payload.item);
  });
  socket.on("fromStartToKitchen9", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen9", paylaod.item);
  });
  socket.on("fromKtichenToFinish9", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish9", paylaod.item);
  });
  socket.on("fromFinishToCheck9", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck9", paylaod.item);
  });
  socket.on("getChecks9", (paylaod) => {
    socket.broadcast.emit("getChecks9", paylaod.items);
  });

  socket.on("moveToStart10", (payload) => {
    socket.broadcast.emit("moveToStart10", payload.items);
  });
  socket.on("deleteStart10", (payload) => {
    socket.broadcast.emit("deleteStart10", payload.item);
  });
  socket.on("fromStartToKitchen10", (paylaod) => {
    socket.broadcast.emit("fromStartToKitchen10", paylaod.item);
  });
  socket.on("fromKtichenToFinish10", (paylaod) => {
    socket.broadcast.emit("fromKtichenToFinish10", paylaod.item);
  });
  socket.on("fromFinishToCheck10", (paylaod) => {
    socket.broadcast.emit("fromFinishToCheck10", paylaod.item);
  });
  socket.on("getChecks10", (paylaod) => {
    socket.broadcast.emit("getChecks10", paylaod.items);
  });
  socket.on("disconnect", () => {
    console.log(`user: ${socket.id} is OUT`);
  });
});
server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
