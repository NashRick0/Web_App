document.addEventListener("DOMContentLoaded", () => {
  // Mostrar/ocultar pasatiempos con animación
  document.querySelectorAll(".toggle-hobbies").forEach(btn => {
    btn.addEventListener("click", () => {
      const list = btn.nextElementSibling;
      list.classList.toggle("visible");
      btn.textContent = list.classList.contains("visible")
        ? "Ocultar pasatiempos"
        : "Mostrar pasatiempos";
    });
  });

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Por favor, rellena todos los campos correctamente.");
    }
  });
});
