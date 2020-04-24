function initCarousel() {
  //
  let carouselInner = document.querySelector(".carousel__inner");
  let slideElement = document.querySelectorAll(".carousel__slide").length;
  //
  let counter = 0;
  //
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  arrowLeft.style.display = "none";
  let arrowRight = document.querySelector(".carousel__arrow_right");
  //
  let carouselArrow = document.querySelectorAll(".carousel__arrow");
  for (let arrow of carouselArrow) {
    arrow.addEventListener("click", function (event) {
      let clickRight = event.target.closest(".carousel__arrow_right");
      let clickLeft = event.target.closest(".carousel__arrow_left");
      //

      if (clickRight) {
        switchRight();
      }
      if (clickLeft) {
        switchLeft();
      }
      //
      function switchRight() {
        if (counter < slideElement - 1) {
          ++counter;
          carouselInner.style.transform = `translateX(${
            -carouselInner.offsetWidth * counter
          }px`;
          arrowLeft.style.display = "";
        }
        if (counter == 3) {
          arrowRight.style.display = "none";
        }
      }

      function switchLeft() {
        if (counter > 0) {
          counter--;
          carouselInner.style.transform = `translateX(${
            -carouselInner.offsetWidth * counter
          }px`;
          arrowRight.style.display = "";
        }
        if (counter == 0) {
          arrowLeft.style.display = "none";
        }
      }
    });
  }
}
