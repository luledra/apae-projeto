const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Aluno = require("./Aluno");

// criar uma nova tabela, com seu nome e atributos
const Deficiencia = db.define("Deficiencia",
    {
        id: {
            // definir o tipo (integer, double, string)
            type: DataTypes.INTEGER,
            // definir serial
            autoIncrement: true,
            // definir chave primária
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            // não permitir valor nulo
            allowNull: false
        },
        grau: DataTypes.STRING,
        idade_aquisicao: DataTypes.INTEGER, // se for null, quer dizer que adquiriu no nascimento
        limitacoes_fisicas: DataTypes.STRING,
        limitacoes_mentais: DataTypes.STRING,
        doencas_associadas: DataTypes.ARRAY(DataTypes.STRING),
        matricula_aluno: {
            type: DataTypes.INTEGER,
            references: {
                model: Aluno,
                key: 'matricula'
            }
        }
    }
);

// relacionamento um para muitos
Deficiencia.belongsTo(Aluno);
Aluno.hasMany(Deficiencia, {as: "deficiencias"});
// Aluno.getDeficiencias();
module.exports = Deficiencia;