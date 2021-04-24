// Criar uma camada de abstração DAO que permita o CRUD (create, read, update e delete) de cada entidade do seu projeto

const DeleteError = require("../error");

class DAO {
    // Recebe uma entidade como argumento
    constructor(model) {
        this.model = model;
    }

    // Insere uma nova tupla
    async create(obj) {
        try {
            let res = await this.model.create(obj);
            console.log(res);
        } catch(e) {
            console.log(e.message);
        }
    }

    // Retorna uma tupla pelo seu id ou, caso não seja passado um id como argumento, retorna todas as tuplas
    async read(id) {
        let res;
        try {
            if(id) {
                res = await this.model.findByPk(id);
            } else {
                res = await this.model.findAll();
                throw new Error("Nenhum argumento foi inserido. Todas as tuplas serão retornadas.");
            }
        }
        catch(e) {
            console.log(e.message);
        } finally {
            console.log(res);
        }    
    }

    // Atualiza uma tupla, passando como argumento o seu id e um objeto com as mudanças que serão feitas
    async update(id, obj) {
        try {
            let object = await this.model.findByPk(id);
            await object.update(obj);
            console.log(object);
        } catch(e) {
            if(e.name == "TypeError") {
                console.log("Insira um argumento válido.");
            } else {
                console.log(e.message);
            }
        }
    }

    // Deleta uma tupla pelo seu id
    async delete(id) {
        try {
            if(id) {
                let object = await this.model.findByPk(id);
                await object.destroy();
            } else {
                throw new DeleteError();
            }
        } catch(e) {
            console.log(`${e.name}: ${e.message}`);
        }
    }
}

module.exports = DAO;