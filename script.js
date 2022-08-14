let slideIndex = 1;
let current_blog_data = 0;
function changeBLogView(blogViewId){
    if(blogViewId === 2){
        $('#sagemaker').css("display", "block");
        $('#ussd').css("display", "none");
    }else{
        $('#sagemaker').css("display", "none");
        $('#ussd').css("display", "block");
    }
}
changeBLogView(1);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



$(document).ready(function () {
    // Function code here.
    console.log("Running these...")
    changeBLogView(1);
    showSlides(slideIndex);
    
});
