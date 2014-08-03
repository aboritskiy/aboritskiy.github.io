/*
 @module medicor-links.js
 This module tracks link clicks
 */
(function ($) {
    $(document).ready(function () {
        $('a.tel').click(function () {
            ga('send', 'event', 'link', 'click', 'telephone');
        });

        $('a.license').click(function () {
            ga('send', 'event', 'link', 'click', 'license');
        });

        $('a.price').click(function () {
            ga('send', 'event', 'link', 'click', 'price');
        });
    });
})(jQuery);