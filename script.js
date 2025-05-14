// Mostrar ou esconder botão ao rolar a página
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Voltar ao topo suavemente
document.getElementById("topBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function abrirWhatsApp() {
  const numero = "5586995893919"; // coloque seu número com DDD e código do país (55 para Brasil)
  const mensagem = "Olá! Tenho interesse no Pacote Express de R$197. Pode me ajudar?";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});
document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
// Obtém o botão e o conteúdo
const toggleButton = document.getElementById('toggleButton');
const testimonials = document.getElementById('testimonials');

// Adiciona o evento de clique ao botão
toggleButton.addEventListener('click', () => {
  // Verifica se o conteúdo está visível
  if (testimonials.style.display === "none") {
    testimonials.style.display = "block";
    toggleButton.textContent = "Esconder Depoimentos";
  } else {
    testimonials.style.display = "none";
    toggleButton.textContent = "Mostrar Depoimentos";
  }
});