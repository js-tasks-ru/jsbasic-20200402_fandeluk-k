function toggleText() {
  let btn = document.querySelector("button");
  let text = document.querySelector("#text");
  let textAtr = Boolean(text.hasAttribute("hidden"));

  btn.addEventListener("click", function () {
    text.toggleAttribute("hidden");
  });
}
