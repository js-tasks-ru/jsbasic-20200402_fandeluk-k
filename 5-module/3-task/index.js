function initCarousel() {
  let carouselInner = document.querySelector(".carousel__inner");
  document.querySelector(".carousel__arrow_left").style.display = "none";
  let slideElement = document.querySelectorAll(".carousel__slide").length;

  let counter = 0;

  document.addEventListener("click", function (event) {
    let btnRight = event.target.closest(".carousel__arrow_right");
    let btnLeft = event.target.closest(".carousel__arrow_left");

    function showMeArrow() {
      counter > 0
        ? (btnLeft.style.display = "")
        : (btnLeft.style.display = "none");
      counter < slideElement - 1
        ? (btnRight.style.display = "")
        : (btnRight.style.display = "none");
    }

    function switchSlider() {
      if (btnRight && counter < slideElement - 1) {
        counter++;
        carouselInner.style.transform = `translateX(${
          -carouselInner.offsetWidth * counter
        }px`;
      }
      if (btnLeft && counter > 0) {
        counter--;
        carouselInner.style.transform = `translateX(${
          -carouselInner.offsetWidth * counter
        }px`;
      }
      showMeArrow();
    }
    switchSlider();
  });
}
