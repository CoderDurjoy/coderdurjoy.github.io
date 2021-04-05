(function ($) {
    $(document).ready(function () {

        // Typed JS Code
        var type = new Typed('.type-here', {

            stringsElement: '.typed-js',
            typeSpeed: 40,
            backSpeed: 30,
            loop: true,
        });

        // WOW JS Code
        new WOW().init();


        // Navbar / Main Menu Fixed
        $(window).scroll(function () {

            // var mainMenuHeight = $('.main-menu').outerHeight();

            var mainMenuFixed = $(window).scrollTop();
            var screenWidth = $(window).width()

            if (mainMenuFixed > 200 && screenWidth > 768) {
                $('.main-menu').addClass('cd-fixed');
            } else {
                $('.main-menu').removeClass('cd-fixed');
            }
        });

        // Finishing Area
    });
})(jQuery);