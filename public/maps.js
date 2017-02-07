function initMap() {
    var uluru = {
        lat: 41.8781136,
        lng: -87.6297982
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        icon: "http://mlb.com/assets/images/2/0/2/111260202/cuts/CHC_1x_w6j9ueiq_8gdet1h6.png",

        map: map
    });
}
