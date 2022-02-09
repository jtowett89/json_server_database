const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults("./node_modules/json-server-auth");

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3004;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
