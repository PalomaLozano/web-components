let animation = document.querySelector(".js-animation-letter");

function repeatAnimation() {

    let text = "-New Sales with discount";
    let repeatText = text.repeat(2000);
    animation.textContent += repeatText;
  
}

repeatAnimation();
