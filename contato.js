let botao =
document.querySelector(".card-contato button");

botao.addEventListener("click", function(){

    alert("Mensagem enviada com sucesso!");

    let inputs =
    document.querySelectorAll(
    ".card-contato input");

    let textarea =
    document.querySelector(
    ".card-contato textarea");



    inputs.forEach((input) => {

        input.value = "";

    });



    textarea.value = "";

});