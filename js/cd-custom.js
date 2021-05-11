(function ($) {
    $(document).ready(function () {
        // Slider Menu Btn ------>
        $('.menu-open').click(function () {
            $('.mobile-menu .main-menu').css('marginLeft', '0');
            $(this).hide();
            $('.menu-close').show();
            $('.desktop-menu').hide();

            var screenWidth = $(window).width();
            if (screenWidth <= 768) {
                $('.mobile-menu .main-menu').css('width', '100%');
            }
        });

        //Menu Close Btn ------>
        $('.menu-close').click(function () {
            $('.mobile-menu .main-menu').css('marginLeft', '-300px');
            $(this).hide();
            $('.menu-open').show();
            $('.desktop-menu').show();

            var screenWidth = $(window).width();
            if (screenWidth <= 768) {
                $('.mobile-menu .main-menu').css('width', '0');
            }
        });

        // Navbar - Menu Fixed
        $(window).scroll(function () {

            // var mainMenuHeight = $('.main-menu').outerHeight();
            var scrollTOP = $(window).scrollTop();
            var screenWidth = $(window).width()

            // Desktop Menu Fixed ----->
            if (scrollTOP > 250 && screenWidth > 768) {
                $('.menu-btn-bg').addClass('cd-fixed');
            } else {
                $('.menu-btn-bg').removeClass('cd-fixed');
            }

            // Mobile Menu Fixed ----->
            if (scrollTOP > 250 && screenWidth <= 768) {
                $('.menu-open').addClass('mobile-menu-fixed');
                $('.menu-close').addClass('mobile-menu-fixed');
            } else {
                $('.menu-open').removeClass('mobile-menu-fixed');
                $('.menu-close').removeClass('mobile-menu-fixed');
            }
        });

        // <------ Ends ------>
    });
})(jQuery);