const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const contactForm = document.getElementById("contactForm");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  });
}

const placeholderButtons = document.querySelectorAll("[data-placeholder]");
placeholderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.getAttribute("data-placeholder") || "Esta área";
    window.alert(`${label} está pronta para receber sua imagem ou conteúdo real depois.`);
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome")?.value.trim() || "";
    const telefone = document.getElementById("telefone")?.value.trim() || "";
    const mensagem = document.getElementById("mensagem")?.value.trim() || "";

    if (!nome || !telefone) {
      window.alert("Preencha seu nome e telefone para continuar.");
      return;
    }

    const texto = encodeURIComponent(
      `Olá, meu nome é ${nome}. Meu telefone é ${telefone}. ${mensagem ? `Gostaria de falar sobre: ${mensagem}` : "Gostaria de agendar uma consulta."}`
    );

    const whatsappUrl = `https://wa.me/5511999999999?text=${texto}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  if (window.scrollY > 20) {
    header.style.paddingTop = "0.5rem";
  } else {
    header.style.paddingTop = "1rem";
  }
});