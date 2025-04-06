$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true
        },
        768: {
            items: 2,
            nav: false,
            loop: true
        },
        992: {
            items: 3,
            nav: false,
            loop: true
        }
    }
})
