// Aqui preciso pegar o formulário, pois vou trabalhar com os dados que receber dele

const formulario = document.getElementById("agendamento");

// Essa função serve para impedir o comportamento padrão da página de recarregar

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();


// Objeto que armazena os dados do formulário

const respostaFormulario = {};

// Estrutura de repetição para pegar todos os elementos input do formulário e colocar em uma array
    
for (let element of formulario.elements){
    if (element.tagName === "INPUT") {
        respostaFormulario[element.name] = element.value;
    }
}

//Criando elemento div para postagem

const agendamento = document.createElement("div");

//Conteúdo a ser inserido

agendamento.innerHTML =
`
<h3>${respostaFormulario.titulo}</h3>
<h4>${respostaFormulario.data} - ${respostaFormulario.horario}</h4>
<h4>${respostaFormulario.mentor} - ${respostaFormulario.assunto}</h4>
`

agendamento.className = "novoAgendamento"

//Capturando elemennto pai e adicionando elemento filho

const agendamentos = document.querySelector(".seusAgendamentos");
agendamentos.appendChild(agendamento);

});