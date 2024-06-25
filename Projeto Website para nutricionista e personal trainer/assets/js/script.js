
//Simulador de carregamento de página
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loadingIndicator = document.getElementById('loadingIndicator');
        loadingIndicator.style.display = 'none';
    }, 3000); // Adiciona um atraso de 3 segundos
});
