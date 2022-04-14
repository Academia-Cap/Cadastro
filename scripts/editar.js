function editar() {
    const urlParametros  = new URLSearchParams(window.location.search)
    let idAluno = urlParametros.get('id')

    let obj = new Aluno()
    obj.consultarId(idAluno, preencherForm)
}

function preencherForm(dado){
    let ob = JSON.parse(dado);
    document.getElementById("id").value = ob.id
    document.getElementById("idNome").value = ob.nome
    document.getElementById("idLogin").value = ob.login
    document.getElementById("idSenha").value = ob.senha
    document.getElementById("idEmail").value = ob.email
    document.getElementById("idEscola").value = ob.escola
    document.getElementById("idMat").value = ob.matricula 
}

function gravar(){
    var id = document.getElementById("id").value
    var nome = document.getElementById("idNome").value
    var login = document.getElementById("idLogin").value
    var senha = document.getElementById("idSenha").value
    var email = document.getElementById("idEmail").value
    var escola = document.getElementById("idEscola").value
    var matricula = document.getElementById("idMat").value

    let aluno = new Aluno(id,nome,login,senha,email,escola,matricula)
    aluno.update();

    window.history.go(-1);//vericar com o professor
}

function voltar(){
    window.history.go(-1);
}
