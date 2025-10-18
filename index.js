import express from 'express';
const host = '0.0.0.0';
const porta = 3000; 

const server = express();//oferece ao dev um servidor http de modo expresso

server.get('/', (requisocao, resposta) => {
    resposta.send(`
        <body>
        <h1>Olá, bem vindo a pagina inicial</h1>
        </body>`)
});

server.get('/horaAtual', (requisocao, resposta) => {
    const horaAtual = new Date();
    const hora = horaAtual.getHours() + ":" + horaAtual.getMinutes() + ":" + horaAtual.getSeconds();
    resposta.send(`
        <body>
        <h1>agora é ${hora}</h1>
        </body>`)
});

server.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`);
});