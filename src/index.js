// importar a conexão criada
const db = require("./db");
// importar a tabela criada
const Aluno = require("./model/Aluno");
const Deficiencia = require("./model/Deficiencia");
const Responsavel = require("./model/Responsavel");
const AlunoResponsavel = require("./model/AlunoResponsavel");

// sincronizar a tabela criada com o banco de dados do heroku
async function sincronizar() {
    await db.sync();
}

// sincronizar();

// inserir objetos na tabela criada
async function inserir(obj) {
    let res = await Ingrediente.create(obj);
    console.log(res);
}

// realizar consultas na tabela criada
async function consultar() {
    let res = await Ingrediente.findAll();
    console.log(res);
}