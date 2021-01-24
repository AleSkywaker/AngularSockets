"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enviroment_1 = require("../../global/enviroment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = enviroment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.escucharSocket();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
        // return this._instance || t(his._instance = new Server());
    }
    escucharSocket() {
        console.log('Escuchando conexiones');
        this.io.on('connection', (cliente) => {
            console.log('cliente conectado');
        });
    }
    start(port, callback) {
        this.httpServer.listen(port, callback());
    }
}
exports.default = Server;