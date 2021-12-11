const form = document.getElementById('form-oculto')
 
function fechar(){
    form.style.display='none'
}

function abrirForm(){
    form.style.display='block'
}


function receberDados(){
  const nome = document.getElementById('servico').value;
  const arquivo = document.getElementById('arquivo').value;
  const descricao = document.getElementById('descricao').value;
  console.log(nome,arquivo,descricao)
    listarDados(nome, arquivo, descricao);
}

function listarDados(nome, arquivo, descricao){

}
