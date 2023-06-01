const express = require('express');
const app = express();

//Cria um objeto data
let data = new Date();

//importa o arquivo dados.js
let msgDia = require('./msgdodia');

app.get('/' , (req, res) => {
    let dia = data.getDate();
    let msgSelecionada = msgDia.retornarMsgDia(dia);
    res.json({mensagem: msgSelecionada});
});

app.listen(8080, () =>{
    console.log('Servidor iniciado em: ' + data);
});