// Importar a conexão criada
const db = require("./db");
// Importar as tabelas criada
const Aluno = require("./model/Aluno");
const Deficiencia = require("./model/Deficiencia");
const Responsavel = require("./model/Responsavel");
const AlunoResponsavel = require("./model/AlunoResponsavel");
const DAO = require("./service/DAO");

// Sincronizar as tabelas criada com o banco de dados do heroku
async function sincronizar() {
    await db.sync();
}

// sincronizar();

// Testar o DAO
const deficiencia = new DAO(Deficiencia);
deficiencia.create({id: 101, nome: "Síndrome de Down"});
deficiencia.read();
deficiencia.read(101);
deficiencia.update(101, {id: 101, nome: "Paralisia Cerebral"});
deficiencia.update(100, {nome: "Síndrome de Down"});
deficiencia.delete(101);