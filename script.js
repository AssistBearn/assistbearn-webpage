console.log("Assist’béarn website loaded.");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle(
    "scrolled",
    window.scrollY > 50
  );
});
