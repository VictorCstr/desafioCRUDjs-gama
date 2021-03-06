//Variavel global dos servicos
const listaServicos = [
  {
    nome: "Desenvolvimento Web",
    imagem: "images/ilustra-web.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
  {
    nome: "Marketing Digital",
    imagem: "images/ilustra-marketing.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
  {
    nome: "Consultoria UX",
    imagem: "images/ilustra-ux.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
];

//Preview da imagem no formulario
var preview = document.getElementById("previewimage");
preview.style.display = "none";
var carregarImagem = function (event) {
preview.style.display = "block";
preview.src = imagem.value;
};

//Função que ativa ao enviar o formulário adicionando um serviço novo
function adicionarServico() {
  //Declarando os valores de cada variavel de acordo com o que o usuario preencher
  let nome = document.getElementById("nome").value;
  let imagem = document.getElementById("imagem").value;
  let descricao = document.getElementById("descricao").value;
  let tabela = document.getElementById("minha-tabela");
  let servico = {
    nome: nome,
    imagem: imagem,
    descricao: descricao,
  };
  //Adicionando os dados a lista geral
  listaServicos.push(servico);

  //Condicional para impedir de criar um serviço em branco
  if (nome.length > 0 && imagem.length > 0 && descricao.length > 0) {
    //Criação do serviço na tabela
    let tamanhoTabela = tabela.rows.length; //Calculando o tamanho da Tabela
    let linha = tabela.insertRow(tamanhoTabela); //Inserindo uma linha abaixo da Tabela
    let cell1 = linha.insertCell(0); //Inserindo as celulas na linha nova
    let cell2 = linha.insertCell(1);
    let cell3 = linha.insertCell(2);
    let cell4 = linha.insertCell(3);

    //Criação do Botão de editar e remover para inserir na célula
    let btnEditar =
      '<button class="btn btn-secondary m-1" data-toggle="modal" data-target="#exampleModalCenter" onclick="editarServico(this)">editar</button>';
    let btnRemover =
      '<button class="btn btn-danger m-1" onclick="removerServico(this)">excluir</button>';

    //Aqui estamos fazendo a inserção dos dados nas celulas novas da tabela
    cell1.innerHTML = nome;
    cell2.innerHTML =
      '<img src="' + imagem + '"  id="img-tamanho" class="img-thumbnail"/>';
    cell3.innerHTML = descricao;
    cell4.innerHTML = btnEditar + btnRemover;

    resetarForm();
    apagarPreview();
    envio.setAttribute("data-dismiss", "modal");
  } else {
    window.alert("Estão faltando dados para inserir o serviço novo!");
    let envio = document.getElementById("envio");
    envio.setAttribute("data-dismiss", "");
  }
}

//Função para resetar os dados formulário
function resetarForm() {
  document.getElementById("nome").value = "";
  document.getElementById("imagem").value = "";
  document.getElementById("descricao").value = "";
}

//Função para apagar a imagem de preview quando clicarmos em reset do formulário
function apagarPreview() {
  preview.src = "";
  preview.style.display = "none";
}

function removerServico(a) {
  if (confirm("Você tem certeza que você quer deletar este serviço?")) {
    var i = a.parentNode.parentNode.rowIndex;
    let tabela = document.getElementById("minha-tabela");
    tabela.deleteRow(i);

    //Remoção do elemento da array global de serviços
    /*VAR elemento pega o vô do botão = TR,  e depois pega o elemento filho = 1ªTD com o nome
  do serviço e puxa seu texto para compararmos com o loop  */
    let elemento = a.parentNode.parentNode.firstElementChild.innerHTML;
    for (let i = 0; i < listaServicos.length; i++) {
      if (elemento === listaServicos[i].nome) {
        listaServicos.splice(i, 1);
      }
    }
  }
}

function editarServico(b) {
  //Localizando o nome do serviço do botão que clicarmos para comparar
  let elemento = b.parentNode.parentNode.firstElementChild.innerHTML;
  //Localizando qual array o serviço se encontra
  let elementoNoArray = listaServicos.findIndex(
    (servico) => servico.nome === elemento
  );

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
  let btnSalvar = document.getElementById("envio");
  btnSalvar.setAttribute("onclick", "");
  btnSalvar.addEventListener("click", function editar() {
   if(confirm('Salvar alterações?')){
      listaServicos[elementoNoArray].nome = nome.value;
      listaServicos[elementoNoArray].imagem = imagem.value;
      listaServicos[elementoNoArray].descricao = descricao.value;

      //Achando a posição do serviço novo dentro da table e trocando os dados dinamicamente junto com a alteração na array
      let posicao = b.parentNode.parentNode.children;
      posicao[0].innerText = listaServicos[elementoNoArray].nome;
      posicao[1].innerHTML =
        '<img src="' +
        listaServicos[elementoNoArray].imagem +
        '" id="img-tamanho" class="img-thumbnail"/>';
      posicao[2].innerText = listaServicos[elementoNoArray].descricao;
      resetarForm();
      apagarPreview();
      }   //Encerra o IF
      btnSalvar.removeEventListener("click", editar);
      btnSalvar.setAttribute("onclick", "adicionarServico()")
  }); //Encerra a função no botão de Salvar alterações
      BotaoFechamento = document.querySelector('#botaofecha')
      BotaoFechamento.style.display = 'none'   
} // Encerra a função de editar

function alerta(){
  let nome = document.getElementById("nome").value;
  if(nome.length>0){
    setTimeout( () => {
      alert('Você ainda está editando o serviço antigo, pois não salvou ele!')} , 500)
      BotaoFechamento = document.querySelector('#botaofecha')
      BotaoFechamento.style.display = 'block'
  }
}