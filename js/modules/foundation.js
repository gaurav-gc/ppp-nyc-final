import { legend } from "./map-one/legend.js";

var map1 = L.map('map1', {
  center: [40.7128, -74.006],
  zoom: 10.5,
  maxZoom: 12.25,
  minZoom: 10,
  zoomSnap: .25,
  zoomControl: false,
  wheelPxPerZoomLevel: 100,
  zoomDelta: .25,
  dragging: true,
  doubleClickZoom: false,
  attributionControl: false,
});

var zoomHome = L.Control.zoomHome({
  position: 'topright',
  zoomHomeTitle: 'NYC',
  homeCoordinates: [40.7128, -74.006],
  homeZoom: 10.5,

});
zoomHome.addTo(map1);

//Print options
L.control.browserPrint({
  printModes: ["Portrait", "Landscape"]
}).addTo(map1);

map1.on("browser-print-start", function(e){
  legend.addTo(e.printMap);
})
/*
//Social Share
L.control.social({
  position: 'topleft',
}).addTo(map1);
*/
var map2 = L.map('map2', {
  center: [40.7128, -74.006],
  zoom: 10.5,
  maxZoom: 12.25,
  minZoom: 10,
  zoomSnap: .25,
  zoomControl: false,
  wheelPxPerZoomLevel: 100,
  zoomDelta: .25,
  dragging: true,
  doubleClickZoom: false,
  attributionControl: false,
});

var zoomHome2 = L.Control.zoomHome({
  position: 'topleft',
  zoomHomeTitle: 'NYC',
  homeCoordinates: [40.7128, -74.006],
  homeZoom: 10.5,

});
zoomHome2.addTo(map2);

//Classy Brew
var brew = new classyBrew();

// num -> currency source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

// source: https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format/19840881
const format = (num) =>
  parseInt(num).toLocaleString();  
//String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');

export { map1, map2, brew, formatter, format};
