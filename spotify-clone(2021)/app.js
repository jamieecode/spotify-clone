// Toggle Menu
// sidebar appears or dissappears on click event
const bars = document.querySelector(".bars");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

const sidebarOverlay = document.querySelector(".sidebar-overlay");

const openSidebar = () => {
  sidebarOverlay.classList.toggle("active");

  document.body.classList.toggle("no-scroll");
  bar1.classList.toggle("change");
  bar2.classList.toggle("change");
  bar3.classList.toggle("change");
};

bars.addEventListener("click", openSidebar);

// Sidebar can disappear by clicking the grey area next to the sidebar
window.onclick = function (event) {
  if (event.target === sidebarOverlay) {
    openSidebar();
  }
};
