const arrayHobbies = [];

function agregar() {
    const input = document.getElementById("aficion");
    const aficion = input.value;
    if (aficion != "") {
        arrayHobbies.push(aficion);
        actualizar();
        input.value = "";}
}

function actualizar() {
    const ul = document.getElementById("aficion-list");
    ul.innerHTML = "";
    for (let i = 0; i < arrayHobbies.length; i++) {
        const li = document.createElement("li");
        li.innerText = arrayHobbies[i];
        li.className = "list-group-item";
        ul.appendChild(li);}
}

function tieneDigito(valor) {
    for (let i = 0; i < valor.length; i++) {
        if (valor[i] >= "0" && valor[i] <= "9") {
            return true;}}
    return false;
}

function tieneLetra(valor) {
    for (let i = 0; i < valor.length; i++) {
        if ((valor[i] >= "a" && valor[i] <= "z") || (valor[i] >= "A" && valor[i] <= "Z")) {
            return true;
        }
    }
    return false;
}

function DigitosAlFinal(valor) {
    let encontreDigito = false;
    for (let i = 0; i < valor.length; i++) {
        const esDigito = valor[i] >= "0" && valor[i] <= "9";
        if (esDigito) {
            encontreDigito = true;
        }
        if (encontreDigito && !esDigito) {
            return false;
        }
    }
    return true;
}

function validarUsername() {
    const valor = document.getElementById("nombreusuario").value;
    const mensaje = document.getElementById("nombreusuario-msg");

    if (valor === "") {
        mensaje.innerText = "El nombre de usuario es obligatorio";
        return false;
    } else if (valor.length < 5 || valor.length > 10) {
        mensaje.innerText = "El limite de caracteres es entre 5 y 10";
        return false;
    } else if (valor[0] < "a" && valor[0] > "Z" || valor[0] < "A") {
        mensaje.innerText = "El nombre de usuario debe comenzar con una letra";
        return false;
    } else if (DigitosAlFinal(valor) === false) {
        mensaje.innerText = "Los números solo pueden ir al final";
        return false;
    } else {
        for (let i = 0; i < valor.length; i++) {
            const caracter = valor[i];
            const esLetra = (caracter >= "a" && caracter <= "z") || (caracter >= "A" && caracter <= "Z");
            const esDigito = caracter >= "0" && caracter <= "9";
            if (!esLetra && !esDigito) {
                mensaje.innerText = "No puede tener caracteres especiales";
                return false;
            }
        }
    }

    mensaje.innerText = "";
    return true;
}

function validarContraseña() {
    const username = document.getElementById("nombreusuario").value;
    const valor = document.getElementById("contraseña").value;
    const mensaje = document.getElementById("contraseña-msg");

    if (valor === "")
    { mensaje.innerText = "La contraseña es obligatoria";
        return false;} 
    else if (valor.length < 3 || valor.length > 6){
        mensaje.innerText = "Debe tener entre 3 y 6 caracteres";
        return false;
    }
    else if (tieneDigito(valor) === false)
    {mensaje.innerText = "Debe tener al menos un dígito";
        return false;
    }
    else if (tieneLetra(valor) === false)
    {mensaje.innerText = "Debe tener al menos una letra";
        return false;
    }
    else if (username !== "" && valor.toLowerCase().includes(username.toLowerCase())){
        mensaje.innerText = "La contraseña no puede contener el nombre de usuario";
        return false;
    }

    mensaje.innerText = "";
    return true;
}

function validarConfirmarmacion() {
    const valor = document.getElementById("confirmar").value;
    const mensaje = document.getElementById("confirmar-msg");
    const contrasena = document.getElementById("contraseña").value;

    if (valor === "") 
        {mensaje.innerText = "Debes confirmar la contraseña";
        return false;}
    else if (valor !== contrasena)
    {mensaje.innerText = "Las contraseñas no coinciden";
        return false;}
    mensaje.innerText = "";
    return true;
}

function validarAficiones() {
    const mensaje = document.getElementById("aficion-msg");
    if (arrayHobbies.length < 2)
    {mensaje.innerText = "Debes agregar al menos 2 aficiones";
    return false;}
    mensaje.innerText = "";
    return true;
}

function validarDireccion() {
    const valor = document.getElementById("direccion").value;
    const mensaje = document.getElementById("direccion-msg");
    if (valor.trim() === "")
    {mensaje.innerText = "La dirección es obligatoria";
        return false;}
    mensaje.innerText = "";
    return true;
}

function validarTelefono() {
    const valor = document.getElementById("telefono").value;
    const mensaje = document.getElementById("telefono-msg");

    if (valor.trim() === "") {
        mensaje.innerText = "El número telefónico es obligatorio";
        return false;
    } else if (valor.length !== 9)
    {mensaje.innerText = "El número debe tener 9 dígitos";
        return false;}
    mensaje.innerText = "";
    return true;
}

function validarComuna() {
    const valor = document.getElementById("comuna").value;
    const mensaje = document.getElementById("comuna-msg");

    if (valor === "") 
    {mensaje.innerText = "Debes seleccionar una comuna";
        return false;}
    mensaje.innerText = "";
    return true;
}

function validarPagina() {
    const valor = document.getElementById("pagina").value;
    const mensaje = document.getElementById("pagina-msg");

    if (valor === "") {
        mensaje.innerText = "";
        return true;} 
    else if (valor.startsWith("https://")) {
        mensaje.innerText = "";
        return true;} 
    else{
        mensaje.innerText = "El sitio debe comenzar con https://";
        return false;
    }
}

function borrarAficiones() {
    arrayHobbies.length = 0;
    actualizar();
}

document.getElementById("miFormulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const usernameValido = validarUsername();
    const contraseñaValida = validarContraseña();
    const confirmarValida = validarConfirmarmacion();
    const aficionesValido = validarAficiones();
    const direccionValida = validarDireccion();
    const telefonoValido = validarTelefono();
    const comunaValida = validarComuna();
    const paginaValida = validarPagina();

    if (usernameValido && contraseñaValida && confirmarValida && aficionesValido && direccionValida && telefonoValido && comunaValida && paginaValida) {
        alert("Formulario enviado");
    }
});

//  ._. ----(I am henry... rejoice, for I am an easter egg)
//  -|-
//  / \