function cargaCancion(event) {
    event.preventDefault();
    const cancion = document.getElementById('cancion').value;
    fetch(`https://api.lyrics.ovh/v1/Hello lola${cancion}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        letra = document.getElementById ("letra");
        const {lyrics} = data;
        letra.innerHTML = `${lyrics}`;
  }
)
}