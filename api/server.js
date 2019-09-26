"use strict";

const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const { URL, PORT } = require("./utils/constants");

const { applyMiddleware } = require("./utils");
const middleWare = require("./middleware");
const { router: userRoutes } = require("./routes/users/userRoute");

//import user routes

const router = express();

applyMiddleware(middleWare, router);

//define the user routes on your router
router.use("/api/users", userRoutes);

const server = http.createServer(router);

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
