const jsonServer = require('json-server');
const cors = require('cors'); // Adicionando a biblioteca cors
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // Habilitando CORS

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server está em execução!');
});
