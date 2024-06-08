document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const like = formData.get('like');
    document.getElementById('response').textContent = like === 'yes' ? '¡Gracias por tu respuesta positiva!' : '¡Gracias por tu feedback!';
});
