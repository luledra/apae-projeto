// Criar uma classe para o erro na função delete

class DeleteError extends Error {

    constructor() {
      super("Erro ao deletar. Insira um argumento válido.");
      this.name = "DeleteError";
    }

}

module.exports = DeleteError;