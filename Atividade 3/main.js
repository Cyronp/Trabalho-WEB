const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('bot-vol');
const btnNext = document.getElementById('bot-prox');

let currentSlide = 0;

function hideSlider() { //remove o 'on' na classe da img
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() { //adiciona o 'on' na classe da img
  slider[currentSlide].classList.add('on')
}

function nextSlider() { 
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

setInterval(nextSlider, 3000)