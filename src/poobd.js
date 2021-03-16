// devemos executar "npm init -y" no terminal para iniciar uma biblioteca de dependências
// para que não sejam feitas várias perguntas sobre as informações do projeto, digitamos -y (yes para todas)
// será criado um arquivo "packaje.json" com as informações do projeto
// após isso, executar "npm install pg" para instalar o node-postgres para conectar ao nosso banco de dados
// será criado um arquivo "package-lock.json", que nunca deve ser alterado

// importar o pg (postgres), extraindo o pool de conexões
const {Pool} = require("pg");
// criar uma função assíncrona que cria uma conexão do pool
async function criarConexao() {
    // criar um objeto do tipo pool
    const pool = new Pool({
        // adicionar as configurações do banco de dados
        connectionString: 'URI',
        // para que a conexão do heroku com a máquina não seja rejeitada
        ssl: {
            rejectUnauthorized: false
        }
    });
    // chamar a conexão de forma síncrona
    let con = await pool.connect();
    // adicionar comandos no programa de forma síncrona e evitando SQL injection
    await con.query("insert into pizza (sabor, tamanho, valor) values ($1, $2, $3)",["Frango", "Família", 22.00]);
    await con.query("insert into pizza (sabor, tamanho, valor) values ($1, $2, $3)",["Frango", "Família", 40.00]);
    await con.query("insert into pizza (sabor, tamanho, valor) values ($1, $2, $3)",["Frampiry", "Pequena", 25.00]);
    await con.query("insert into pizza (sabor, tamanho, valor) values ($1, $2, $3)",["Frampiry", "Pequena", 43.00]);
    await con.query("insert into pizza (sabor, tamanho, valor) values ($1, $2, $3)",["Nenhum1", "Média", 1.00]);
    await con.query("insert into pizza (sabor, tamanho, valor) values ($1, $2, $3)",["Nenhum2", "Média", 2.00]);
    await con.query("update pizza set tamanho = 'Pequena' where valor = 22.00")
    await con.query("update pizza set tamanho = 'Família' where valor = 43.00");
    await con.query("delete from pizza where sabor like 'Nenhum%'");
    // realizar uma consulta no banco de dados de forma síncrona
    let res = await con.query("select * from pizza");
    // iterar por todas as tuplas da consulta, imprimindo-as
    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    }
    // liberar a conexão para o pool de conexões gerenciá-la novamente
    con.release();
}

criarConexao();