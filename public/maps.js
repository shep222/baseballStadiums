var newStadiums = [];

function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1L5ObZWBF0nUnPXYk-lY3AxM-enTcbpcsCzzV3BVMcAc/pubhtml',
        callback: function(data, tabletop) {

            //console.log('this' , newStadiums);
            initMap(data);
        },
        simpleSheet: true
    });
}
window.addEventListener('DOMContentLoaded', init);

function initMap(newStadiums) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(37.09024, -95.712891)
    });

    var infoWindow = new google.maps.InfoWindow({

    });
    var markers = [];
    function addMarker(eachStadium) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(eachStadium.latitude, eachStadium.longitude),
            icon: {
                url: "images/logos.png",
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(32, 32 * eachStadium.imagePosition),
                scaledSize: new google.maps.Size(64, 1152)
            },

            map: map,

        });
        markers.push(marker);
        marker.addListener('click', function() {
              infoWindow.setContent(eachStadium.teamName  + "<br>" + eachStadium.stadiumName);
              infoWindow.open(map, marker);
            });
    }


    for (j = 0; j < newStadiums.length; j++) {
        addMarker(newStadiums[j],j);
    }

    $('.dropdownSort').on('change', function(){
      markers.forEach(function(marker){
        marker.setMap(null);
      });
      var mySortDecision = $('.dropdownSort').val();
      if (mySortDecision=== "National League"){
        var nlTeams = newStadiums.filter(function(team){
          return team.league === "NL";
        });
        for (j = 0; j < nlTeams.length; j++) {
            addMarker(nlTeams[j],j);
          }
      } else if (mySortDecision=== "American League"){
        var alTeams = newStadiums.filter(function(team){
          return team.league === "AL";
        });
        for (j = 0; j < alTeams.length; j++) {
            addMarker(alTeams[j],j);
          }
      } else {
        for (j = 0; j < newStadiums.length; j++) {
            addMarker(newStadiums[j],j);
          }
      }

    });











}
