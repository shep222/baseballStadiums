var newStadiums = [];
function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1L5ObZWBF0nUnPXYk-lY3AxM-enTcbpcsCzzV3BVMcAc/pubhtml',
                   callback: function(data, tabletop) {

                       //console.log('this' , newStadiums);
                       initMap(data);
                   },
                   simpleSheet: true } );
}
window.addEventListener('DOMContentLoaded', init);

 function initMap(newStadiums) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(37.09024, -95.712891)
    });
    function addMarker(eachStadium){
      var marker = new google.maps.Marker({
        position: eachStadium.position,
        icon: eachStadium.icon,
        map: map,

      });

     }
    var eachStadium = [];
    for(i=0;i<newStadiums.length;i++){
      eachStadium.push({
        position: new google.maps.LatLng(newStadiums[i].latitude,newStadiums[i].longitude),
        icon: {url: "images/logos.png", size: new google.maps.Size(32,32), origin: new google.maps.Point(32,32*(i+1)),
      scaledSize: new google.maps.Size(64,1152) }});
}
    for (j=0;j<eachStadium.length;j++){
      addMarker(eachStadium[j]);
    }
 }
