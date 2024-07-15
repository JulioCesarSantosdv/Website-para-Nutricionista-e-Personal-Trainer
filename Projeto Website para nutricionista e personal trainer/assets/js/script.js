
//Simulador de carregamento de página
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loadingIndicator = document.getElementById('loadingIndicator');
        loadingIndicator.style.display = 'none';
    }, 2000); // Adiciona um atraso de 2 segundos
});

// Função para lidar com a abertura e fechamento da sidebar
document.querySelectorAll('.carrinho-button').forEach(button => {
    button.addEventListener('click', function() {
        var sidebar = document.getElementById("sidebar");
        var content = document.getElementById("content");
        var boxContainer = document.querySelector('.box-container');

        if (sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
            content.style.marginRight = "0";
            boxContainer.style.transform = "translateX(0)";
        } else {
            sidebar.classList.add('show');
            content.style.marginRight = "120px";// Controla até onde chega o sidebar
            boxContainer.style.transform = "translateX(-120px)";//Controla até onde chega o sidebar
        }
    });
});


