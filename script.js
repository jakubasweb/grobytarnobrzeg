const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const variantButtons = document.querySelectorAll(".variant-btn");
let currentVariant = variantButtons[0];

variantButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentVariant = button;
    variantButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".price-value").forEach((price) => {
      price.textContent = price.dataset[button.dataset.variant];
    });
  });
});

document.querySelectorAll(".package-cta").forEach((link) => {
  link.addEventListener("click", () => {
    const card = link.closest(".service-card");
    const price = card.querySelector(".price-value").textContent;
    const messageField = document.querySelector("#message");
    if (messageField && currentVariant) {
      messageField.value = `Interesuje mnie pakiet „${card.dataset.package}” – ${currentVariant.dataset.label} (${price} zł).`;
    }
  });
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const success = form.querySelector(".form-success");
  form.reset();
  success.classList.add("visible");
});
