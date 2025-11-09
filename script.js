// Efeito tilt 3D nos cards e na seção PIX
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});

// Copiar PIX
function copyPix() {
  const pixKey = document.querySelector(".pix-key").textContent;
  navigator.clipboard.writeText(pixKey).then(() => {
    const feedback = document.getElementById("copy-feedback");
    feedback.style.display = "block";
    setTimeout(() => (feedback.style.display = "none"), 2000);
  });
}

// Função showDownloadMessage removida pois não é mais necessária