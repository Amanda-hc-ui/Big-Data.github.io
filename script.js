// =========================
// Mostrar mais / Mostrar menos (opcional)
// =========================
const button = document.getElementById('loadMoreBtn');
const moreContent = document.getElementById('moreContent');

if (button && moreContent) {
  button.addEventListener('click', () => {
    const isHidden = moreContent.style.display === 'none';
    moreContent.style.display = isHidden ? 'block' : 'none';
    button.innerText = isHidden
      ? 'Leia menos sobre Big Data'
      : 'Leia mais sobre Big Data';
  });
}

// =========================
// Envio de formulário
// =========================
const formContato = document.getElementById('formContato');
if (formContato) {
  formContato.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
  });
}

