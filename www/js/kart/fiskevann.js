

          var locations = [
            ['Garpetjernet: Fint turområde. Et par fine ørret i dette vannet. C&R er viktig her da de ikke gyter i vannet.', 60.4257, 5.31453,],
            ['Langevatnet: Mye småfallen ørret. ', 60.42794, 5.31792,],
            ['Munkebotsvatnet: Mye småfallen ørret.', 60.42174, 5.32442,],
            ['Lille Lundgårdvann: Her er det godt over kgs ørret. Disse blir satt ut når kongen kommer til Bergen for å fiske. Disse svømmer ut igjen igjennom kanaler.', 60.3905, 5.32813,],
            ['Jordalsvatnet: Drikkevann så dette er fredet. Får du tillatelse av grunneier kan du få Ørret og Gjedde.', 60.43341, 5.33985,],
            ['Nordåsvannet: Merk fredning fram til 15.Juli til 15 Sept. Ørret, laks og annen sjøfisk er vanlig her.', 60.32111, 5.31138,],
            ['Apeltunvatnet: Ørret og Sjøørret. Sjøørreten her er fredet.', 60.29757, 5.33345,],
            ['Birkelandsvatnet', 60.30824, 5.37775,],
            ['Nesttunvatnet: Ikke like lett å finne gode plasser her. Går både Ørret, Gjedde og Abbor her.', 60.32385, 5.35185,],
            ['Tennebekktjørna', 60.3651, 5.26124,],
            ['Gravdalsvatnet', 60.38185, 5.26302,],
            ['Kvassnesstemma: Fin turområdet. Mye småfallen Ørret og noe Karpe. Karpen er fredet.', 60.54585, 5.29571,],
            ['Aurihopen: Mye småfallen Ørret men en og annen stor', 60.75838, 4.71077,],
            ['Langevatnet: Fin størrelse på noe av Ørreten her.', 60.76785, 4.71038,],
            ['Eidsvannet', 60.7252, 5.21917,],
            ['Skogseidvatnet: Fiskekort - 100kroner. Dorging med båt er anbefalt her. Ørret på flere kg blir ofte tatt.', 60.2208, 5.87957,],
            ['Grimevatnet: Ikke mange fine plasser med Ørret og Abbor i vannet.', 60.34099, 5.40895,],
            ['Spåkevatnet: Grei ørret, men meldt mye mark i Ørreten.', 60.44391, 5.43087,],
            ['Nubbevatnet: En og annen Ørret. ', 60.36013, 5.38825,],
            ['Liavatnet: Mye småfallen Ørret. ', 60.47308, 5.34077,],
            ['Langavatnet', 60.48109, 5.34085,],
            ['Åstveitvatnet: Mye mindre Ørret her men en og annen på halv kilo finnes.', 60.45228, 5.30366,],
            ['Vieksajohka', 70.36267, 25.79881,],
            ['Lille Rostavatn', 68.98972, 19.63861,],
            ['Trangdalsvatn', 69.70471, 23.39793,],
            ['Šearesgieddjávri', 70.48096, 28.03579,],
            ['Kulojärvi', 69.89802, 23.46942,],
            ['Skillefjordelva', 70.18376, 23.43899,],
            ['Lillesand', 58.24687, 8.37321,],
            ['Borkedalstemmen', 58.2482, 8.35759,],
            ['Sandhaugene', 58.28288, 8.32403,],
            ['Bjortjønna', 58.30238, 8.32755,],
            ['Ustedalsfjorden', 60.52177, 8.17391,],
            ['Grøtheimsvatnet', 59.164, 5.2182,],
            ['Litlevatnet', 59.16451, 5.25901,],
            ['Isvatnet', 59.17163, 5.24798,],
            ['STED', 59.15716, 5.25629,],
            ['Rotavatnet', 59.18421, 5.23322,],
            ['Mjåvatnet', 59.19604, 5.24352,],
            ['Hamravatnet', 59.19832, 5.26348,],
            ['Indre Holma vatnet', 59.20254, 5.24781,],
            ['Ytre Holmavatnet', 59.205, 5.23404,],
            ['Reidarsløkjane', 59.19777, 5.22936,],
            ['Nøkksvatnet', 59.20388, 5.22421,],
            ['Litlavatnet', 59.20454, 5.21816,],
            ['Sandvatnet', 59.21388, 5.24588,],
            ['Stiklevatnet', 59.21634, 5.28438,],
            ['Holmavatnet', 59.21109, 5.29884,],
            ['Kigjavatnet', 59.20006, 5.29652,],
            ['Dalsvatnet', 59.19663, 5.28523,],
            ['Vaulen', 59.23009, 5.2691,],
            ['Vestre Mjåvatnet', 59.22989, 5.28141,],
            ['Reiarsvatnet', 59.23443, 5.29858,],
            ['Tistrevatnet', 59.26287, 5.25476,],
            ['Aureivatnet', 59.26289, 5.23996,],
            ['Søre Brekkevatnet', 59.26649, 5.26206,],
            ['Nordre Brekkevatnet', 59.27425, 5.2576,],
            ['Melstokkvatnet', 59.2498, 5.29729,],
            ['Tjøsvollvatnet', 59.2662, 5.19837,],
            ['Heiavatnet', 59.27199, 5.22884,],
            ['Fotvatnet', 59.29508, 5.27798,],
            ['Rossavatnet', 59.2988, 5.25931,],
            ['Storestemmen', 59.3015, 5.24009,],
            ['Gåsavatnet', 59.31606, 5.24004,],
            ['Grodavatnet', 59.33336, 5.23524,],
            ['Aksnesvatnet', 59.38396, 5.34991,],
            ['Helgelandsvatnet', 59.37479, 5.33291,],
            ['Vormedalsvatnet', 59.36147, 5.34038,],
            ['Longavatnet', 59.35821, 5.34349,],
            ['Tuastadvatnet', 59.34367, 5.34213,],
            ['Litlavatnet', 59.33569, 5.33709,],
            ['Øvre Helgalandsvatnet', 59.30605, 5.35094,],
            ['Nedre Helgelandsvatnet', 59.30119, 5.35068,],
            ['Tjolandsvatnet', 59.2926, 5.35789,],
            ['Eiviondsvatnet', 59.41919, 5.30716,],
            ['Gåsavatnet', 59.4106, 5.31309,],
            ['Krokavatnet', 59.43532, 5.33098,],
            ['Store Stokkavatnet', 58.96404, 5.66688,],
            ['Mosvatnet', 58.95675, 5.71295,],
            ['Bråsteinvatnet', 58.80391, 5.7939,],
            ['Melsvatnet', 58.72654, 5.77906,],
            ['Tengesdalsvatnet', 58.86607, 5.96726,],
            ['Hålandsvatnet', 58.97797, 5.62191,],
            ['STED', 58.63675, 5.81863,],
            ['Nodlandsvatnet', 58.47378, 6.1468,],
            ['Eigelandsvatnet', 58.4888, 6.13577,],
            ['Møgedalsvatnet', 58.51192, 6.14264,],
            ['Hyttevatnet', 58.48893, 6.15165,],
            ['Eigelivatnet', 58.47516, 6.17646,],
            ['Svanevatnet', 58.49006, 6.02037,],
            ['Langevatnet', 58.47401, 6.01793,],
            ['Helgesvatnet', 58.4937, 6.10095,],
            ['Syltre', 58.48647, 6.09711,],
            ['Kjervallvatnet', 58.48068, 6.09702,],
            ['Sauatjørna', 58.48014, 6.08535,],
            ['Branndalsvatnet', 58.39652, 6.11814,],
            ['Kjerringtjørna', 58.39327, 6.10412,],
            ['Sandtjørna', 58.4473, 6.01912,],
            ['Kjerke tjørna', 58.45157, 6.02362,],
            ['Nordsjøen', 58.45139, 6.02794,],
            ['Kvidingsvatnet', 58.48019, 5.9011,],
            ['Holmavatnet', 58.47573, 5.90886,],
            ['Nedre Øybutjørn', 58.47501, 5.915,],
            ['Nittelva', 59.9483, 11.0513,],
            ['Åmotdammen: Satt ut en del Ørret i 2016. Ørret på rundt 300-400 gram er ikke uvanlig. Kan og få Gjedde.', 59.91978, 11.02716,],
            ['Mønevannet: Fiskekort 90 kroner dagen. Ørret varierer i strl. Menes om Gjedde her og.', 59.87364, 10.99392,],
            ['Fløyta: Fiskekort 90 kroner dagen. Ørret varierer i strl. Menes om Gjedde her og.', 59.85399, 11.00606,],
            ['Nakkevannet - Røye og Ørret - Fiskekort', 69.5762149, 19.55363060000002,],
            ['Indre og Ytre Grønnlifjennvann - Røye og Ørret- (Fiskekort)', 69.931861, 19.263239,],
            ['Skulsfjordvatnet - Laks, Røye og ørret - (Fiskekort)', 69.825351, 18.816468999999983,],
            ['Ringvatnet - Laks, sjøørret, sjørøye, innlandsrøye og innlandsørret - (Fiskekort)', 69.811277, 19.24713500000007,],
            ['Kattfjordvatnet - Ørret - (Fiskekort)', 69.652721, 18.49968899999999,],
            ['Nordkjoselva - Ørret - (Fiskekort)', 69.219209, 19.56780600000002,],
            ['Smuolkojohka - Smårøye', 69.321287, 21.060024,],
            ['Trangdalsvatn - Ørret - (Fiskekort)', 69.708718, 23.398968999999965,],
            ['Searesgieddjavri - Røye - (Fiskekort)', 70.480921, 28.036261999999965,],
            ['Oksfjordvannet - Ørret og Røye - Fiskekort', 69.895634, 21.38832100000002,],
            ['Storvannet - Ørret, Laks og Røye - Fiskekort', 69.896972, 23.471426000000065,],
            ['Beskades - Ørret - Fiskekort', 69.689049, 23.56361400000003,],
            ['Karasjokka - Ørret og Laks - Fiskekort', 69.099511, 24.28270299999997,],
            ['PLASS', 11.1111111, 11.1111,],
            ['PLASS', 11.1111111, 11.1111,],
            ['PLASS', 11.1111111, 11.1111,],






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
