"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.default.instance;
//* Body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//* Cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
// * Rutas de servicio
server.app.use('/', router_1.default);
server.start(server.port, () => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});