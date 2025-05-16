import { spawn } from 'child_process';
import { watch } from 'fs';

let server;

const starServer = () => {
    server = spawn('node', ['server.js'], { stdio: 'inherit' });
    console.log('🚀 Server started!');
    server.on('error', (err) => {
        console.error('‼️ Failed to start server:', err);
    });
}

const restartServer = () => {
    if (server) {
        server.kill();
        console.log('🔄 Restarting server...');
    }
    starServer();
}

starServer();
watch('./index.js', restartServer);