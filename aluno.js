var URLAluno = "http://localhost:3000/aluno"

class Aluno{
    constructor(nome,login,senha,email,escola,matricula){
        this.nome = nome
        this.login = login
        this.senha = senha
        this.email = email
        this.escola = escola
        this.matricula = matricula
    }

    salvar(){
        fetch(URLAluno,{
            method: 'POST',
            body: JSON.stringify(this),
            headers: {'content-type':'application/JSON'}
        })
        .catch(erro => console.log(erro))
    }
    consultar() {
        fetch (URLAluno)
            .then(x => x.text())
            .then(data => display(data))
    }
}

