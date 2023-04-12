var myCarousel = document.querySelector('#meu-carrossel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true,
    ride: 'carousel',
    pause: 'hover',
    keyboard: true,
    touch: true,
    slide: true,
    touchThreshold: 5,
    touchMove: true,
    pause: true,
    indicators: true,
    indicatorsContent: 'o',
    indicatorsWrap: false,
  })