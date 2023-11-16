"use strict";

const { networkInterfaces } = require("os");
async function logger(req, res, next) {
  console.log("Received request from 127.0.0.1");
  console.log("GET / HTTP/1.1");
  console.log("Host: localhost");
  console.log(`User-Agent - ${req.get("User-Agent")}`);
  console.log("Accept: */*");
  next();
}

module.exports = { logger };
