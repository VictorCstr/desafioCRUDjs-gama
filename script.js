//Variavel global dos servicos
const listaServicos = [
  {
    nome: "Desenvolvimento Web",
    imagem: "imagens/ilustra-web.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
  {
    nome: "Marketing Digital",
    imagem: "imagens/ilustra-marketing.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
  {
    nome: "Consultoria UX",
    imagem: "imagens/ilustra-ux.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
];

//Preview da imagem no formulario
var preview = document.getElementById("previewimage");
preview.style.display = "none";
var carregarImagem = function (event) {
  preview.style.display = "block";
  preview.src = arquivo.value;
};

//Função que ativa ao enviar o formulário adicionando um serviço novo
function adicionarServico() {
  //Declarando os valores de cada variavel de acordo com o que o usuario preencher
  let nome = document.getElementById("servico").value;
  let arquivo = document.getElementById("arquivo").value;
  let descricao = document.getElementById("descricao").value;
  let tabela = document.getElementById("minha-tabela");
  let servico = {
    nome: nome,
    imagem: arquivo,
    descricao: descricao,
  };
  //Adicionando os dados a lista geral
  listaServicos.push(servico);

  //Condicional para impedir de criar um serviço em branco
  if (nome.length > 0 && descricao.length > 2 && arquivo.length > 5) {
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
      '<img src="' + arquivo + '" id="img-tamanho" class="img-thumbnail"/>';
    cell3.innerHTML = descricao;
    cell4.innerHTML = btnEditar + btnRemover;

    resetarForm()
    apagarPreview()
    envio.setAttribute("data-dismiss", "modal");

  } else {
    //Alerta de dados faltando e impedimento do modal fechar
    window.alert("Estão faltando dados para inserir o serviço novo!");
    let envio = document.getElementById("envio");
    envio.setAttribute("data-dismiss", "");
  }
}

//Função para resetar os dados formulário
function resetarForm(){
  document.getElementById("servico").value = "";
  document.getElementById("arquivo").value = "";
  document.getElementById("descricao").value = "";
}

//Função para apagar a imagem de preview quando clicarmos em reset do formulário
function apagarPreview() {
  preview.src = "";
  preview.style.display = "none";
}

function removerServico(a) {
  //Remoção do serviço da tabela
  if (confirm("Você tem certeza que você quer deletar este serviço?")) {
    let i = a.parentNode.parentNode.rowIndex;
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
  let elemento = b.parentNode.parentNode.firstElementChild.innerHTML;
  //Loop dentro da array para localizar a array correspondente
  //trazendo o formulario preenchido
  for (let i = 0; i < listaServicos.length; i++) {
    if (elemento === listaServicos[i].nome) {
      let nome = document.getElementById("servico");
      nome.value = listaServicos[i].nome;
      let arquivo = document.getElementById("arquivo");
      arquivo.value = listaServicos[i].imagem;
      let descricao = document.getElementById("descricao");
      descricao.value = listaServicos[i].descricao;
      carregarImagem();

      //Alterando os dados que editar dentro da array
      let btnAdicionar = document.getElementById("envio");
      btnAdicionar.setAttribute("onclick", "");


      btnAdicionar.addEventListener("onclick", function editar () {
        listaServicos[i].nome = nome.value;
        listaServicos[i].imagem = arquivo.value;
        listaServicos[i].descricao = descricao.value;
        console.log(listaServicos)
      
      });
    } 
  } 
}

resetarForm()
apagarPreview()