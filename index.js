const jsonServer = require("json-server"); //Importing json-server label
const server = jsonServer.create();
const router = jsonServer.router("d0b.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // chose port 

server.use(middlewares);
server.use(router);

server.listen(port); 