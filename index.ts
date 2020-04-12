import Server from "./classes/server";
import AppRouter from './routes/app-router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();
//Middlewares
server.app.use(bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());
//CORS
server.app.use(cors({ origin: true, credentials: true }));
//Services
server.app.use('/', AppRouter);
server.start();