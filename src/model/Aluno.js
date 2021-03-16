const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Aluno = db.define("Aluno",
    {
        matricula: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data_nasc: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        data_ingresso: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        foto: DataTypes.STRING,
        // colocar o link do arquivo da foto
        transtornos: DataTypes.ARRAY(DataTypes.STRING),
        ficha_comportamental: DataTypes.TEXT,
        avaliacao_anual: DataTypes.TEXT
    }
);

module.exports = Aluno;