
    var map;



    var oslo= new google.maps.LatLng(59.911491, 10.757933);

    //Define OSM as base layer in addition to the default Google layers

    var osmMapType = new google.maps.ImageMapType({

                    getTileUrl: function (coord, zoom) {

                        return "http://tile.openstreetmap.org/" +

           zoom + "/" + coord.x + "/" + coord.y + ".png";

                    },

                    tileSize: new google.maps.Size(256, 256),

                    isPng: true,

                    alt: "OpenStreetMap",

                    name: "OSM",

                    maxZoom: 19

                });



   //Define custom WMS tiled layer

   var SLPLayer = new google.maps.ImageMapType({

                    getTileUrl: function (coord, zoom) {

                        var proj = map.getProjection();

                        var zfactor = Math.pow(2, zoom);

                        // get Long Lat coordinates

                        var top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 256 / zfactor, coord.y * 256 / zfactor));

                        var bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 256 / zfactor, (coord.y + 1) * 256 / zfactor));



                        //corrections for the slight shift of the SLP (mapserver)

                        var deltaX = 0.0013;

                        var deltaY = 0.00058;



                        //create the Bounding box string

                        var bbox =     (top.lng() + deltaX) + "," +

                                  (bot.lat() + deltaY) + "," +

                                  (bot.lng() + deltaX) + "," +

                                  (top.lat() + deltaY);



                        //base WMS URL

                        var url = "http://openwms.statkart.no/skwms1/wms.sjokartraster?";

                        url += "&REQUEST=GetMap"; //WMS operation

                        url += "&SERVICE=WMS";    //WMS service

                        url += "&VERSION=1.1.1";  //WMS version

                        url += "&LAYERS=" + "hoved"; //WMS layers

                        url += "&FORMAT=image/png" ; //WMS format

                        url += "&BGCOLOR=0xFFFFFF";

                        url += "&TRANSPARENT=TRUE";

                        url += "&SRS=EPSG:4258";     //set WGS84

                        url += "&BBOX=" + bbox;      // set bounding box

                        url += "&WIDTH=256";         //tile size in google

                        url += "&HEIGHT=256";

                        return url;                 // return URL for the tile



                    },

                    tileSize: new google.maps.Size(256, 256),

                    isPng: true

                });









    function initialize() {

        var mapOptions = {

            zoom: 10,

            center: oslo,

            mapTypeId: 'OSM',

            mapTypeControlOptions: {

                mapTypeIds: ['OSM', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.TERRAIN],

                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU

            }

        };

        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        map.mapTypes.set('OSM', osmMapType);

        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

        //add WMS layer

        map.overlayMapTypes.push(SLPLayer);



    }
