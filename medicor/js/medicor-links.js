/*
 @module medicor-links.js
 This module tracks link clicks and a bit more
 */
(function ($) {
    $(document).ready(function () {
        ga('send', 'event', 'document', 'ready', 'index');

        $('a.tel').on('mousedown', function () {
            ga('send', 'event', 'link', 'click', 'telephone');
        });

        $('a.license').on('click', function () {
            ga('send', 'event', 'link', 'click', 'license');
        });

        $('a.price').on('click', function () {
            ga('send', 'event', 'link', 'click', 'price');
        });
    });

    $(window).on('load', function () {
        ga('send', 'event', 'window', 'load', 'index');
    });
})(jQuery);