function initCarousel() {
  let carouselInner = document.querySelector(".carousel__inner");
  let btnRightDefaultHide = (document.querySelector(
    ".carousel__arrow_left"
  ).style.display = "none");

  let sum = 1;

  document.addEventListener("click", function (event) {
    let btnRight = event.target.closest(".carousel__arrow_right");
    let btnLeft = event.target.closest(".carousel__arrow_left");
    sum > 0 ? (btnRight.style.display = "block") : false;
    if (btnRight && sum < 4) {
      ++sum;
      console.log(sum);
      carouselInner.style.transform += `translateX(${-carouselInner.offsetWidth}px`;
    }
    if (btnLeft && sum > 1) {
      --sum;
      carouselInner.style.transform += `translateX(${carouselInner.offsetWidth}px`;
    }
  });
}
