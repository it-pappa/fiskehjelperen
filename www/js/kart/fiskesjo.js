var locations = [
  ['Nordåsvannet: Merk fredning fram til 15 Juli - 15 September. Utenom fredning kan du få alt fra Ørret, Laks til Torsk og Makrel.', 60.32111, 5.31138,],
  ['Breistein Kai: Surffiske - Du må regne med mye svinn! Til vanlig fiske kan du få lyr, sei mm.', 60.49034, 5.39973,],
  ['Matre: Merk fredningssoner i området. Du finner info om dette på fiskehjelperen på web.(Stramtsnoreblog.com)Her kan du få Laks, Torsk mm. ', 60.87301, 5.59023,],
  ['Mostraumen: Sjøørret og Torsk er det meste du kan få her. Du kan en sjelden gang få en god laks på andre siden av snøret.', 60.76649, 5.72525,],
  ['Kvarven: Flott området med fin kai og sitte området. Kan få alt av fiskearter.', 60.3995, 5.24129,],
  ['Småholmen: Lyr, Sei Makrel. Ikke lett å komme seg til.', 60.39865, 5.21116,],
  ['Store Lundgårdsvann: Lyr, Torsk, Merk fredning ved elva.', 60.38162, 5.33884,],
  ['Bontelabo: Meget artsrikt. Anbefales surffiske/Meitefiske her.', 60.4028, 5.3168,],
  ['Byfjorden: Lange, Torsk mm.', 60.45154, 5.27378,],
  ['Osterfjorden: Lysing, Lange, Torsk', 60.42597, 5.53573,],
  ['Masfjorden: Merk fredning i området. Torsk mm.', 60.87018, 5.57905,],
  ['Nordnes: Utbygd fin plass på tuppen her nå. Fint for meitefiske/surf, men fint med vanlig fiske og. Kan få Torsk, lyr, sei mm.', 60.40031, 5.3012,],
  ['Laksevåg neset: Gøy å fiske med unga. Kan fiske stor Torsk og lyr fra kaien.', 60.3889, 5.29335,],
  ['Osterfjorden: Lysing, lange, Torsk mm.', 60.40944, 5.10177,],
  ['Osterfjorden: Lysing, lange, Torsk mm.', 60.47448, 4.99671,],
  ['Volvika', 60.49638, 5.38918,],
  ['Hagelsundet: Makrel, Sei, Sjøørret, Lange', 60.54396, 5.27285,],
  ['Sildevågen: Inntill land i rundt Mai periode går det stor lyr. Er du i båt kan du få breiflabb, Torsk, lange mm.', 60.77212, 4.74212,],
  ['Hovden: Ikke lett å lande fisken her, da det er meget bratt ned til vannet. Ikke ideelt for barn. Fin plass for Lyr.', 60.77494, 4.74418,],
  ['Flyndrevågen: Flott området for hele familien. Kan ta mange små flyndrer i området. ', 60.77895, 4.73864,],
  ['Eskjæret: Greit å komme seg til men barn må være forsiktige. Fisker du i tang grensene kan du ta stor lyr.', 60.75489, 4.74128,],
  ['Moloen: Når det er god strøm i vannet om våren eller høsten er dette en god plass til lyr. Tas og Sei lenger ute. ', 60.78514, 4.72461,],
  ['Fedje Fjord: Torsk, Lyr mm. ', 60.79234, 4.70751,],
  ['Fedje Fjord: Torsk, Lyr mm. ', 60.78767, 4.69953,],
  ['Fonstraumen: Lyr, Sei, Sjøøret, Torsk. ', 60.73065, 4.97238,],
  ['Under Sotrabrua: Lysing, Torsk, Lyr, Sei mm.', 60.37263, 5.16941,],
  ['Arnavågen: Merk fredning fra Arnavågen og inn. Kan ta Lyr, Makrel, Hornhjell, Sjøørret, Laks.', 60.45079, 5.45419,],
  ['Salhus: Fin plass ved stupebrettet og badeplassen. Tas for det meste Lyr her.', 60.50998, 5.27257,],
  ['Odderøya', 58.1312, 8.01246,],
  ['Tjuvika', 58.08622, 7.92526,],
  ['Kjevebikstranda', 58.1964, 8.07529,],
  ['Vigebukta', 58.16255, 8.04611,],
  ['Kvarnes Friområde', 58.10981, 8.11992,],
  ['Flekkerøya', 58.07061, 8.0104,],
  ['Krooden', 58.09312, 7.97607,],
  ['Lillesand - Fjord', 58.23318, 8.40428,],
  ['', 58.25601, 8.3975,],
  ['STED', 58.25579, 8.39334,],
  ['Skauerøybukta', 58.23794, 8.37887,],
  ['STED', 58.24201, 8.39265,],
  ['STED', 58.24386, 8.42724,],
  ['STED', 58.22719, 8.42063],
  ['STED', 58.21955, 8.38891,],
  ['Bygdøy', 59.91639, 10.66446,],
  ['Sollerudstranda', 59.90959, 10.643,],
  ['Fillipstad Brygge', 59.9065, 10.71475,],
  ['Bjøvikskaia', 59.9046, 10.75286,],
  ['Veritasstranda', 59.88747, 10.55631,],
  ['Kalvøya', 59.88376, 10.5388,],
  ['Sjursøya', 59.88773, 10.74789,],
  ['Ulvøya', 59.86964, 10.77621,],
  ['Hvervenbukta', 59.82903, 10.76574,],
  ['Presteskjæret', 59.80935, 10.70351,],
  ['Breivoll', 59.7307, 10.72883,],
  ['Hornstranda', 59.87084, 10.65708,],
  ['Rolfstangen', 59.89208, 10.63493,],
  ['Halden Brygge', 59.87463, 10.60678,],
  ['Hvalstrand Bad', 59.84196, 10.48696,],
  ['Konglungen', 59.83498, 10.50147,],
  ['Selvik Båthavn', 59.81449, 10.4819,],
  ['Elnestangen', 59.80296, 10.50421,],
  ['Sjøstrand', 59.79648, 10.49752,],
  ['Grundvika', 59.77143, 10.50413,],
  ['Nærsnesbukta', 59.75937, 10.50275,],
  ['Nærnestangen', 59.7643, 10.51254,],
  ['Fagerstrand Brygge', 59.73338, 10.58987,],
  ['Demmekilen', 59.72828, 10.52086,],
  ['Blikshavn', 59.20517, 5.31845,],
  ['Åkrasanden', 59.24812, 5.196,],
  ['Taravika', 59.21694, 5.18102],
  ['Sandvesanden', 59.17573, 5.18982,],
  ['STED', 59.28521, 5.25202,],
  ['Voravågane', 59.30645, 5.28995,],
  ['Hålandsvågen', 59.14867, 5.23116,],
  ['STED', 59.15045, 5.27506,],
  ['STED', 59.15308, 5.2974,],
  ['STED', 59.16085, 5.30332,],
  ['Mongarshamn', 59.16411, 5.30435,],
  ['Bekkjarvika', 59.17151, 5.31169,],
  ['Norstø', 59.17909, 5.31131,],
  ['Lindøy', 58.98868, 5.82326,],
  ['STED', 59.05679, 5.84609,],
  ['Lysefjorden', 59.0144, 6.41326,],
  ['Solvåg', 59.14706, 6.02325,],
  ['STED', 58.90393, 6.07483,],
  ['STED', 58.47476, 5.8497,],
  ['STED', 58.46389, 5.88146,],
  ['STED', 58.46721, 5.96214,],
  ['STED', 58.46524, 5.99132,],
  ['STED', 58.46057, 5.97639,],
  ['STED', 58.42994, 5.86429,],
  ['STED', 58.41789, 5.95544,],
  ['STED', 58.41834, 6.0102,],
  ['Paradisbukta', 59.09684, 11.03473,],
  ['Ødegårskilen', 59.08732, 11.03954,],
  ['Stavseng', 59.07594, 11.04795,],
  ['Røsholmen', 59.083, 11.05739,],
  ['Soldatersunder', 59.07965, 11.08829,],
  ['Ed', 59.07259, 11.08795,],
  ['Sildebukta', 59.06844, 11.08709,],
  ['Koltorpneset', 59.04338, 11.06108,],
  ['Rennvik', 59.03587, 11.06065,],
  ['Skårsnesbukta', 59.02593, 11.04297,],
  ['Døvika', 59.02041, 11.01834,],
  ['Storesand og ørekroken', 59.02717, 11.00941,],
  ['Lille Rødshue', 59.03874, 10.98778,],
  ['Rørvik', 59.04625, 10.9889,],
  ['Bølingshavn', 59.05335, 10.99431,],
  ['Verpet', 59.06624, 10.9992,],
  ['Korshavn', 59.07316, 10.99379,],
  ['Gryllefjord - Torsk, sei, Kveite', 69.349589, 17.010915,],
  ['Veimannsbotten - Torsk, sei, kveite, sild', 69.279011, 17.058820,],
  ['Sifjord - Torsk, sei, kveite', 69.285720, 17.162390,],
  ['Teistbaen - Torsk, Sei, Skrei, kveite', 69.518275, 17.272912,],
  ['Lars Gunnsersenvika - Skrei, kveite', 71.170262, 25.800498,],
  ['Røykhole - Skrei, kveite, sei', 71.167028, 25.765135,],
  ['Moskenes - Torsk, Sei', 67.896061, 13.045300,],
  ['Vestfjorden - Skrei, Torsk, Sei, Kveite', 67.998785, 14.175903,],
  ['Skrova Svolvær - Skrei, Sei, Kveite og annet', 68.202295, 14.604405,],
  ['Terjevik Trosmø - Torsk, Sei, Skate og annet', 69.666965, 18.976621,],
  ['Reinøya Vardø - Skrei, Kveite, Sei', 70.384803, 31.126626,],
  ['Store Vadsøøya - Skrei, Torsk , Sei, Kveite', 70.062427, 29.745693,],
  ['Jakobselv - Torsk, Sei, Kveite, Laks', 69.776407, 30.830135,],
  ['Midtervalen - Torsk, Sei, Laks og annet', 70.962797, 28.202204,],
  ['Viggja - Torsk, sei, lyr, steinbit, skate, kveite', 63.347123, 9.958093,],
  ['Børsa - Torsk, sei, lyr, steinbit, skate, kveite', 63.327487, 10.095926,],
  ['Buvika - Torsk, sei, lyr, steinbit, kveite', 63.321017, 10.194939],
  ['Gaulaosen - Torsk, Sei, Lyr', 63.338828, 10.220413,],
  ['Gaulaosen - Torsk, sei, lange, lyr', 63.346057, 10.182731,],
  ['Bosberg - Torsk, lyr, sei, kveite og annet', 63.451874, 10.204558,],
  ['Ladekaia - Torsk, lyr, sei, annet', 63.457253, 10.446151,],
  ['Malvik - Lyr, sei, Torsk', 63.439786, 10.830043,],
  ['Bjordal 1 - Lyr, torsk, sei,', 61.07688, 5.82841],
  ['Bjordal Båt - Lysing, Uer, Torsk, Lyr, Lange, Laks', 61.08668, 5.82773,],
  ['Matre Molo - Sei, Torsk, Laks', 60.8712, 5.58689,],
  ['Matre - Torsk, Lyr, Sei,', 60.86973, 5.57719,],
  [' - Div.', 59.09149, 10.22071,],
  ['PLASS - FISK', 59.08825, 10.22385,],
  ['Frekkhaug Kai (Surf) - Lyr, Brosme, Lysing, Kolmule, og mer', 60.51831, 5.24863,],
  ['Nordhordalands Bruen - Div. Fisk nærme land og få brosme, lange og mer. Fisk høyt rundt søkkende og få sei, lyr, laks, ørret,', 60.52963, 5.25807,],
  ['Knarivik Kai - Lyr, Sei, Torsk, (Brosme ved surf)', 60.54158, 5.28759,],
  [' - Lyr, Sei', 60.5663, 5.23017,],
  ['Breistein Kai (Mye steiner) - Sei, Lyr, Lange', 60.49059, 5.39986,],
  ['Hylkje - div.', 60.51248, 5.3512,],
  ['Kai (Surf/Agn) - Brungylt, lange, sei,', 60.5231, 5.31875,],
  ['Båt - Lysing, Sei, makrel, lange, ', 60.37276, 5.16983,],
  ['Båt - Lange, kveite, makrel, sei,', 60.37452, 5.16108,],
  [' - Lyr, Sei', 60.44087, 4.96513,],
  [' - Lyr, Sei', 60.45687, 4.95655,],
  [' - Lyr, Sei', 60.45929, 4.95603,],
  [' - Lyr, Sei, Torsk', 60.62517, 4.80308,],
  [' - Sei, Ørret, makrel', 60.47769, 5.68216,],
  ['Hatvik Kai - Lyr', 60.21082, 5.54603,],
  [' - makrel,', 59.18507, 10.87749,],
  [' - makrel', 59.17065, 10.84796,],
  [' - ', 59.19738, 10.90015,],
  [' - makrel', 59.18445, 10.87697,],
  [' - Havabbor, ørret, torsk, sei, makrel', 59.67068, 10.59571,],
  ['Flue/Sluk - Sjøørret', 59.80596, 10.70553,],
  ['Stureskallen - ', 60.63083, 4.87722,],
  ['Straumsundet - ', 60.58158, 4.86273,],
  ['Myrefjæra - Lange, sei, torsk, lyr osv', 60.43535, 5.04877,],
  ['Herøyterminalen - ', 62.33665, 5.7276,],
  ['Ramsøy - Lange, sei, lyr, torsk. Grei dybde', 60.43873, 5.04725,],
  ['Lauvøyna - Lyr, sei, lange, brungylt, paddetorsk osv.', 60.44207, 5.06229,],
  ['Herdlesundet - Lyr, sei. Mulighet for flatfisk', 60.56107, 4.961,],
  ['Herdla - Surffiske/Kystmeite', 60.56454, 4.94951,],
  ['Glasvik - Flatfisk, sei, makrell.', 60.4945, 4.9256,],
  ['Ormhilleren - Kai. Makrell, sei ', 60.49718, 4.92753,],
  [' - Sei, makrel', 60.49966, 4.93584,],
  [' - Slukfiske og bunnmeite. Sei, lyr osv.', 60.58675, 4.85623,],
  [' - FISKEKORT? Sjekk lokale sider', 60.94521, 9.30481,],












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
