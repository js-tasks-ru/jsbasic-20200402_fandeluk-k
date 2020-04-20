function initCarousel() {
  let carouselInner = document.querySelector(".carousel__inner");
  document.querySelector(".carousel__arrow_left").style.display = "none";

  let counter = 0;

  document.addEventListener("click", function (event) {
    let btnRight = event.target.closest(".carousel__arrow_right");
    let btnLeft = event.target.closest(".carousel__arrow_left");
    counter >= 2
      ? (document.querySelector(".carousel__arrow_right").style.display =
          "none")
      : false;

    if (btnRight && counter < 3) {
      counter++;
      console.log(counter);
      carouselInner.style.transform = `translateX(${
        -carouselInner.offsetWidth * counter
      }px`;
      document.querySelector(".carousel__arrow_left").style.display = "";
    } else if (btnLeft && counter > 0) {
      counter--;
      carouselInner.style.transform = `translateX(${
        -carouselInner.offsetWidth * counter
      }px`;
      document.querySelector(".carousel__arrow_right").style.display = "";
    }
  });
}
