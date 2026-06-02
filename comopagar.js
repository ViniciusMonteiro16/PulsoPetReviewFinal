function pesquisar(){

    let valor =
    document.querySelector(".pesquisa").value;

    console.log("Pesquisando:", valor);

}


let produto =
JSON.parse(localStorage.getItem("produtoCarrinho"));

if(produto){

    document.getElementById("nomeProduto").innerHTML =
    produto.nome;

    document.querySelector(".produto").innerHTML =
    "R$ " + (produto.preco * produto.quantidade).toFixed(2);

    document.querySelector(".valor-pagar").innerHTML =
    "R$ " + (produto.preco * produto.quantidade).toFixed(2);
}

function continuarPagamento(){



    let opcao =
    document.querySelector(
        'input[name="pagamento"]:checked'
    );



    if(!opcao){

        alert(
            "Escolha uma forma de pagamento"
        );

        return;
    }



    localStorage.setItem(
        "formaPagamento",
        opcao.value
    );



    if(opcao.value == "pix"){

        window.location.href =
        "pix.html";

    }



    else{

        window.location.href =
        "cartao.html";

    }

}