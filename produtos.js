function trocarProduto(imagem, cor){

    // TROCA IMAGEM
    document.getElementById("imagemPrincipal").src = imagem;

    // TROCA TÍTULO
    document.getElementById("tituloProduto").innerHTML =
    `<strong>PetTimer - ${cor} comedouro e bebedouro automático</strong>`;

}

function adicionarCarrinho(){

    let produto = {

        nome:
        document.getElementById("tituloProduto")
        .innerText,

        preco:
        parseFloat(
            document.getElementById("precoProduto")
            .innerText
            .replace("R$", "")
            .replace(",", ".")
        ),

        imagem:
        document.getElementById("imagemProduto")
        .src,

        quantidade: 1

    };

    localStorage.setItem(
        "produtoCarrinho",
        JSON.stringify(produto)
    );

}