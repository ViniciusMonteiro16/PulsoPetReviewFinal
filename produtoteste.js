function adicionarCarrinho(){



    let nome =
    document.querySelector(".cardproduto h2")
    .innerText;



    let precoTexto =
    document.querySelector(".textopreco")
    .innerText;



    let preco =
    Number(
        precoTexto
        .replace("R$", "")
        .replace(",", ".")
    );



    let imagem =
    document.querySelector(".imagemcard")
    .getAttribute("src");



    let produto = {

        nome: nome,

        preco: preco,

        imagem: imagem,

        quantidade: 1

    };



    localStorage.setItem(
        "produtoCarrinho",
        JSON.stringify(produto)
    );



    window.location.href =
    "carrinho.html";

}