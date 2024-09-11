window.onload = function() {
    setTimeout(function() {
        document.getElementById('circulo').style.display = 'none';
        document.getElementById('intermedia').style.display = 'block';
    }, 1000);

    document.getElementById('continuar').onclick = function() {
        document.getElementById('intermedia').style.display = 'none';
        document.getElementById('principal').style.display = 'block';
        setTimeout(function() {
            document.getElementById('popup').style.display = 'flex';
        }, 10000); 
    };
};



document.getElementById('cerrar-popup').onclick = function() {
document.getElementById('popup').style.display = 'none';
};

