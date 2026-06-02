let produto =
JSON.parse(localStorage.getItem("produtoCarrinho"));

if(produto){

    document.querySelector(".produto-img").src =
    produto.imagem;

    document.querySelector(".produto-info h3").innerHTML =
    produto.nome;

    document.querySelector(".preco").innerHTML =
    "R$ " + produto.preco.toFixed(2);

    document.getElementById("quantidade").innerHTML =
    produto.quantidade;

    document.getElementById("total").innerHTML =
    "R$ " +
    (produto.preco * produto.quantidade).toFixed(2);

}



let quantidade =
produto.quantidade || 1;



function atualizarCarrinho(){



    document.querySelector(".produto-info h3")
    .innerHTML = produto.nome;



    document.querySelector(".produto-img")
    .src = produto.imagem;



    document.querySelector(".preco")
    .innerHTML =
    "R$ " + produto.preco.toFixed(2);



    document.getElementById("quantidade")
    .innerHTML = quantidade;



    let total =
    produto.preco * quantidade;



    document.getElementById("total")
    .innerHTML =
    "R$ " + total.toFixed(2);



    produto.quantidade =
    quantidade;



    localStorage.setItem(
        "produtoCarrinho",
        JSON.stringify(produto)
    );

}



function aumentar(){

    quantidade++;



    atualizarCarrinho();

}



function diminuir(){



    if(quantidade > 1){

        quantidade--;



        atualizarCarrinho();

    }

}



function removerProduto(){



    localStorage.removeItem(
        "produtoCarrinho"
    );



    location.reload();

}



document.querySelector(".lixeira")
.addEventListener(
    "click",
    removerProduto
);



atualizarCarrinho();