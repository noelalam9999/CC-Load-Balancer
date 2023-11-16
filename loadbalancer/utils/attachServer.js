const server = require("./roundRobin");
function attachServer(req, res, next) {
  const newServer = server.getServer();
  req.server = newServer;
  next();
}

module.exports = { attachServer };
