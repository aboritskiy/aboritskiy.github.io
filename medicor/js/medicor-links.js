/*
 @module medicor-links.js
 This module tracks link clicks and a bit more
 */
(function ($) {
    $(document).ready(function () {
        $('a.tel').on('mousedown', function () {
            ga('send', 'event', 'link', 'click', 'telephone');
        });

        $('a.license').on('click', function () {
            ga('send', 'event', 'link', 'click', 'license');
        });

        $('a.price').on('click', function () {
            ga('send', 'event', 'link', 'click', 'price');
        });

        $('a.medvaz').on('click', function () {
            ga('send', 'event', 'link', 'click', 'medvaz');
        });
    });

    $(window).on('load', function () {
        ga('send', 'event', 'window', 'load', 'index');
    });
})(jQuery);