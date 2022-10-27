const express = require("express");

const pacienteModel = require("../model/PacienteModel");

const router = express.Router();

router.post("/cadastrarPaciente", (req, res) => {
    let {
        nome_paciente,
        telefone_paciente,
        celular_paciente,
        email_paciente,
        nome_responsavel,
        telefone_responsavel,
    } = req.body;

    pacienteModel
        .create({
            nome_paciente,
            telefone_paciente,
            celular_paciente,
            email_paciente,
            nome_responsavel,
            telefone_responsavel,
        })
        .then(() => {
            res.status(201).json({ MSG: "Paciente inserido com sucesso" });
        })
        .catch((error) => {
            res.status(500).json({ MSG: error });
        });
});

router.get("/listarPaciente", (req, res) => {
    pacienteModel
        .findAll()
        .then((pacientes) => {
            res.status(200).send(pacientes);
        })
        .catch((error) => {
            res.status(500).json({ MSG: error });
        });
});

module.exports = router
