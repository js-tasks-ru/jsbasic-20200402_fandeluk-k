function toggleText() {
  let buttonSwitch = document.querySelector("button");
  let textElement = document.querySelector("#text");

  buttonSwitch.addEventListener("click", function () {
    textElement.toggleAttribute("hidden");
  });
}
