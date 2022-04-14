function cadastrar(){
    var nome = document.getElementById("idNome").value
    var login = document.getElementById("idLogin").value
    var senha = document.getElementById("idSenha").value
    var email = document.getElementById("idEmail").value
    var escola = document.getElementById("idEscola").value
    var matricula = document.getElementById("idMat").value

    let aluno = new Aluno(0,nome,login,senha,email,escola,matricula)
    aluno.salvar()
    
    window.location.href='consulta.html'
}