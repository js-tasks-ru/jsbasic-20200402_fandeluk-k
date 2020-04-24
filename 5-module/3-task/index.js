function initCarousel() {
  //
  let carouselInner = document.querySelector(".carousel__inner");
  let slideElement = document.querySelectorAll(".carousel__slide").length;
  //
  let counter = 0;
  //
  let carouselArrow = document.querySelectorAll(".carousel__arrow");
  //
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  // arrowLeft.style.display = "none";
  let arrowRight = document.querySelector(".carousel__arrow_right");

  for (let arrow of carouselArrow) {
    arrow.addEventListener("click", function (event) {
      let clickRight = event.target.closest(".carousel__arrow_right");
      let clickLeft = event.target.closest(".carousel__arrow_left");
      //
      counter >= 3
        ? (arrowRight.style.display = "none")
        : (arrowRight.style.display = "");
      if (clickRight) {
        switchRight();
      } else if (clickLeft) {
        switchLeft();
      }
      //
      function switchRight() {
        if (counter < slideElement - 1) {
          ++counter;
          console.log(counter);
          carouselInner.style.transform = `translateX(${
            -carouselInner.offsetWidth * counter
          }px`;
        }
      }

      function switchLeft() {
        if (counter > 0) {
          counter--;
          console.log(counter);
          carouselInner.style.transform = `translateX(${
            -carouselInner.offsetWidth * counter
          }px`;
        }
      }
    });
  }
}
