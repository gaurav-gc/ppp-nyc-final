import { map2, formatter, format} from './../foundation.js';
import {
  slctCat2,
  slctMet2,
  slctAttr2,
  slctMap2,
  slctNTAMap2,
  infoKey2,
} from './keys-dropdown-two.js';
/****************** MAP2 INFO CONTROL **********************************
//******** MAP 2 INFO CONTROL source: https://leafletjs.com/examples/choropleth/example.html ********************************************************************/
// control that shows state info2 on hover
var info2 = L.control({position:'topleft'});
var infoMet2, infoMapTxt2, infoMapNum2;
function selectInfoMet2() {
  switch (slctMet2) {
    case 'jbrt':
      infoMet2 = 'Jobs Retained';
      break;
    case 'lnamt':
      infoMet2 = 'Loan Amount';
      break;
    case 'cnt':
      infoMet2 = 'Business Count';
      break;
  }
  switch (slctMap2) {
    case 'congdist':
      infoMapTxt2 = 'Congressional District';
      infoMapNum2 = 'congdist';
      break;
    case 'zcta':
      infoMapTxt2 = 'Zip Code Tabulation Area';
      infoMapNum2 = 'zcta';
      break;
    case 'boro':
      infoMapTxt2 = 'Borough';
      infoMapNum2 = 'boro';
      break;   
    case 'nta':
      switch(slctNTAMap2) {
        case 'nta':
          infoMapTxt2 = 'Neighborhood Tabulation Area';
          infoMapNum2 = 'nta';
          break; 
        case 'ntaBK':
          infoMapTxt2 = 'Neighborhood Tabulation Area - BK';
          infoMapNum2 = 'ntaBK';
          break;   
        case 'ntaQN':
          infoMapTxt2 = 'Neighborhood Tabulation Area - QN';
          infoMapNum2 = 'ntaQN';
          break; 
        case 'ntaMN':
          infoMapTxt2 = 'Neighborhood Tabulation Area - MN';
          infoMapNum2 = 'ntaMN';
          break;   
        case 'ntaBX':
          infoMapTxt2 = 'Neighborhood Tabulation Area - BX';
          infoMapNum2 = 'ntaQN';
          break; 
        case 'ntaSI':
          infoMapTxt2 = 'Neighborhood Tabulation Area - SI';
          infoMapNum2 = 'ntaSI';
          break; 
      }
  }
}

info2.onAdd = function (map2) {
  this._div = L.DomUtil.create('div', 'info2'); // create a div with a class "info2"
  this.update();
  return this._div;
};
// method that we will use to update the control based on feature properties passed

info2.update = function (props) {
  // originally this counted the # of layers of the visible map
  //https://gis.stackexchange.com/questions/264921/getting-the-number-of-layers-in-leaflet
  let i = 0;
  map2.eachLayer(function () {
    i += 1;
  });
  var infoKey2Frmt;
  //content for Info Control
  if (slctCat2 && slctMet2 && slctAttr2 && slctMap2 && i > 1) {
    if (slctMet2 == 'lnamt') {
      props ? (infoKey2Frmt = formatter.format(props[infoKey2])) : '';
    } else {
      props ? (infoKey2Frmt = format(props[infoKey2])) : '';
    }
    this._div.innerHTML = props
      ? '<h6>' +
        infoMet2 +
        '</h6>' +
        '<b>' +
        infoKey2Frmt +
        '</b><br />' +
        infoMapTxt2 +
        ': ' +
        props[infoMapNum2]
      : '<h5>Hover over a ' + infoMapTxt2 + '</h5>';
  } else {
    this._div.innerHTML = '<h6 style="text-align: center">Select from the Dropdown<br>to Create Map</h6>';
  }
};

//Info Control added to the map
var addInfoControl2 = info2.addTo(map2);

//Resets info2 Control
function resetInfo2() {
  info2.update();
}
var srchVar2 = [];
function highlightFeature2(e) {
  var layer = e.target;
  if (srchVar2.includes(layer.feature.properties[infoMapNum2])) {
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
  info2.update(layer.feature.properties);
}

function resetHighlight2(e) {
  var layer = e.target;
  if (srchVar2.includes(layer.feature.properties[infoMapNum2])) {
  } else {
    layer.setStyle({
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    });
  }
  info2.update();
}

export {
  addInfoControl2,
  selectInfoMet2,
  resetInfo2,
  highlightFeature2,
  resetHighlight2, infoMet2, infoMapTxt2, infoMapNum2
};
