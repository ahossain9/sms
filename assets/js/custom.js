(function ($) {
    "use strict";

    $(document).ready(function () {
        $('.sms-provider-info .icon-toggle').click(function () {
            $(this).toggleClass('active');
        });


        /*---------------------------------------------------
            accordian
        ----------------------------------------------------*/
//        $('.get-number-panel button').on('click', function () {
            //            $('.get-number-panel').addClass('active');
            //        });

    });

    /*---------------------------------------------------
        smooth scroll
    ----------------------------------------------------*/
    $('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    var lastScrollTop = '';

    $(window).on('scroll', function () {

        /*--------------------------
         sticky menu activation
        -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.header');
        if ($(window).scrollTop() > 100) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('sticky');

            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('sticky');
            }

        } else {
            mainMenuTop.removeClass('sticky');
        }
        lastScrollTop = st;

    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


}(jQuery));
