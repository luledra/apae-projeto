const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Responsavel = db.define("Responsavel",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endereco_rua: DataTypes.STRING,
        endereco_numero: DataTypes.INTEGER,
        endereco_bairro: DataTypes.STRING
    }
);

module.exports = Responsavel;