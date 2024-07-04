
//Simulador de carregamento de página
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loadingIndicator = document.getElementById('loadingIndicator');
        loadingIndicator.style.display = 'none';
    }, 2000); // Adiciona um atraso de 3 segundos
});

document.getElementById("carrinho").onclick = function() {
    var sidebar = document.getElementById("sidebar");
    var carrinho = document.getElementById("carrinho");
    var content = document.getElementById("content");
    
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
        carrinho.innerHTML = '<img src="../assets/icons/fas fa-shopping-cart.PNG" alt="Adicionar ao Carrinho" style="width: 24px; height: 24px;">';
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
        carrinho.innerHTML = '<img src="../assets/icons/fas fa-shopping-cart.PNG" alt="Adicionar ao Carrinho" style="width: 24px; height: 24px;">';
    }
}