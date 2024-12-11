document.addEventListener("DOMContentLoaded", function(){
    const form =document.getElementById("usuarios");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const codigo = form.elements["codigo"].value;
        const representante = form.elements["representante"].value;
        const Identificacion = form.elements["Identificacion"].value;
        const registro_mercantil = form.elements["registro_mercantil"].value;
        const Ubicacion = form.elements["Ubicacion"].value;
        const Descripción = form.elements["Descripción"].value;
        const tamaño = form.elements["tamaño"].value;
        const contraseña = form.elements["contraseña"].value;
        
        
        const usuario ={
            codigo,
            representante,
            Identificacion,
            registro_mercantil,
            Ubicacion,
            Descripción,
            tamaño,
            contraseña
        };
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))|| [];
        usuarios.push(usuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Registro Guardado con exito");

        form.reset();
    });
});