$(document).ready(function () {
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
});




$(document).ready(function () {
  var typed = new Typed('.info', {
    strings: [
      "Home Page 2",
      "01953332018",
      "Helloshanto@outlook.com"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
    smartBackspace: true
  })
});


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dot: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
});