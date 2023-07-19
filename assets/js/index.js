window.addEventListener("scroll", function () {
  showScrollToTopButton();
  updateScrollProgress();
});
function showScrollToTopButton() {
  let scrollToTopBtn = document.getElementById("scroll");
  if (window.scrollY > 20) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
document.getElementById("scroll").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
function updateScrollProgress() {
  let scrollProgress = document.getElementById("scroll");
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = scrollTop / scrollHeight;
  scrollProgress.style.background = `conic-gradient(red ${
    scrolled * 100
  }%,white ${scrolled * 100}%)`;
}

let hamburger = document.querySelector(".btns-header .icon-btn-light");
let sidebar = document.querySelector(".sidebar");
let left_sidebar = document.querySelector(".left-sidebar");
let close_btn = document.querySelector(".close");
hamburger.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0%)";
  left_sidebar.style.display = "block";
});
left_sidebar.addEventListener("click", close);
close_btn.addEventListener("click", close);
function close() {
  sidebar.style.transform = "translateX(100%)";
  left_sidebar.style.display = "none";
}

let currentCursorPos;
let cursorEl = document.querySelector("#cursor");

window.addEventListener("mousemove", (event) => {
  currentCursorPos = { x: event.clientX, y: event.clientY };
  cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
});

let right = document.querySelector("#right");
let left = document.querySelector("#left");

document.addEventListener("DOMContentLoaded", () => {
  left.style.transform = "translateX(-100%)";
  right.style.transform = "translateX(100%)";
  setTimeout(()=>{
    document.querySelector(".circle").style.display="none"
  },500)
  setTimeout(()=>{
    document.querySelector(".loading").style.display="none"
  },1250)
});
