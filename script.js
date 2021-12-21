const listaServicos = [];

//Preview da imagem no formulario
var preview = document.getElementById('previewimage');
preview.style.display= "none";
var carregarImagem = function(event) {
  preview.style.display="block"
  preview.src= arquivo.value
};

//Função que ativa ao enviar o formulário adicionando um serviço novo
 function adicionarServico(){
   //Declarando os valores de cada variavel de acordo com o que o usuario preencher
    let nome = document.getElementById('servico').value;
    let arquivo = document.getElementById('arquivo').value;
    let descricao = document.getElementById('descricao').value;
    let tabela = document.getElementById('minha-tabela');
    let servico ={
      nome: nome,
      arquivo: arquivo,
      descricao: descricao
    }
    //Adicionando os dados a lista geral
    listaServicos.push(servico)

    //Condicional para impedir de criar um serviço em branco
    if(nome.length>0 && descricao.length>2 && arquivo.length>5){

    //Criação do serviço na tabela
    let tamanhoTabela = tabela.rows.length; //Calculando o tamanho da Tabela
    let linha = tabela.insertRow(tamanhoTabela); //Inserindo uma linha abaixo da Tabela
    let cell1 = linha.insertCell(0); //Inserindo as celulas na linha nova
    let cell2 = linha.insertCell(1);
    let cell3 = linha.insertCell(2);
    let cell4 = linha.insertCell(3);

    //Criação do Botão de editar e remover para inserir na célula
    let btnEditar = '<button class="btn btn-secondary m-1">editar</button>'
    let btnRemover = '<button class="btn btn-danger m-1" onclick="removerServico(this)">excluir</button>'

    //Aqui estamos fazendo a inserção dos dados nas celulas novas da tabela
    cell1.innerHTML = nome
    cell2.innerHTML = '<img src="' + arquivo + '" class="img-thumbnail h-50"/>'
    cell3.innerHTML = descricao
    cell4.innerHTML = btnEditar + btnRemover 

    //Nesta etapa forneço um valor em branco para apagar todos os campos ao enviar
    document.getElementById('servico').value = "";
    document.getElementById('arquivo').value = "";
    document.getElementById('descricao').value = "";
    preview.src= ""
    preview.style.display="none"

} else{
  window.alert('Estão faltando dados para inserir o serviço novo!')
}}


function removerServico(r){
  var i = r.parentNode.parentNode.rowIndex;
  let tabela = document.getElementById('minha-tabela');
  tabela.deleteRow(i)
}

function editarServico(b) (

  //Localizando o nome do serviço do botão que clicarmos para comparar
  let elemento = b.parentNode.parentNode.firstElementChild.innerHTML;
  //Localizando qual array o serviço se encontra
  let elementoNoArray = listaServicos.findIndex(
    (servico) => servico.nome === elemento);

    if (elementoNoArray === -1) return;
    
  //Listagem do objeto dentro da array no formulário
  let nome = document.getElementById("nome");
  nome.value = listaServicos[elementoNoArray].nome;
  let imagem = document.getElementById("imagem");
  imagem.value = listaServicos[elementoNoArray].imagem;
  let descricao = document.getElementById("descricao");
  descricao.value = listaServicos[elementoNoArray].descricao;
  carregarImagem();

  //Alterando os dados que editar dentro da array
  let btnAdicionar = document.getElementById("envio");
  btnAdicionar.setAttribute("onclick", "");
  btnAdicionar.addEventListener("click", function editar() {
    if(confirm('Salvar alterações?')){
  listaServicos[elementoNoArray].nome = nome.value;
  listaServicos[elementoNoArray].imagem = imagem.value;
  listaServicos[elementoNoArray].descricao = descricao.value;

  //Achando a posição do serviço novo dentro da table e trocando os dados dinamicamente junto com a alteração na array
  let posicao = b.parentNode.parentNode.children
    posicao[0].innerText = listaServicos[elementoNoArray].nome
    posicao[1].innerHTML = '<img src="' + listaServicos[elementoNoArray].imagem + '" id="img-tamanho" class="img-thumbnail"/>';
    posicao[2].innerText = listaServicos[elementoNoArray].descricao

  btnAdicionar.removeEventListener("click", editar)
  btnAdicionar.setAttribute("onclick", "adicionarServico()")   
  resetarForm()
  apagarPreview()
}});

  
  }
)
