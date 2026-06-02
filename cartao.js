function confirmarPagamento(){

    let numero =
    document.getElementById("numeroCartao").value;

    let nome =
    document.getElementById("nomeTitular").value;

    let cvv =
    document.getElementById("cvv").value;

    let validade =
    document.getElementById("validade").value;



    if(numero === "" ||
       nome === "" ||
       cvv === "" ||
       validade === ""){

        alert("Preencha todos os campos");

        return;
    }



    window.location.href =
    "pagamentorealizado.html";

}


function cancelarPagamento(){

    window.location.href = "pagamento.html";

}