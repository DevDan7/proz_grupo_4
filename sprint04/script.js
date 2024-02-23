var LiHome = document.querySelector("#LiHome");
var LiMetas = document.querySelector("#LiMetas");
var LiMentorias = document.querySelector("#LiMentorias");
var LiPlanejamento = document.querySelector("#LiPlanejamento");
var LiConexoes = document.querySelector("#LiConexoes");
var LiGrupoEstudos = document.querySelector("#LiGrupoEstudos");

//evento de mouseover

LiHome.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#85aec0";
});

LiMetas.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#85aec0";
});

LiMentorias.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#85aec0";
});

LiPlanejamento.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#85aec0";
});

LiConexoes.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#85aec0";
});

LiGrupoEstudos.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#85aec0";
});

//evento de mouseout
LiHome.addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

LiMetas.addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

LiMentorias.addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

LiPlanejamento.addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

LiConexoes.addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});


LiGrupoEstudos.addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

let logo = document.getElementById("logo")
//console.log(logo)

let bottomCard = document.getElementsByClassName("bottom-card")
//console.log(bottomCard)

let Menu = document.querySelector("#aside-1 .Menu")
//console.log(Menu)

let listaMenu = document.querySelectorAll("aside .Menu li")
//console.log(listaMenu)

//for (let i = 0; i < listaMenu.length; i = i + 1){
//}
    //OU

for (let i = 0; i < listaMenu.length; i++){
    console.log("Elemento numero: " + i);
}

for (let i = 0; i < listaMenu.length; i++){
    console.log(listaMenu[i]);
}

//for (let i = 0; i < bottomCard.length; i++){
    //console.log(bottomCard[i]);
//}
    //OU DECLARAR UMA FUNÇÃO ASSIM:

function percorrerArray(lista){
    for (let i = 0; i < lista.length; i++){
        console.log(lista[i]);
    }
}

percorrerArray(bottomCard)