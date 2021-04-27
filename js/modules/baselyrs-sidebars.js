import { map1, map2 } from './foundation.js';
//*********************BASELAYERS + CONTROL -- COPIED OVER *******************************************************************

//Leaflet Provider Baselayers
var lyrCartoDrkMttr = L.tileLayer.provider('CartoDB.DarkMatter');
var lyrStadiaAliSmthDrk = L.tileLayer.provider('Stadia.AlidadeSmoothDark');
var lyrCartoVygr = L.tileLayer.provider('CartoDB.Voyager');
var lyrCartoPstrn = L.tileLayer.provider('CartoDB.Positron');

var lyrStadiaAliSmthDrk2 = L.tileLayer.provider('Stadia.AlidadeSmoothDark');
var lyrCartoDrkMttr2 = L.tileLayer.provider('CartoDB.DarkMatter');
var lyrCartoVygr2 = L.tileLayer.provider('CartoDB.Voyager');
var lyrCartoPstrn2 = L.tileLayer.provider('CartoDB.Positron');

//Assign provider layers to baselayers

var baseLayers = {
  'Stadia Alidade Smooth Dark': lyrStadiaAliSmthDrk,
  'Carto Dark Matter': lyrCartoDrkMttr,
  'Carto Voyager': lyrCartoVygr,
  'Carto Positron': lyrCartoPstrn,
};

var baseLayers2 = {
  'Stadia Alidade Smooth Dark': lyrStadiaAliSmthDrk2,
  'Carto Dark Matter': lyrCartoDrkMttr2,
  'Carto Voyager': lyrCartoVygr2,
  'Carto Positron': lyrCartoPstrn2,
};


//Add Baselayers to Control
var addBaseLyrs = L.control.layers(baseLayers).addTo(map1);



var addBaseLyrs2 = L.control
  .layers(baseLayers2, null, {
    position: 'topleft',
  })
  .addTo(map2);
//Default Baselayers
var defaultBaseLyr = lyrCartoDrkMttr.addTo(map1);
var defaultBaseLyr2 = lyrCartoVygr2.addTo(map2);

//COPIED OVER -- Giving baselayers a custom ID to reference later: http://jsfiddle.net/nathansnider/6aLmzwmg/
var groups = L.layerGroup([lyrCartoDrkMttr, lyrCartoVygr, lyrStadiaAliSmthDrk, lyrCartoPstrn]);
var tempID = 1;
var baseLyrId = groups.eachLayer(function (layer) {
  layer.layerID = tempID;
  tempID += 1;
});

var groups2 = L.layerGroup([lyrCartoDrkMttr2, lyrCartoVygr2, lyrCartoPstrn2, lyrStadiaAliSmthDrk2]);
var tempID2 = 5;
var baselyrId2 = groups2.eachLayer(function (layer) {
  layer.layerID2 = tempID2;
  tempID2 += 1;
});

var sidebar_left = L.control
  .sidebar({
    container: 'sidebar',
    position: 'left',
  })
  .addTo(map1)
  .open('home'); //default tab that is open

var sidebar_right = L.control
  .sidebar({
    container: 'sidebar',
    position: 'right',
  })
  .addTo(map2)
  .open('home');
export {
  defaultBaseLyr,
  defaultBaseLyr2,
  addBaseLyrs,
  addBaseLyrs2,
  baseLyrId,
  baselyrId2,
  sidebar_left,
  sidebar_right,
};
