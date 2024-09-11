let cookiesAccepted = false;
let scrollLocked = false;

document.addEventListener('scroll', function() {
    if (cookiesAccepted) return; 


    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    
    if (scrollTop + winHeight >= docHeight * 0.5 && !scrollLocked) {
        
        document.getElementById('cookies').style.display = 'flex';
        scrollLocked = true; 
        document.body.style.overflow = 'hidden'; 
        console.log('Se ha desplazado más allá del 50% de la página y las cookies no han sido aceptadas.');
    }
});

window.addEventListener('wheel', function(event) {
    if (scrollLocked && !cookiesAccepted) {
        event.preventDefault(); 
    }
}, { passive: false });

window.addEventListener('keydown', function(event) {
    if (scrollLocked && !cookiesAccepted && (event.key === 'ArrowDown' || event.key === 'PageDown')) {
        event.preventDefault(); 
    }
});

document.getElementById('accept-cookies').addEventListener('click', function() {
    
    cookiesAccepted = true;

    document.getElementById('cookies').style.display = 'none';

    document.body.style.overflow = 'auto';
    scrollLocked = false; 
});
