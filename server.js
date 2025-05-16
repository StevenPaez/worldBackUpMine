import http from 'node:http';
import { compressor } from './index.js';

const PORT = 9000;

const server = http.createServer((req, res) => {
    compressor(req, res);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!!!');
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});