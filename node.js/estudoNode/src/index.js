import { routes } from './routes.js';
import express from 'express';

const server = express();
server.use(routes)

server.listen(5000, () => {
    
});