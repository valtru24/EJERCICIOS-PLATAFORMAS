document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    fetch('usuarios.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(user => user.usuario === usuario && user.contrasena === contrasena);
            const mensaje = document.getElementById('mensaje');

            if (usuarioEncontrado) {
                if (usuarioEncontrado.rol === 'admin') {
                    window.location.href = 'admin.html';
                } else if (usuarioEncontrado.rol === 'contentcreator') {
                    window.location.href = 'content.html';
                }
                else {
                    window.location.href = 'user.html';
                }
            } else {
                mensaje.textContent = 'Usuario o contraseña incorrectos';
                mensaje.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
});