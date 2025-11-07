document.getElementById('loadMoreBtn').addEventListener('click', function() {
    var moreContent = document.getElementById('moreContent');
    var button = document.getElementById('loadMoreBtn');

    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        button.innerText = 'Leia menos sobre Big Data';
    } else {
        moreContent.style.display = 'none';
        button.innerText = 'Leia mais sobre Big Data';
    }
});
// Script de Teste
// Script para o envio do formulário
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Exibe uma mensagem de sucesso ou faz o redirecionamento
    alert('Sua mensagem foi enviada com sucesso!');

    // Se desejar redirecionar para outra página após o envio, use:
    // window.location.href = "pagina-de-sucesso.html";
});
