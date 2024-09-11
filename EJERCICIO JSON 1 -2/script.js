document.addEventListener('DOMContentLoaded', function() {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('product-container');

            data.forEach(product => {
                if (product.stock > 0) {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    
                    card.innerHTML = `
                        <h3>${product.nombre}</h3>
                        <p>${product.descripcion}</p>
                        <p class="price">$${product.precio}</p>
                        <p>Stock: ${product.stock}</p>
                    `;
                    
                    container.appendChild(card);
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});
