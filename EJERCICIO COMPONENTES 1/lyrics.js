document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('letrasForm');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const cancion = document.getElementById('cancion').value.trim();
      if (!cancion) {
          alert('Por favor, ingresa el nombre de la canción.');
          return;
      }

      fetch(`https://api.lyrics.ovh/v1/Coldplay/${encodeURIComponent(cancion)}`)
          .then(response => response.json())
          .then(data => {
              const letra = document.getElementById('letra');
              if (data.lyrics) {
                  letra.innerHTML = `<pre>${data.lyrics}</pre>`;
              } else {
                  letra.innerHTML = '<p>Letra no encontrada para esta canción.</p>';
              }
          })
          .catch(error => {
              console.error('Error al obtener la letra:', error);
              document.getElementById('letra').innerHTML = '<p>Error al obtener la letra. Intenta nuevamente.</p>';
          });
  });
});
