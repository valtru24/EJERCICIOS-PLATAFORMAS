function comprobarFecha() {
    var fechaIda = document.getElementById("ida").value;
    var fechaIngresada = new Date(fechaIda);
    
    var fechaActual = new Date();
    fechaActual.setUTCHours(0, 0, 0, 0);

    if (fechaIngresada > fechaActual) {
        alert("La fecha está disponible");
        window.location.href = "viaje.html"; 
    } else {
        alert("Fecha no válida");
    }
}
