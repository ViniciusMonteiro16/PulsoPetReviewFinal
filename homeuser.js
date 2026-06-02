function abrirLogin(event){

    event.stopPropagation();

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

    let userArea = document.querySelector(".user-area");

    if(!userArea.contains(event.target)){

        card.style.display = "none";

    }

});

let banners = [
    "banner.png",
    "banner2.png",
    "banner3.png"
];

let bannerAtual = 0;



function atualizarBanner(){

    let imagem = document.querySelector(".banner img");

    if(imagem){
        imagem.src = banners[bannerAtual];
    }

    atualizarBolinhas();

}

function atualizarBolinhas(){

    let bolinhas = document.querySelectorAll(".bolinhas div");

    bolinhas.forEach((bolinha) => {
        bolinha.classList.remove("ativa");
    });

    bolinhas[bannerAtual].classList.add("ativa");

}

function proximoBanner(){

    bannerAtual++;

    if(bannerAtual >= banners.length){
        bannerAtual = 0;
    }

    atualizarBanner();

}

let produtos = [

    {

        nome:
        "Ração Pedigree 10,1kg cachorro",

        imagem:
        "pedigree home.png",

        pagina:
        "produto.html"

    },

    {

        nome:
        "Ração Whiskas 10,1kg gato",

        imagem:
        "whiskas home.png",

        pagina:
        "produto.html"

    },

    {

        nome:
        "Brinquedo mordedor - cachorro",

        imagem:
        "mordedor home.png",

        pagina:
        "produto.html"

    },

    {

        nome:
        "Comedouro PetTimer preto",

        imagem:
        "produtopreto.png",

        pagina:
        "produtopreto.html"

    },

    {

        nome:
        "Mochila Chalesco com rodas",

        imagem:
        "mochila chalesco.png",

        pagina:
        "mochilaChalesco.html"

    },

    {

        nome:
        "Petiscos Creamy Treats",

        imagem:
        "petisco creamy treats.png",

        pagina:
        "PetiscoCreamTreats.html"

    },

    {

        nome:
        "Petiscos Selections",

        imagem:
        "petisco selection.png",

        pagina:
        "PetiscoSelections.html"

    },

    {

        nome:
        "SpecialDog 10.1kg - cachorro",

        imagem:
        "specialdog ração.png",

        pagina:
        "SpecialDogRação.html"

    },

    {

        nome:
        "Magnus 15kg - cachorro",

        imagem:
        "magnus cachorro.png",

        pagina:
        "MagnusCachorro.html"

    },

    {

        nome:
        "Brinquedo Fuzz Varinha - gatos",

        imagem:
        "fuzz varinha.png",

        pagina:
        "FuzzVarinha.html"

    },

    {

        nome:
        "Biscoito Pedigree Biscrok - cachorro ",

        imagem:
        "biscrok pedigree.png",

        pagina:
        "produtoteste.html"

    },

    {

        nome:
        "Brinquedo de bolinha - cachorro ",

        imagem:
        "bolinha cachorro.png",

        pagina:
        "BolinhaCachorro.html"

    },

    {

        nome:
        "Caixa Spike Off-white ",

        imagem:
        "caixa spike.png",

        pagina:
        "CaixaSpike.html"

    },

    {

        nome:
        "Carrinho Chalesco Confort Ride preto",

        imagem:
        "carrinho chalesco.png",

        pagina:
        "CarrinhoChalesco.html"

    },

    {

        nome:
        "Brinquedo Fuzz Crocodilo - gatos",

        imagem:
        "fuzz jacare.png",

        pagina:
        "FuzzCrocodilo.html"

    },

    {

        nome:
        "Brinquedo Fuzz Jam - gatos",

        imagem:
        "fuzz jam.png",

        pagina:
        "FuzzJam.html"

    },

    {

        nome:
        "Brinquedo Fuzz Jam - gatos",

        imagem:
        "fuzz jam.png",

        pagina:
        "FuzzJam.html"

    },


];

function pesquisar(){



    let valor =
    document.querySelector(".pesquisa")
    .value.toLowerCase();



    let resultado =
    document.getElementById(
        "resultadoPesquisa"
    );



    resultado.innerHTML = "";



    if(valor == ""){

        resultado.style.display =
        "none";

        return;

    }



    let encontrados =
    produtos.filter((produto) =>

        produto.nome
        .toLowerCase()
        .includes(valor)

    );



    if(encontrados.length == 0){

        resultado.style.display =
        "none";

        return;

    }



    encontrados.forEach((produto) => {

        resultado.innerHTML += `

        <a href="${produto.pagina}"
        class="item-pesquisa">

            <img src="${produto.imagem}">

            <p>${produto.nome}</p>

        </a>

        `;

    });



    resultado.style.display =
    "block";

}