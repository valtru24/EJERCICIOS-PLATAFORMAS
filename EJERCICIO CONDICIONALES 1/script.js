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

    return true;
}
