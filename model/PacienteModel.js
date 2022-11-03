const Sequelize = require('sequelize');

const connection = require('../database/database')

const PacienteModel = connection.define(
    'tbl_pacientes',
    {
        cod_paciente:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        nome_paciente:{
            type: Sequelize.STRING(500),
            allowNull:true
        },
        telefone_paciente:{
            type: Sequelize.STRING(10),
            allowNull:true
        },
        celular_paciente:{
            type: Sequelize.STRING(11),
            allowNull:true
        },
        email_paciente:{
            type: Sequelize.STRING(100),
            allowNull:true
        },
        nome_responsavel:{
            type: Sequelize.STRING(500),
            allowNull:false
        },
        telefone_responsavel:{
            type:Sequelize.STRING(10),
            allowNull:false
        }
    }
);

// PacienteModel.sync({force:true});

module.exports = PacienteModel