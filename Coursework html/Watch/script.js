document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".featureinsideslider");
    const backButton = document.querySelector("#back");
    const nextButton = document.querySelector("#next");
  
    // Calculate slide width
    const slideWidth = document.querySelector(".product-cardslider").offsetWidth + 16;
    let currentPosition = 0;
  
    // Next button click
    nextButton.addEventListener("click", () => {
      const maxScroll = slider.scrollWidth - slider.offsetWidth;
      currentPosition = Math.min(currentPosition + slideWidth, maxScroll);
      slider.style.transform = `translateX(-${currentPosition}px)`;
    });
  
    // Back button click
    backButton.addEventListener("click", () => {
      currentPosition = Math.max(currentPosition - slideWidth, 0);
      slider.style.transform = `translateX(-${currentPosition}px)`;
    });
  });
  