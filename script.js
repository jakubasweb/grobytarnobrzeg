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

const variantNudge = document.querySelectorAll(".variant-switch, .variant-label");
const variantSwitch = document.querySelector(".variant-switch");

if (variantSwitch && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      variantNudge.forEach((el) => el.classList.add("nudge"));
      observer.disconnect();
    }
  }, { threshold: 0.6 });
  observer.observe(variantSwitch);
}

variantButtons.forEach((button) => {
  button.addEventListener("click", () => {
    variantNudge.forEach((el) => el.classList.remove("nudge"));
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
