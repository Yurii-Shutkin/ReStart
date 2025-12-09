const currentPage = window.location.pathname;
const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
  const href = link.getAttribute("href") + "/";
  console.log(href);
  console.log(currentPage);
  console.log(links);

  if (href === currentPage || (href === "/" && currentPage === "")) {
    link.classList.add("active");
  }
});
