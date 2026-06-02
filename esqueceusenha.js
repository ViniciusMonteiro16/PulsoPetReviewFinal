function enviarEmail(){

    let email =
    document.getElementById("email").value;

    if(email == ""){

        alert("Digite um email!");

    }

    else{

        window.location.href = "verificacao.html";

    }

}