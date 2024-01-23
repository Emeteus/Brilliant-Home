var map;
var marker;

function initMap() {
    var myLatLng = {lat: 50.470639, lng: 30.515972};

    map = new google.maps.Map(document.getElementById('map-container'), {
        center: myLatLng,
        zoom: 15
    });

    marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Место на карте'
    });

    map.setCenter(myLatLng);

    // Добавим обработчик события resize на окно
    google.maps.event.addDomListener(window, 'resize', function() {
        // При изменении размера экрана центрируем карту и метку
        map.setCenter(myLatLng);
        marker.setPosition(myLatLng);
    });
}
