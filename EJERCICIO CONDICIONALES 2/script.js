function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;
    let password = document.getElementById("password").value;
    let terminos = document.getElementById("terminos").checked;
    let error = document.getElementById("error");
    error.textContent = "";

    if (nombre.trim() === "") {
        error.textContent = "El campo de nombre no puede estar vacío.";
        return false;
    }

    if (mensaje.trim() === "") {
        error.textContent = "El campo de mensaje no puede estar vacío.";
        return false;
    } else if (mensaje.length > 30) {
        error.textContent = "El mensaje no puede exceder 30 caracteres.";
        return false;
    }

    if (password.length < 6) {
        error.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return false;
    }

    if (!terminos) {
        error.textContent = "Debes aceptar los términos y condiciones.";
        return false;
    }

    if (!numero) {
        error.textContent = "Debes ingresar un número entre 30 y 50.";
        return false;
    } else if (numero < 30 || numero > 50) {
        error.textContent = "El número debe estar entre 30 y 50.";
        return false;
    }
    
    return true;

}

function numberInput() {
    let numero = document.getElementById("numero");
    let terminos = document.getElementById("terminos").checked;

  
    numeroContainer.style.display = terminos ? "block" : "none";

    if (terminos) {
        numero.setAttribute("required", true);
    } else {
        numero.removeAttribute("required");
    }

}


