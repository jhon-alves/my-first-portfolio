const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const moveRight = document.querySelector('.right')
const moveLeft = document.querySelector('.left')
let aux = 0
let index = 0

if (slider) {
  // Controle pelo clique
  moveRight.addEventListener('click', () => {
    if (aux == -1500) {
      slider.classList.add('is-disabled')
    } else {
      slider.classList.remove('is-disabled')
      aux -= 1500
      slider.style.transform = `translateX(${aux}px)`
    }

  })

  moveLeft.addEventListener('click', () => {
    if (aux == 0) {
      slider.classList.add('is-disabled')
    } else {
      slider.classList.remove('is-disabled')
      aux += 210
      slider.style.transform = `translateX(${aux}px)`
    }
  })

  // Slides passando sozinhos
  //setInterval(() => {
  //  if (aux > -630) {
  //    aux -= 210
  //    slider.style.transform = `translateX(${aux}px)`
  //  } else {
  //    aux = 0
  //    slider.style.transform = `translateX(${aux}px)`
  //  }
  //}, 2100)
}