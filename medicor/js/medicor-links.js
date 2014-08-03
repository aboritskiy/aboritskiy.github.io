/*
 @module medicor-links.js
 This module tracks link clicks
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
    });
})(jQuery);