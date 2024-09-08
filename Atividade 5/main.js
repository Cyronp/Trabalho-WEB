document.addEventListener('DOMContentLoaded', function() {
const card = document.querySelector('.card');
const button = document.getElementById('menu');

    button.addEventListener('click', function() {
        card.classList.toggle('abrir');
    });
});
