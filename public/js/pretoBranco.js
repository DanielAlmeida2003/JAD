//No load da pagina verificar a cor
window.onload = function() {
    verificarCor();
}

//Selectionar o botão
let botaoTema = document.querySelector(".btnMudarTema");
let menu = document.querySelector("nav ul");
let body = document.querySelector("body");

//Evento do botão
botaoTema.addEventListener('click', mudarCor);

console.log("dasdsa");
//Verficar cor
function verificarCor(e) {
    //Verificar se existe o localstorage
    if (window.localStorage.getItem("cor")) {

        //Verificar qual cor mudar com Local Storage
        if (window.localStorage.getItem("cor") == "Branco") {
            //Mudar as cores do botão
            botãoCor();
            menuCor();
            //Mudar as cores do body
            bodyColor();

        } else {

            //Mudar as cores do botão
            botãoCor();
            menuCor();
            //Mudar as cores do body
            bodyColor();
        }

    } else {

        //Atribuir o valor á variavel LocalStorage
        window.localStorage.setItem("cor", "Preto");

        //Mudar as cores do botão
        botãoCor();

        menuCor();
        //Mudar as cores do body
        bodyColor();

    }
}


//Mudar cor
function mudarCor(e) {
    //Verificar se existe o localstorage
    //Verificar qual cor mudar com Local Storage
    if (window.localStorage.getItem("cor") == "Branco") {

        //Mudar o valor do Local Storage
        window.localStorage.setItem("cor", "Preto");

        //Mudar as cores do botão
        botãoCor();

        //Mudar as cores do menu
        menuCor();

        //Mudar as cores do body
        bodyColor();

    } else {
        window.localStorage.setItem("cor", "Branco");

        //Mudar as cores do botão
        botãoCor();

        //Mudar as cores do Menu
        menuCor();

        //Mudar as cores do body
        bodyColor();

    }

}


function botãoCor(e) { //Verificar se existe o localstorage

    //Verificar qual cor mudar com Local Storage
    if (window.localStorage.getItem("cor") == "Branco") {


        //Mudar as cores do botão
        botaoTema.style.backgroundColor = "rgb(83, 83, 83)";
        botaoTema.style.color = "rgb(209, 209, 209)";
        botaoTema.style.border = "3px solid white";

    } else {

        //Mudar as cores do botão
        botaoTema.style.backgroundColor = "rgb(209, 209, 209)";
        botaoTema.style.color = "rgb(83, 83, 83)";
        botaoTema.style.border = "3px solid black";
    }

}

function menuCor(e) {
    //Verificar qual cor mudar com Local Storage
    if (window.localStorage.getItem("cor") == "Branco") {
        //Mudar as cores do menu
        menu.style.backgroundColor = "rgb(221, 221, 221)";
    } else {
        //Mudar as cores do menu
        menu.style.backgroundColor = "#262626";
    }
}

function bodyColor(e) {

    //Verificar qual cor mudar com Local Storage
    if (window.localStorage.getItem("cor") == "Branco") {
        //Mudar as cores do body
        body.style.backgroundColor = "rgb(245, 245, 245 )";
        body.style.color = "black";

    } else {
        //Mudar as cores do body
        body.style.backgroundColor = "#262626";
        body.style.color = "rgb(245, 245, 245 )";
    }

}