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