import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';

export default class Server {
  private static _instance: Server;
  public app: express.Application;
  public port: number;

  public io: socketIO.Server;
  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;
    this.httpServer = new http.Server(this.app);
    this.io = require('socket.io')(this.httpServer, {
      cors: {
        origin: 'http://localhost:4200',
        credentials: true,
      },
    });
    this.escucharSocket();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
    // return this._instance || t(his._instance = new Server());
  }
  private escucharSocket() {
    console.log('Escuchando conexiones');
    this.io.on('connection', () => {
      console.log('cliente de angular conectado');
    });
  }

  start(port: number, callback: Function) {
    this.httpServer.listen(port, callback());
  }
}
