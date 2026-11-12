const comidaCards = document.querySelectorAll('.comida-card');

comidaCards.forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('header h1').style.color = '#FF5733';
    });
});