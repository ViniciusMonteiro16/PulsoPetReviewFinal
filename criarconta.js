function mostrarSenha(id){

    let campo = document.getElementById(id);

    if(campo.type === "password"){
        campo.type = "text";
    }

    else{
        campo.type = "password";
    }

}



function criarConta(){

    let email = document.getElementById("email").value;

    let usuario = document.getElementById("usuario").value;

    let senha = document.getElementById("senha").value;

    let confirmar = document.getElementById("confirmar").value;



    if(email === "" || usuario === "" || senha === "" || confirmar === ""){

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



    if(senha !== confirmar){

        alert("As senhas não coincidem");

        return;
    }



    window.location.href = "homeuser.html";

}