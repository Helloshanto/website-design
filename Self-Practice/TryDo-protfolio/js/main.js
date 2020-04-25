
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        center: true,
        nav: false,
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

$('.counter').counterUp({
    delay: 10,
    time: 1000
})