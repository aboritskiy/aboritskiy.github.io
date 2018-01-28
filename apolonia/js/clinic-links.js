/*
 @module clinic-links.js
 This module tracks link clicks and a bit more
 */
(function ($) {
    $(document).ready(function () {
        $('a.email').on('mousedown click', function () {
            var $this = $(this);
            var addressBuffer = 'mailto:';
            addressBuffer += $this.attr('data-user');
            addressBuffer += '@';
            addressBuffer += $this.attr('data-domain');
            $this.attr('href', addressBuffer);
        });
    });
})(jQuery);