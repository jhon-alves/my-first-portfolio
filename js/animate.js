const target = document.querySelectorAll('[data-animate]');
const animationClass = 'anime';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight + 1) / 1.5);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
    //else {
    //  element.classList.remove(animationClass);
    //}
  });
}

animeScroll();

if(target.length){
  window.addEventListener('scroll', function() {
    animeScroll();
  });
}