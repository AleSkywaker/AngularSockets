import Server from './classes/server';
import router from './routes/router';
import bodyparser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

//* Body parser
server.app.use(bodyparser.urlencoded({ extended: true }));
server.app.use(bodyparser.json());
//* Cors
server.app.use(cors({ origin: true, credentials: true }));
// * Rutas de servicio
server.app.use('/', router);

server.start(server.port, () => {
  console.log(`Servidor corriendo en puerto ${server.port}`);
});
