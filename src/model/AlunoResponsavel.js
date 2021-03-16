const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Aluno = require("./Aluno");
const Responsavel = require("./Responsavel");

const AlunoResponsavel = db.define("AlunoResponsavel",
    {
        matricula_aluno: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Aluno,
                key: 'matricula'
            }
        },
        id_responsavel: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Responsavel,
                key: 'id'
            }
        }
    }
);

// relacionamento muitos para muitos
Aluno.belongsToMany(Responsavel, {through: AlunoResponsavel});
Responsavel.belongsToMany(Aluno, {through: AlunoResponsavel});
module.exports = AlunoResponsavel;