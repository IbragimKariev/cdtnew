

$('#location-office-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#location-office-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true
});
$('.special-offers-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.special-offers-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true
});

$('.favorites-item-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.favorites-item-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current())  + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true
});

$('#slider-object2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#slider-object2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true
});

$('#slider-object3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#slider-object3').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true
});



$('#slider-object').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#slider-object').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true
});



$().ready(function () {
    $('.slick-carousel').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        centerPadding: "0px",
        dots: true,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover:true,
        pauseOnFocus:true
    });
});



$('.slider-arrivals').owlCarousel({
    margin:27,
    nav:true,
    dots:false,
    responsive:{

        1290:{
            items:2
        }
    }
})

$('.slider-filter').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.slider-filter').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true
});

