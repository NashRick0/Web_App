document.addEventListener("DOMContentLoaded", () => {
  // Mostrar/ocultar pasatiempos
  document.querySelectorAll(".toggle-hobbies").forEach(btn => {
    btn.addEventListener("click", () => {
      const list = btn.nextElementSibling;
      list.classList.toggle("hidden");
      btn.textContent = list.classList.contains("hidden")
        ? "Mostrar pasatiempos"
        : "Ocultar pasatiempos";
    });
  });

  // Validación formulario
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Por favor, rellena todos los campos correctamente.");
    }
  });
});
