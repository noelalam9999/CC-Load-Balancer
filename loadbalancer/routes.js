"use strict";

const router = require("express").Router();
const loadBalancer = require("./controller/loadbalancer");
const { logger } = require("./logger/index");
const { attachServer } = require("./utils/attachServer");
router.get("/", logger, attachServer, loadBalancer.forwardToLoadbalancer);

module.exports = router;
