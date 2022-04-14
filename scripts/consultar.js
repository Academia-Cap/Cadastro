function loadAluno() {
    let cad = new Aluno();
    cad.consultar();
}

function display(dados) {
    let lista = JSON.parse(dados);
    var tag = ""
    for (let indice in lista) {
        tag += `<tr>
                    <td>${lista[indice].id} </td>
                    <td>${lista[indice].nome} </td>
                    <td>${lista[indice].login} </td>   
                    <td>${lista[indice].senha} </td> 
                    <td>${lista[indice].email} </td>     
                    <td>${lista[indice].escola} </td>  
                    <td>${lista[indice].matricula} </td>                
                    <td>
                        <a href="editar.html?id=${lista[indice].id}"><i class="bi bi-pencil"></i></a>
                        <a href="#" onclick="excluir(${lista[indice].id})"><i class="bi bi-trash"></i></a>
                    </td>                
                </tr>`
        document.getElementsByTagName("tbody")[0].innerHTML = tag;
    }
}

function excluir(idAluno) {
        let obj = new Aluno()
        obj.deletar(idAluno)
    }