/*
 * Responsee JS - v6 - 2019-06-27
 * https://www.myresponsee.com
 * Copyright 2019, Vision Design - graphic zoo
 * Free to use under the MIT license.
 */
jQuery(document).ready(function($) {
    //Responsee tabs
    $('.tabs').each(function(intex, element) {
        current_tabs = $(this);
        $('.tab-label').each(function(i) {
            var tab_url = $(this).attr('data-url');
            if ($(this).attr('data-url')) {
                $(this).closest('.tab-item').attr("id", tab_url);
                $(this).attr("href", "#" + tab_url);
            } else {
                $(this).closest('.tab-item').attr("id", "tab-" + (i + 1));
                $(this).attr("href", "#tab-" + (i + 1));
            }
        });
        $(this).prepend('<div class="tab-nav line"></div>');
        var tab_buttons = $(element).find('.tab-label');
        $(this).children('.tab-nav').prepend(tab_buttons);

        function loadTab() {
            $(this).parent().children().removeClass("active-btn");
            $(this).addClass("active-btn");
            var tab = $(this).attr("href");
            $(this).parent().parent().find(".tab-item").not(tab).css("display", "none");
            $(this).parent().parent().find(tab).fadeIn();
            $('html,body').animate({ scrollTop: $(tab).offset().top - 160 }, 'slow');
            if ($(this).attr('data-url')) {} else {
                return false;
            }
        }
        $(this).find(".tab-nav a").click(loadTab);
        $(this).find('.tab-label').each(function() {
            if ($(this).attr('data-url')) {
                var tab_url = window.location.hash;
                if ($(this).parent().find('a[href="' + tab_url + '"]').length) {
                    loadTab.call($(this).parent().find('a[href="' + tab_url + '"]')[0]);
                }
            }
        });
        var url = window.location.hash;
        if ($(url).length) {
            $('html,body').animate({ scrollTop: $(url).offset().top - 160 }, 'slow');
        }
    });
    //Slide nav
    $('<div class="slide-nav-button"><div class="nav-icon"><div></div></div></div>').insertBefore(".slide-nav");
    $(".slide-nav-button").click(function() {
        $("body").toggleClass("active-slide-nav");
    });
    //Responsee eside nav
    $('.aside-nav > ul > li ul').each(function(index, element) {
        var count = $(element).find('li').length;
        var content = '<span class="count-number"> ' + count + '</span>';
        $(element).closest('li').children('a').append(content);
    });
    $('.aside-nav > ul > li:has(ul)').addClass('aside-submenu');
    $('.aside-nav > ul ul > li:has(ul)').addClass('aside-sub-submenu');
    $('.aside-nav > ul > li.aside-submenu > a').attr('aria-haspopup', 'true').click(function() {
        //Close other open sub menus
        $('.aside-nav ul li.aside-submenu:not(:hover) > ul').removeClass('show-aside-ul', 'fast');
        $('.aside-nav ul li.aside-submenu:hover > ul').toggleClass('show-aside-ul', 'fast');
    });
    $('.aside-nav > ul ul > li.aside-sub-submenu > a').attr('aria-haspopup', 'true').click(function() {
        //Close other open sub menus
        $('.aside-nav ul ul li:not(:hover) > ul').removeClass('show-aside-ul', 'fast');
        $('.aside-nav ul ul li:hover > ul').toggleClass('show-aside-ul', 'fast');
    });
    //Mobile aside navigation
    $('.aside-nav-text').each(function(index, element) {
        $(element).click(function() {
            $('.aside-nav > ul').toggleClass('show-menu', 'fast');
        });
    });
    //Responsee nav
    // Add nav-text before top-nav
    $('.top-nav').before('<p class="nav-text"><span></span></p>');
    $('.top-nav > ul > li ul').each(function(index, element) {
        var count = $(element).find('li').length;
        var content = '<span class="count-number"> ' + count + '</span>';
        $(element).closest('li').children('a').append(content);
    });
    $('.top-nav > ul li:has(ul)').addClass('submenu');
    $('.top-nav > ul ul li:has(ul)').addClass('sub-submenu').removeClass('submenu');
    $('.top-nav > ul li.submenu > a').attr('aria-haspopup', 'true').click(function() {
        //Close other open sub menus
        $('.top-nav > ul li.submenu > ul').removeClass('show-ul', 'fast');
        $('.top-nav > ul li.submenu:hover > ul').toggleClass('show-ul', 'fast');
    });
    $('.top-nav > ul ul > li.sub-submenu > a').attr('aria-haspopup', 'true').click(function() {
        //Close other open sub menus
        $('.top-nav ul ul li > ul').removeClass('show-ul', 'fast');
        $('.top-nav ul ul li:hover > ul').toggleClass('show-ul', 'fast');
    });
    //Mobile navigation
    $('.nav-text').click(function() {
        $("body").toggleClass('show-menu');
    });
    //Custom forms
    $(function() {
        var input = document.createElement("input");
        if (('placeholder' in input) == false) {
            $('[placeholder]').focus(function() {
                var i = $(this);
                if (i.val() == i.attr('placeholder')) {
                    i.val('').removeClass('placeholder');
                    if (i.hasClass('password')) {
                        i.removeClass('password');
                        this.type = 'password';
                    }
                }
            }).blur(function() {
                var i = $(this);
                if (i.val() == '' || i.val() == i.attr('placeholder')) {
                    if (this.type == 'password') {
                        i.addClass('password');
                        this.type = 'text';
                    }
                    i.addClass('placeholder').val(i.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var i = $(this);
                    if (i.val() == i.attr('placeholder')) i.val('');
                })
            });
        }
    });
    //Tooltip
    $(".tooltip-container").each(function() {
        $(this).hover(function() {
            var pos = $(this).position();
            var container = $(this);
            var pos = container.offset();
            tip = $(this).find('.tooltip-content');
            tip_top = $(this).find('.tooltip-content.tooltip-top');
            tip_bottom = $(this).find('.tooltip-content.tooltip-bottom');

            var height = tip.height();
            tip.fadeIn("fast"); //Show tooltip
            tip_top.css({
                top: pos.top - height,
                left: pos.left + (container.width() / 2) - (tip.outerWidth(true) / 2)
            })
            tip_bottom.css({
                top: pos.top,
                left: pos.left + (container.width() / 2) - (tip.outerWidth(true) / 2)
            })
        }, function() {
            tip.fadeOut("fast"); //Hide tooltip
        });
    });

    // counter plugin 
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    var oTop = $('.achievements').offset().top - window.innerHeight;
    $(window).scroll(function() {

        var hT = $('.achievements').offset().top,
            hH = $('.achievements').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();

        if (wS > (hT + hH - wH)) {
            if ($('.counter-value.applications').text() != $('.counter-value.applications').attr('data-count')) {
                $('.counter-value.applications').countTo({
                    from: 0,
                    to: $('.counter-value.applications').attr('data-count'),
                    speed: 1000,
                    refreshInterval: 50
                });
            }
            if ($('.counter-value.network-nodes').text() != $('.counter-value.network-nodes').attr('data-count')) {
                $('.counter-value.network-nodes').countTo({
                    from: 0,
                    to: $('.counter-value.network-nodes').attr('data-count'),
                    speed: 1000,
                    refreshInterval: 50
                });
            }
            if ($('.counter-value.cloud-instances').text() != $('.counter-value.cloud-instances').attr('data-count')) {
                $('.counter-value.cloud-instances').countTo({
                    from: 0,
                    to: $('.counter-value.cloud-instances').attr('data-count'),
                    speed: 1000,
                    refreshInterval: 50
                });
            }
            if ($('.counter-value.secure-clients').text() != $('.counter-value.secure-clients').attr('data-count')) {
                $('.counter-value.secure-clients').countTo({
                    from: 0,
                    to: $('.counter-value.secure-clients').attr('data-count'),
                    speed: 1000,
                    refreshInterval: 50,
                });
            }
        }
    });

    //Active item
    var url = window.location.href;
    $('a').filter(function() {
        return this.href == url;
    }).parent('li').addClass('active-item');
    var url = window.location.href;
    $('.aside-nav a').filter(function() {
        return this.href == url;
    }).parent('li').parent('ul').addClass('active-aside-item');
    var url = window.location.href;
    $('.aside-nav a').filter(function() {
        return this.href == url;
    }).parent('li').parent('ul').parent('li').parent('ul').addClass('active-aside-item');
    var url = window.location.href;
    $('.aside-nav a').filter(function() {
        return this.href == url;
    }).parent('li').parent('ul').parent('li').parent('ul').parent('li').parent('ul').addClass('active-aside-item');
    $('#cascade-slider').cascadeSlider({
        autoPlay: true
    });
    autoplay();

    function autoplay() {
        $('.cascade-slider_arrow-left').click();
        setTimeout(autoplay, 4000);
    }
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoPlay: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.companies-marquee').slick({
        infinite: true,
        slidesToShow: 8,
        speed: 3000,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        arrows: false,
        autoplaySpeed: 6,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }]

    });
    $('.process-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 5000,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        arrows: false,
        autoplaySpeed: 6,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }]
    }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
});