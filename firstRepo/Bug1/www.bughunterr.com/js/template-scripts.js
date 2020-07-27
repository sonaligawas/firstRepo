jQuery(document).ready(function($) {
    if ($(window).width() < 1023) {
        $(".desktop").addClass("hide");
    } else {
        $(".phone").addClass("hide")
    }
    // Owl Carousel                     
    var owl = $('.carousel-default');
    owl.owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 3
            },
            769: {
                items: 4
            }
        },
        navText: ["&#xe605", "&#xe606"]
    });

    // Owl Carousel - Content Blocks  
    var owl = $('.carousel-blocks');
    owl.owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 3
            },
            769: {
                items: 4
            }
        },
        navText: ["&#xe605", "&#xe606"]
    });

    // Sticky Nav Bar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('.sticky').addClass("fixed");
        } else {
            $('.sticky').removeClass("fixed");
        }
    });

    $(".show-book-button").on("click", function() {
        var dataId = $(this).attr("data");
        $("[id^='book-tab-']").removeClass("show").addClass("hide");
        $("[id='book-tab-" + dataId + "']").addClass("show").removeClass("hide");
    })
});