const dgram = require('dgram');
const readline = require('readline');

const client = dgram.createSocket('udp4');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const SERVER_PORT = 6000;
const SERVER_HOST = '127.0.0.1';

rl.on('line', (line) => {
  const msg = Buffer.from(line);
  client.send(msg, SERVER_PORT, SERVER_HOST, (err) => {
    if (err) console.error(err);
  });
});

client.on('message', (msg, rinfo) => {
  console.log('Resposta do servidor: ' + msg.toString());
});

console.log('Digite uma mensagem!:');
