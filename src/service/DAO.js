// Criar uma camada de abstração DAO que permita o CRUD (create, read, update e delete) de cada entidade do seu projeto

class DAO {
    // Recebe uma entidade como argumento
    constructor(model) {
        this.model = model;
    }

    // Insere uma nova tupla
    async create(obj) {
        let res = await this.model.create(obj);
        console.log(res);
    }

    // Retorna uma tupla pelo seu id ou, caso não seja passado um id como argumento, retorna todas as tuplas
        async read(id) {
        let res;
        if(id) {
            res = await this.model.findByPk(id);
        } else {
            res = await this.model.findAll();
        } console.log(res);
    }

    // Atualiza uma tupla, passando como argumento o seu id e um objeto com as mudanças que serão feitas
    async update(id, obj) {
        let object = await this.model.findByPk(id);
        await object.update(obj);
        console.log(object);
    }

    // Deleta uma tupla pelo seu id
    async delete(id) {
        let object = await this.model.findByPk(id);
        await object.destroy();
    }
}

module.exports = DAO;