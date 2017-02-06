function initMap() {
    var uluru = {
        lat: 37.09024,
        lng: -95.712891
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
