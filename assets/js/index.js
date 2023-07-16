window.addEventListener("scroll", function () {
  showScrollToTopButton();
  updateScrollProgress();
});
function showScrollToTopButton() {
  var scrollToTopBtn = document.getElementById("scroll");
  if (window.scrollY > 20) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
document
  .getElementById("scroll")
  .addEventListener("click", function () {
    scrollToTop();
  });
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function updateScrollProgress() {
  var scrollProgress = document.getElementById("scroll");
  var scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = scrollTop / scrollHeight;
  console.log(scrolled)
  scrollProgress.style.background = `conic-gradient(red ${scrolled*100}%,white ${scrolled*100}%)`
}