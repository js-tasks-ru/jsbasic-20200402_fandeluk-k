function hideSelf() {
  let btn = document.querySelector("button");
  document.addEventListener("click", function () {
    btn.setAttribute("hidden", "hidden");
  });
}
