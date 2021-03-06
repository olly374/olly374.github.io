function myFunction() {
  var map = L.map('map').setView([51.101516, 10.313446], 6);
  if (map.tap) map.tap.disable();
  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=5;


// add var "code" i.e. spreadsheet key
var code = '1SIU5KR29zNm52A9GtF137Y8Juire76G58Jzs75-bYfw'

// loop through spreadsheet with Tabletop
    Tabletop.init({ 
    key: code,
    callback: function(sheet, tabletop){ 
      
      for (var i in sheet){
        var data = sheet[i];

          var test = L.icon({
              iconUrl: data.icon,
              iconSize:     [30, 60], // size of the icon
              iconAnchor:   [26, 60], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -60]
          });
          if (data.iconori === "left") {
            test = L.icon({
              iconUrl: data.icon,
              iconSize:     [60, 52], 
              iconAnchor:   [60, 26], 
              popupAnchor: [-35, -26]
              });
          };
          if (data.iconori === "right") {
            test = L.icon({
              iconUrl: data.icon,
              iconSize:     [60, 52], 
              iconAnchor:   [0, 26], 
              popupAnchor: [35, -26]
              })
            };

          L.marker([data.longitude, data.latitude], {icon: test})
          .addTo(map)
          .bindPopup("<strong style='color: #84b819'>" + data.newsroom + "</strong><br>" + 
                      data.company + " | " + data.city + "<br>Head: " + data.head).openPopup();
      }
    },
    simpleSheet: true 
	})
  
}
