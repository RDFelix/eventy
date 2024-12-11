document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event){
        event.preventDefault();

        const Identificacion = loginForm.elements["Identificacion"].value;
        const contraseña = loginForm.elements["contraseña"].value;

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuario = usuarios.find(usuario =>usuario.Identificacion === Identificacion && usuario.contraseña === contraseña)

        if(usuario){
            alert("Inicio Exitoso");

            window.location.href = "index.html";

        }else{
            alert("Nit y Contraseña Incorrecta");
        }

        loginForm.reset();
    })

});