function initMap() {
    
    // Координаты места
    var myLatLng = {lat: 50.470639, lng: 30.515972};

    // Создаем карту и устанавливаем ее в #map-container
    var map = new google.maps.Map(document.getElementById('map-container'), {
        center: myLatLng,
        zoom: 15  // Увеличим масштаб для лучшей видимости маркера
    });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Место на карте'
    });

    // Убедимся, что маркер виден при загрузке карты
    map.setCenter(myLatLng);
}

