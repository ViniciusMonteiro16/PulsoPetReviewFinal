function mostrarSenha(){

    let senha = document.getElementById("senha");

    if(senha.type === "password"){
        senha.type = "text";
    }

    else{
        senha.type = "password";
    }

}


function entrar(){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email === "" || senha === ""){

        alert("Preencha todos os campos");

        return;
    }


    if(!email.includes("@") || !email.includes(".")){

        alert("Digite um email válido");

        return;
    }


    if(senha.length < 6){

        alert("A senha deve ter pelo menos 6 caracteres");

        return;
    }

    window.location.href = "homeuser.html";

}