// Aqui preciso pegar o formulário, pois vou trabalhar com os dados que receber dele

const formulario = document.getElementById ("Metas");

// Essa função serve para impedir o comportamento padrão da página de recarregar

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();

// Objeto que armazena os dados do formulário

const metaSeleciona = {};

// Estrutura de repetição para pegar todos os elementos input do formulário e colocar em uma array

for (element of formulario.elements){
    if (element.tagValue = "SELECT" && element.name === "estudos"){
        metaSeleciona[element.name] = element.value;
        }
    }

//Criando elemento div para postagem

const novaMeta = document.createElement("div");

//Conteúdo a ser inserido

novaMeta.innerHTML = `
<h3>${metaSeleciona.estudos}</h3></h3>
<h2>Como está o andamento dessa meta</h2>
<select name="status-meta">
    <option value="pendente">Pendente</option>
    <option value="em_andamento">Em Andamento</option>
    <option value="concluido">Concluido</option>
</select>

`

novaMeta.className = "novaMeta"

//Capturando elemennto pai e adicionando elemento filho

const opcoesMetas = document.querySelector(".quadroMetas");
opcoesMetas.appendChild(novaMeta);

});