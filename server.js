const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log('Mensagem recebida de ' + rinfo.address + ':' + rinfo.port + ' - ' + msg);
  const resposta = Buffer.from('Mensagem recebida!');
  server.send(resposta, rinfo.port, rinfo.address);
});

server.bind(6000, () => {
  console.log('Servidor UDP escutando na porta 6000');
});
