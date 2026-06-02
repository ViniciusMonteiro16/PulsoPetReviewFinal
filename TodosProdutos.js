const cards = document.querySelectorAll(".card");
const marcas = document.querySelectorAll(".marca");
const pets = document.querySelectorAll(".pet");
const precos = document.querySelectorAll("input[name='preco']");
const limpar = document.getElementById("limparFiltros");

function filtrarProdutos(){

    const marcasSelecionadas = [...marcas]
    .filter(m => m.checked)
    .map(m => m.value);

    const petsSelecionados = [...pets]
    .filter(p => p.checked)
    .map(p => p.value);

    const precoSelecionado = [...precos]
    .find(p => p.checked);

    cards.forEach(card => {

        const marca = card.dataset.marca;
        const pet = card.dataset.pet;
        const preco = parseFloat(card.dataset.preco);

        let mostrar = true;

        // FILTRO MARCA
        if(
            marcasSelecionadas.length > 0 &&
            !marcasSelecionadas.includes(marca)
        ){
            mostrar = false;
        }

        // FILTRO PET
        if(
            petsSelecionados.length > 0 &&
            !petsSelecionados.includes(pet)
        ){
            mostrar = false;
        }

        // FILTRO PREÇO
        if(precoSelecionado){

            const valor = precoSelecionado.value;

            if(valor === "0-25" && !(preco <= 25)){
                mostrar = false;
            }

            if(valor === "25-50" && !(preco > 25 && preco <= 50)){
                mostrar = false;
            }

            if(valor === "50-100" && !(preco > 50 && preco <= 100)){
                mostrar = false;
            }

            if(valor === "100-200" && !(preco > 100 && preco <= 200)){
                mostrar = false;
            }

            if(valor === "200+" && !(preco > 200)){
                mostrar = false;
            }
        }

        card.style.display = mostrar ? "block" : "none";

    });

}

marcas.forEach(m => m.addEventListener("change", filtrarProdutos));
pets.forEach(p => p.addEventListener("change", filtrarProdutos));
precos.forEach(p => p.addEventListener("change", filtrarProdutos));

limpar.addEventListener("click", () => {

    marcas.forEach(m => m.checked = false);
    pets.forEach(p => p.checked = false);
    precos.forEach(p => p.checked = false);

    filtrarProdutos();

});

function adicionarCarrinho(){

    let produto = {
        nome: document.querySelector(".cardproduto h2").innerText,
        preco: parseFloat(
            document.querySelector(".textopreco")
            .innerText
            .replace("R$", "")
            .replace(",", ".")
        ),
        imagem: document.querySelector(".imagemcard").src,
        quantidade: 1
    };

    localStorage.setItem(
        "produtoCarrinho",
        JSON.stringify(produto)
    );
}

function irCarrinho(){

    adicionarCarrinho();

    window.location.href =
    "carrinho.html";
}

function irPagamento(){

    adicionarCarrinho();

    window.location.href =
    "comopagar.html";
}