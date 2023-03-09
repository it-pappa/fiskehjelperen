
          var locations = [
            ['Eikelandselva', 60.245, 5.75687, 4],
            ['Ekso: Kjøp fiskekort her:http://www.eksingedalen.no/ekso-villfisk. ', 60.78133, 6.0084, 2],
            ['Nea', 63.05737, 11.52543, ],
            ['Breimselva:', 61.7598, 6.23405, 3],
            ['Eidselva', 5.87034, 5.87034, 1],
            ['Breimselva', 61.7351, 6.42597, 5],
            ['Jølstra', 61.48225, 6.07423, 6],
            ['Otta: Fiskekort - http://fishspot.no/fiskeopplevelse/fiske-otta-elv-skjaak/', 61.90606, 8.16455, 7],
            ['Borgun', 61.04881, 7.75677, 8],
            ['Strandaelvi: Fiskekort - http://www.grunneigarsamskipnad.no', 60.72318, 6.49472, 9],
            ['Stølselva', 60.94118, 5.98548, 10],
            ['Fortundalselvi', 61.58835, 7.76724, 11],
            ['Namsen:Fiskekort - visitnamsskogan.no/test3.', 64.94172, 13.17913, 12],
            ['Namskroken: Fiskekort - visitnamsskogan.no/test3.', 65.0837, 13.44142, 13],
            ['Storfrøyningselva', 65.01686, 13.17192, 14],
            ['Nea:Fiskekort - http://neafisk.no', 63.05737, 11.52543, 15],
            ['Skamsdalselva', 68.31813, 17.6376,16],
            ['Nidelva:', 63.26955, 10.45786, 17],
            ['Feragselva:Se fiskeregler her:http://www.statskog.no/fiske/Documents/Fiskeregler/Fiskeregler_Roros.pdf', 62.47999, 11.8348, 18],
            ['Rismosjøen', 62.54221, 11.43985, 19],
            ['Vieksajohka: Går laks fram til fossen. Der stopper den. Over denne trengs kun innlangsfiskekort. http://www.fiskeinord.no/vieksajohka-artnejavri/', 70.36267, 25.79881, 20],
            ['Reisaelva: Fiskekort. http://www.fiskeinord.no/reisaelva/', 69.53769, 21.34763, 21],
            ['Kårvikelva', 69.93349, 19.11065, 22],
            ['Akkanas', 69.01452, 24.15455, 23],
            ['Skamsdalselva', 68.31813, 17.6376, 24],
            ['Mattiselva: Fiskekort. http://www.fiskeinord.no/mathiselva/', 69.86531, 22.95185, 25],
            ['Hemsila: Fiskekort - www.fiskeihemsedal.no/no/elv/hemsila.', 60.83936, 8.61924, 26],
            ['Mjøsa', 60.69174, 11.00306, 27],
            ['Bøelva: Fiskekort - https://www.inatur.no/fiske/56fbcc6be4b073008e02e723.', 59.42032, 9.08303, 28],
            ['Storelva - Sigdal', 60.03248, 9.67972, 29],
            ['Renaelva: Fiskekort - http://renaelva.no', 61.15383, 11.41942, 30],
            ['Numedalslågen', 60.26195, 8.98681, 31],
            ['Numedalslågen', 60.05781, 9.1341, 32],
            ['Numedalslågen', 59.51481, 9.8561, 33],
            ['Usta: Fiskekort kjøpes i sportsbutikken i Geilo. ', 60.54808, 8.25764, 34],
            ['Hallingdalselva: Fiskekort - https://www.golinfo.no/fiske-i-hallingdalselva/', 60.66218, 8.7334, 35],
            ['Hallingdalselva: Fiskekort - https://www.golinfo.no/fiske-i-hallingdalselva/', 60.6746, 9.02853, 36],
            ['Haglebuelva', 60.23552, 9.35043, 37],
            ['Elv - eggedal', 60.24279, 9.36996, 38],
            ['Gudbransdalslågen: Fiskekort - http://www.laagen-fiskeelv.no', 61.54691, 9.92752, 39],
            ['Holselva - Usta', 60.57931, 8.39582, 40],
            ['Glomma: Fiskekort hos inatur.no', 59.60839, 11.11816, 41],
            ['Barduelva - Ørret - (Fiskekort) ', 68.97946, 18.509559999999965, ],
            ['Stordalselva - (Fiskekort)', 69.121406, 20.139171000000033, ],
            ['PLASS ', 11.111111, 1.1111111, ],
            ['PLASS ', 11.111111, 1.1111111, ],
            ['PLASS ', 11.111111, 1.1111111, ],
            ['PLASS ', 11.111111, 1.1111111, ],


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
