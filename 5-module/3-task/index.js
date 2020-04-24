function initCarousel() {
  //
  let carouselInner = document.querySelector(".carousel__inner");
  // let slideElement = document.querySelectorAll(".carousel__slide").length;
  //
  let counter = 0;
  //
  let carouselArrow = document.querySelectorAll(".carousel__arrow");
  //
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  // arrowLeft.style.display = "none";
  let arrowRight = document.querySelector(".carousel__arrow_right");
  //
  //
  for (let arrow of carouselArrow) {
    arrow.addEventListener("click", function (event) {
      // let clickRight = event.target.closest(".carousel__arrow_right");
      // let clickLeft = event.target.closest(".carousel__arrow_left");

      function slideWidth() {
        return (carouselInner.style.transform = `translateX(${
          -carouselInner.offsetWidth * counter
        }px`);
      }

      function switchRight() {
        counter++;
        slideWidth();
      }

      function switchLeft() {
        counter--;
        slideWidth();
      }
      
      function swithcSlide() {
        if (counter < 3) {
          switchRight();
        } else if (counter > 0) {
          switchLeft();
        }
      }
      // function showMeArrow() {
      //   if (counter > 0) {
      //     arrowLeft.style.display = "";
      //   }
      //   if (counter == 3) {
      //     arrowRight.style.display = "none";
      //   }
      //   if (counter < 3) {
      //     arrowRight.style.display = "";
      //   }
      // }
      // showMeArrow();
      swithcSlide();
    });
  }
}

