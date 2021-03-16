// instalar o sequelize (para gerenciar banco de dados) executando npm i sequelize

// criar uma biblioteca sequeline
let Sequelize = require("sequelize");
// criar uma conexão com o banco de dados do heroku colocando o URI das credenciais
let db = new Sequelize(
    "postgres://zyzulohjusxily:fa1e7770a7be498eb68c28b4a96a3a057fa0bb6c9580e273bbd37eb02b7a2222@ec2-54-167-168-52.compute-1.amazonaws.com:5432/d2266oov3vpfoi",
    {
        // especificar qual o sgbd
        dialect: "postgres",
        // para que a conexão do heroku com a máquina não seja rejeitada
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        // para que o nome da tabela não seja alterado para o plural
        define: {
            freezeTableName: true
        }
    }
);

// exportar a conexão para outros arquivos
module.exports = db;