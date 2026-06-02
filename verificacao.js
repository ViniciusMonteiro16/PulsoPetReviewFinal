function verificarCodigo(){

    let inputs =
    document.querySelectorAll(".codigo input");

    let codigo = "";



    inputs.forEach((input) => {

        codigo += input.value;

    });



    if(codigo.length < 5){

        alert("Digite o código completo!");

    }

    else{

        alert("Código verificado!");

        window.location.href =
        "novasenha.html";

    }

}