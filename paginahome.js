function abrirLogin(){

    let card = document.getElementById("cardLogin");

    if(card.style.display === "flex"){
        card.style.display = "none";
    }

    else{
        card.style.display = "flex";
    }

}


document.addEventListener("click", function(event){

    let card = document.getElementById("cardLogin");

    let user = document.querySelector(".perfil");

    if(!card.contains(event.target) && !user.contains(event.target)){

        card.style.display = "none";

    }

});


let banners = [
    "banner.png",
    "banner2.png",
    "banner3.png"
];

let bannerAtual = 0;

function trocarBanner(){

    bannerAtual++;

    if(bannerAtual >= banners.length){
        bannerAtual = 0;
    }

    document.querySelector(".banner img").src = banners[bannerAtual];

    atualizarBolinhas();
}


function proximoBanner(){

    bannerAtual++;

    if(bannerAtual >= banners.length){
        bannerAtual = 0;
    }

    document.querySelector(".banner img").src = banners[bannerAtual];

    atualizarBolinhas();

}

function bannerAnterior(){

    bannerAtual--;

    if(bannerAtual < 0){
        bannerAtual = banners.length - 1;
    }

    document.querySelector(".banner img").src = banners[bannerAtual];

    atualizarBolinhas();

}


function atualizarBolinhas(){

    let bolinhas = document.querySelectorAll(".bolinhas div");

    bolinhas.forEach((bolinha) => {
        bolinha.classList.remove("ativa");
    });

    bolinhas[bannerAtual].classList.add("ativa");

}


setInterval(trocarBanner, 4000);


function pesquisar(){

    let valor = document.querySelector(".pesquisa").value;

    console.log("Pesquisando:", valor);

}