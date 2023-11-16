const servers = [
  {
    serverName: "Server One",
    URL: "http://localhost:",
    PORT: "3001",
  },
  {
    serverName: "Server Two",
    URL: "http://localhost:",
    PORT: "3002",
  },
  {
    serverName: "Server Three",
    URL: "http://localhost:",
    PORT: "3003",
  },
];

class Server {
  constructor(serverName, URL, PORT, next) {
    this.serverName = serverName;
    this.URL = URL;
    this.PORT = PORT;
    this.next = next;
  }
}

class ServerList {
  constructor(servers) {
    const { serverName, URL, PORT } = servers[0];
    this.start = new Server(serverName, URL, PORT);
    servers = servers.slice(1);
    this.generateList(this.start, servers);
  }

  generateList(server, servers) {
    const { serverName, URL, PORT } = servers[0];
    server.next = new Server(serverName, URL, PORT);
    if (servers.length > 1) {
      servers = servers.slice(1);
      this.generateList(server.next, servers);
    } else {
      server.next.next = this.start;
    }
  }
  getServer() {
    const temp = this.start;
    this.start = this.start.next;
    return temp;
  }
  addServer() {}
}

module.exports = new ServerList(servers);
