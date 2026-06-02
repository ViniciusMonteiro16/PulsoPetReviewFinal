function mostrarSenha(id){

    let input =
    document.getElementById(id);

    if(input.type == "password"){

        input.type = "text";

    }

    else{

        input.type = "password";

    }

}


function salvarSenha(){

    let senha =
    document.getElementById("novaSenha").value;

    let confirmar =
    document.getElementById("confirmarSenha").value;



    if(senha == "" || confirmar == ""){

        alert("Preencha todos os campos!");

    }

    else if(senha != confirmar){

        alert("As senhas não coincidem!");

    }

    else{

    alert("Senha alterada com sucesso!");

    window.location.href =
    "homeuser.html";

}

}