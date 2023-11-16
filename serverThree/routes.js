"use strict";

const router = require("express").Router();
const backend = require("./controller");
const { logger } = require("./logger/index");
router.get("/", logger, backend.generateResponse);

module.exports = router;
