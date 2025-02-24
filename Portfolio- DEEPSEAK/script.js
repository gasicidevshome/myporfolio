document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message!');
    // Vous pouvez ajouter ici le code pour envoyer le formulaire
});
// script.js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});