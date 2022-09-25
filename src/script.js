const $ = (q, e = document) => e.querySelector(q);
const $$ = (q, e = document) => e.querySelectorAll(q);

const menu = $("#nav");
const icon = $("#menuIcon");

const toggleMenu = () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
};

const expandAccordion = (that) => {
  const answer = that.nextElementSibling;
  answer.classList.toggle("h-0");
  answer.classList.toggle("pb-4");
  const svg = $("svg", that);
  svg.classList.toggle("rotate-180");
};

const collapseNav = () => {
  menu.classList.add("hidden");
  menu.classList.remove("flex");
  icon.classList.add("fa-bars");
  icon.classList.remove("fa-xmark");
};
