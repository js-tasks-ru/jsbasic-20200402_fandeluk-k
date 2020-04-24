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

      function slideWidth() {
        return (carouselInner.style.transform = `translateX(${
          -carouselInner.offsetWidth * counter
        }px`);
      }

      function switchRight() {
        if (clickRight && counter < slideElement - 1) {
          counter++;
          slideWidth();
        }
      }
      switchRight();
      function switchLeft() {
        if (clickLeft && counter > 0) {
          counter--;
          slideWidth();
        }
      }
      switchLeft();
    });
  }
}
// carouselInner.addEventListener("click", function (event) {
//   function slideWidth() {
//     return (carouselInner.style.transform = `translateX(${
//       -carouselInner.offsetWidth * counter
//     }px`);
//   }

//     function switchSlider() {
//       if (clickRight && counter < slideElement) {
//         counter++;
//         slideWidth();
//       } else if (clickLeft && counter > 0) {
//         counter--;
//         slideWidth();
//       }
//     }
//     switchSlider();
//   });
// }

// function initCarousel() {
//   let carouselMain = document.querySelector(".carousel");
//   let carouselInner = carouselMain.querySelector(".carousel__inner");
//   let slideElement = document.querySelectorAll(".carousel__slide").length - 1;

//   let arrowLeft = document.querySelector(".carousel__arrow_left");
//   let arrowRight = document.querySelector(".carousel__arrow_right");

//   let counter = 0;

//   counter == 0 ? (arrowLeft.style.display = "none") : false;
//   carouselMain.addEventListener("click", function (event) {
//     let clickRight = event.target.closest(".carousel__arrow_right");
//     let clickLeft = event.target.closest(".carousel__arrow_left");

//     counter >= 0
//       ? (arrowLeft.style.display = "")
//       : (arrowLeft.style.display = "none");
//     counter < 2
//       ? (arrowRight.style.display = "")
//       : (arrowRight.style.display = "none");

//     function slideWidth() {
//       return (carouselInner.style.transform = `translateX(${
//         -carouselInner.offsetWidth * counter
//       }px`);
//     }

//     function switchSlider() {
//       if (clickRight && counter < slideElement) {
//         counter++;
//         slideWidth();
//       } else if (clickLeft && counter > 0) {
//         counter--;
//         slideWidth();
//       }
//     }
//     switchSlider();
//   });
// }

// function initCarousel() {
//   let carouselInner = document.querySelector(".carousel__inner");
//   document.querySelector(".carousel__arrow_left").style.display = "none";

//   let counter = 0;

//   document.addEventListener("click", function (event) {
//     let btnRight = event.target.closest(".carousel__arrow_right");
//     let btnLeft = event.target.closest(".carousel__arrow_left");
//     if (btnRight && counter >= 2) {
//       btnRight.style.display = "none";
//     }
//     if (btnRight && counter < 3) {
//       counter++;
//       carouselInner.style.transform = `translateX(${
//         -carouselInner.offsetWidth * counter
//       }px`;
//       document.querySelector(".carousel__arrow_left").style.display = "";
//     } else if (btnLeft && counter > 0) {
//       counter--;
//       carouselInner.style.transform = `translateX(${
//         -carouselInner.offsetWidth * counter
//       }px`;
//       document.querySelector(".carousel__arrow_right").style.display = "";
//     }
//   });
// }
