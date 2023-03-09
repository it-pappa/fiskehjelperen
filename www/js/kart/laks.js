var locations = [
  ['Oselvo: Rundt 300 kr for 8 timer. Stenger og pris varierer på Sone. Tas ofte stor laks her! Sone 2 og 5 er best.', 60.18982, 5.47269 ],
  ['Storaelva - Arna: Fra 200-230 kroner døgnet. Flomelv. Tas noe stor laks til tider. ', 60.41866, 5.46707, ],
  ['Lonelva: Fiskekort rundt 50kr. Smålaks elv men er tatt laks på nesten 10 kg her. ', 60.51991, 5.50179, ],
  ['Vikselva: Fiskekort fra 400 kr. Tas stor laks. Markelv/spinner med fluefiske plass øverst og nederst i elva.', 61.08811, 6.58608, ],
  ['Bolstadelvi: Pris varierer på sesong. Se egne sider. Tas stor laks på 10+kg!', 60.63818, 5.95943, ],
  ['Lærdalselva: HALELUJA!', 61.09879, 7.52014, ],
  ['Nausta: Pris varier fra sone til sone. Tas alt fra mindre laks til storlaks og stor ørret. Nydelig flue elv. #Grisedelig!', 61.51369, 5.72276, ],
  ['Daleelva: Info kommer.', 60.57937, 5.79048, ],
  ['Eksingdal: Info kommer.', 60.7313, 5.80387, ],
  ['Osfossen: Info kommer.', 61.36703, 5.68293, ],
  ['Gaula: Info kommer.', 61.35584, 5.71203, ],
  ['Førdeelven: Info kommer.', 61.45452, 5.84627, ],
  ['Etne: Info kommer.', 59.66977, 5.95107, ],
  ['Moelva: Stengt. Elven skal gjenopplives.', 60.81663, 5.8315, ],
  ['Stryneelva: Info kommer.', 61.9023, 6.72474, ],
  ['Numedalslågen: Pris varierer på sesong og sone. Tas veldig stor laks i elven sammen med masse annen fisk.', 59.10143, 10.06879 ],
  ['Akerselva: Info kommer.', 59.92983, 10.75658, ],
  ['Drammenselva: Info kommer.', 59.74126, 10.20458, ],
  ['Eio: Info kommer.', 60.46531, 7.07407 , ],
  ['Aulielva: Info kommer.', 59.27936, 10.37508, ],
  ['Sandvikselva: Info kommer.', 59.89119, 10.52226, ],
  ['Vosso: Info kommer.', 60.62199, 6.42657, ],





];

function initAutocomplete() {
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 62.825601, lng: 9.981654},
zoom: 6,
mapTypeId: 'roadmap'
});
var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
map: map
});

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(locations[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
}

// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
searchBox.setBounds(map.getBounds());
});


var markers = [];

// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
var places = searchBox.getPlaces();

if (places.length == 0) {
  return;
}

// Clear out the old markers.
markers.forEach(function(marker) {
  marker.setMap(null);
});
markers = [];

// For each place, get the icon, name and location.
var bounds = new google.maps.LatLngBounds();
places.forEach(function(place) {
  if (!place.geometry) {
    console.log("Returned place contains no geometry");
    return;
  }
  var icon = {
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  };

  // Create a marker for each place.


  if (place.geometry.viewport) {
    // Only geocodes have viewport.
    bounds.union(place.geometry.viewport);
  } else {
    bounds.extend(place.geometry.location);
  }
});
map.fitBounds(bounds);
});
}
