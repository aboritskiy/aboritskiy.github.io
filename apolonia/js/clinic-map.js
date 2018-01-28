/*
 @module clinic-map.js
 This module initializes map behavior.
 */
(function ($) {
    $(document).ready(function () {
        $('.map-container').each(function () {
            var $mapContainer = $(this);
            var $mapSettings = $mapContainer.find('.map-settings').remove();
            
            var initMap = function () {
                var map = new ymaps.Map($mapContainer[0], {
                    center: [
                        parseFloat($mapSettings.find('.map-center>.lat').text()),
                        parseFloat($mapSettings.find('.map-center>.lng').text())
                    ], 
                    zoom: parseInt($mapSettings.find('.map-zoom').text(), 10),
                    controls: ['zoomControl', 'geolocationControl', 'typeSelector']
                });
                
                var clinicPlacemark = new ymaps.Placemark(
                    [
                        parseFloat($mapSettings.find('.baloon>.center>.lat').text()),
                        parseFloat($mapSettings.find('.baloon>.center>.lng').text())
                    ],
                    { 
                        hintContent: $mapSettings.find('.baloon>.hint').html(), 
                        balloonContent: $mapSettings.find('.baloon>.content').html()
                    }
                );

                map.geoObjects.add(clinicPlacemark);
            };
            ymaps.ready(initMap);
        
        });
    });
})(jQuery);