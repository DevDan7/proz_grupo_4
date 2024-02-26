// Aqui preciso pegar o formulário, pois vou trabalhar com os dados que receber dele

const formulario = document.getElementById("agendamento");


// Essa função serve para impedir o comportamento padrão da página de recarregar

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (!validaForm(formulario)) {
        return; // Se a validação falhar, não faz nada
    }


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

function validaForm(frm) {

    if(frm.titulo.value == "" || frm.titulo.value == null || frm.titulo.value.lenght < 3) {

        alert("Por favor, indique o Titulo.");

        frm.titulo.focus();

        

        return false;
    }
    
       if(frm.data.value == "" || frm.data.value == null || frm.data.value.lenght < 3) {

        alert("Por favor, indique a data.");

        frm.data.focus();

        return false;
        
    }
    
       
       if(frm.horario.value == "" || frm.horario.value == null || frm.horario.value.lenght < 3) {

        alert("Por favor, indique o horario.");

        frm.horario.focus();

        return false;
        
    }
    
       
       if(frm.mentor.value == "" || frm.mentor.value == null || frm.mentor.value.lenght < 3) {

        alert("Por favor, indique o  Mentor.");

        frm.mentor.focus();

        return false;
        
    }
    
       
       if(frm.assunto.value == "" || frm.assunto.value == null || frm.assunto.value.lenght < 3) {

        alert("Por favor, indique a Assunto.");

        frm.assunto.focus();

        return false;
        
    }

    return true;
}