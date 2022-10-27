const express = require('express');

const app = express();

app.use(express.json())

// Primeiro com esse arquivo
// const pacienteController = require('./model/PacienteModel')

const pacienteController = require('./controller/PacienteController')

app.use('/', pacienteController);

app.listen(3000, () => {
    console.log('Aplicação Rodando em - http://localhost:3000')
})