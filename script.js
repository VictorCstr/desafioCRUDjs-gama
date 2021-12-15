//Preview da imagem no formulario
var preview = document.getElementById('previewimage');
preview.style.display= "none";
var carregarImagem = function(event) {
  preview.style.display="block"
  preview.src= arquivo.value
};

//Função que ativa ao enviar o formulário adicionando um serviço novo
 function adicionarServico(){
    let nome = document.getElementById('servico').value;
    let arquivo = document.getElementById('arquivo').value;
    let descricao = document.getElementById('descricao').value;
    let tabela = document.getElementById('minha-tabela');

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
    let btnRemover = '<button class="btn btn-danger m-1">excluir</button>'

    //Aqui estamos fazendo a inserção dos dados nas celulas novas da tabela
    cell1.innerHTML = nome
    cell2.innerHTML = '<img src="' + arquivo + '" class="img-thumbnail h-50"/>'
    cell3.innerHTML = descricao
    cell4.innerHTML = btnEditar + btnRemover 

    //Nesta etapa forneço um valor em branco para apagar todos os campos ao enviar
    document.getElementById('servico').value = "";
    document.getElementById('arquivo').value = "";
    document.getElementById('descricao').value = "";


} else{
  window.alert('Estão faltando dados para inserir o serviço novo!')
}}
