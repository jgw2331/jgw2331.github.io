document.documentElement.classList.add("js-ready");

const buttons = document.querySelectorAll('a[href^="#"]');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("href");
    if (target && target !== "#") {
      const element = document.querySelector(target);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
