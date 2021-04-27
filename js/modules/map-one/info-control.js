import { map1, formatter, format} from './../foundation.js';
import {
  slctCat,
  slctMet,
  slctAttr,
  slctMap,
  slctNTAMap,
  infoKey,
} from './keys-dropdown.js';
/****************** MAP1 INFO CONTROL **********************************
//******** MAP 1 INFO CONTROL source: https://leafletjs.com/examples/choropleth/example.html ********************************************************************/
// control that shows state info on hover
var info = L.control();
var infoMet, infoMapTxt, infoMapNum;
function selectInfoMet() {
  switch (slctMet) {
    case 'jbrt':
      infoMet = 'Jobs Retained';
      break;
    case 'lnamt':
      infoMet = 'Loan Amount';
      break;
    case 'cnt':
      infoMet = 'Business Count';
      break;
  }
  switch (slctMap) {
    case 'congdist':
      infoMapTxt = 'Congressional District';
      infoMapNum = 'congdist';
      break;
    case 'zcta':
      infoMapTxt = 'Zip Code Tabulation Area';
      infoMapNum = 'zcta';
      break;
    case 'boro':
      infoMapTxt = 'Borough';
      infoMapNum = 'boro';
      break;   
    case 'nta':
      switch(slctNTAMap) {
        case 'nta':
          infoMapTxt = 'Neighborhood Tabulation Area';
          infoMapNum = 'nta';
          break; 
        case 'ntaBK':
          infoMapTxt = 'Neighborhood Tabulation Area - BK';
          infoMapNum = 'ntaBK';
          break;   
        case 'ntaQN':
          infoMapTxt = 'Neighborhood Tabulation Area - QN';
          infoMapNum = 'ntaQN';
          break; 
        case 'ntaMN':
          infoMapTxt = 'Neighborhood Tabulation Area - MN';
          infoMapNum = 'ntaMN';
          break;   
        case 'ntaBX':
          infoMapTxt = 'Neighborhood Tabulation Area - BX';
          infoMapNum = 'ntaQN';
          break; 
        case 'ntaSI':
          infoMapTxt = 'Neighborhood Tabulation Area - SI';
          infoMapNum = 'ntaSI';
          break; 
      }
  }
}

info.onAdd = function (map1) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};
// method that we will use to update the control based on feature properties passed

info.update = function (props) {
  // originally this counted the # of layers of the visible map
  //https://gis.stackexchange.com/questions/264921/getting-the-number-of-layers-in-leaflet
  let i = 0;
  map1.eachLayer(function () {
    i += 1;
  });
  var infoKeyFrmt;
  //content for Info Control
  if (slctCat && slctMet && slctAttr && slctMap && i > 1) {
    if (slctMet == 'lnamt') {
      props ? (infoKeyFrmt = formatter.format(props[infoKey])) : '';
    } else {
      props ? (infoKeyFrmt = format(props[infoKey])) : '';
    }
    this._div.innerHTML = props
      ? '<h6>' +
        infoMet +
        '</h6>' +
        '<b>' +
        infoKeyFrmt +
        '</b><br />' +
        infoMapTxt +
        ': ' +
        props[infoMapNum]
      : '<h5>Hover over a ' + infoMapTxt + '</h5>';
  } else {
    this._div.innerHTML = '<h6 style="text-align: center">Select from the Dropdown<br>to Create Map</h6>';
  }
};

//Info Control added to the map
var addInfoControl = info.addTo(map1);

//Resets info Control
function resetInfo() {
  info.update();
}
var srchVar = [];
function highlightFeature(e) {
  var layer = e.target;
  if (srchVar.includes(layer.feature.properties[infoMapNum])) {
    console.log('HEYyyyyy');
  } else {
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }
  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  var layer = e.target;
  if (srchVar.includes(layer.feature.properties[infoMapNum])) {
    console.log('Yooooo');
  } else {
    layer.setStyle({
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    });
  }
  info.update();
}

export {
  addInfoControl,
  selectInfoMet,
  resetInfo,
  highlightFeature,
  resetHighlight, infoMet, infoMapTxt, infoMapNum
};
