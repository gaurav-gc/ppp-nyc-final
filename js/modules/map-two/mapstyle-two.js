import { map2, brew } from './../foundation.js';
import { infoKey2, slctMap2,slctNTAMap2 } from './keys-dropdown-two.js';
import { highlightFeature2, resetHighlight2 } from './info-control-two.js';
import { addLegendMap2 } from './legend-two.js';
import {$valueOnChange2} from './../input-spinner.js'

//********************* CREATING LAYERS FROM GEOJSON -- COPIED OVER *******************************************************************
//SEARCH BAR
var arZCTA2 = [];
var arCongDist2 = [];
var arBoro2 = [];
var arNTA2 = [];
var arNTABK2 = [];
var arNTAQN2 = [];
var arNTAMN2 = [];
var arNTABX2 = [];
var arNTASI2 = [];

function onEachZCTAFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arZCTA2.push(att.zcta.toString());
}

function onEachCongDistFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arCongDist2.push(att.congdist.toString());
}

function onEachBoroFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arBoro2.push(att.boro.toString());
}

function onEachNTABKFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arNTABK2.push(att.ntaBK.toString());
}

function onEachNTAFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arNTA2.push(att.nta.toString());
}

function onEachNTAQNFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arNTAQN2.push(att.ntaQN.toString());
}

function onEachNTAMNFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arNTAMN2.push(att.ntaMN.toString());
}

function onEachNTABXFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arNTABX2.push(att.ntaBX.toString());
}

function onEachNTASIFeature2(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
  arNTASI2.push(att.ntaSI.toString());
}

var lyrBoro2 = L.geoJSON.ajax('../data/boro.geojson', {
  onEachFeature: onEachBoroFeature2,
})
var lyrCongDist2 = L.geoJSON.ajax('../data/congdist.geojson', {
  onEachFeature: onEachCongDistFeature2,
});

var lyrZCTA2 = L.geoJSON.ajax('../data/zcta.geojson', {
  onEachFeature: onEachZCTAFeature2,
});

var lyrNTA2 = L.geoJSON.ajax('../data/nta.geojson', {
  onEachFeature: onEachNTAFeature2,
});

var lyrNTABK2 = L.geoJSON.ajax('../data/ntaBK.geojson', {
  onEachFeature: onEachNTABKFeature2,
});

var lyrNTAQN2 = L.geoJSON.ajax('../data/ntaQN.geojson', {
  onEachFeature: onEachNTAQNFeature2,
});

var lyrNTAMN2 = L.geoJSON.ajax('../data/ntaMN.geojson', {
  onEachFeature: onEachNTAMNFeature2,
});

var lyrNTABX2 = L.geoJSON.ajax('../data/ntaBX.geojson', {
  onEachFeature: onEachNTABXFeature2,
});

var lyrNTASI2 = L.geoJSON.ajax('../data/ntaSI.geojson', {
  onEachFeature: onEachNTASIFeature2,
});


//Sets color code for each layer
//source: https://stackoverflow.com/questions/32151704/addeventlistener-is-not-a-function
var clrCde2, classifyCde2, numCde2;
var btnClrs2 = document.getElementsByClassName('chngClr2');
var btnClassify2 = document.getElementsByClassName('chngClassify2');
var btnNumClasses2 = document.getElementsByClassName('chngNumClasses2');

function chngColor2() {
  clrCde2 = $(this).attr('value');
  switch (slctMap2) {
    case 'congdist':
      lyrCongDist2.setStyle(styleCongDist2).addTo(map2);
      addLegendMap2();
      break;
    case 'zcta':
      lyrZCTA2.setStyle(styleZCTA2).addTo(map2);
      addLegendMap2();
      break;
    case 'boro':
      lyrBoro2.setStyle(styleBoro2).addTo(map2);
      addLegendMap2();
      break;
    case 'nta':
      switch(slctNTAMap2) {
        case 'nta':
          lyrNTA2.setStyle(styleNTA2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaBK':
          lyrNTABK2.setStyle(styleNTABK2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaQN':
          lyrNTAQN2.setStyle(styleNTAQN2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaBX':
          lyrNTABX2.setStyle(styleNTABX2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaMN':
          lyrNTAMN2.setStyle(styleNTAMN2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaSI':
          lyrNTASI2.setStyle(styleNTASI2).addTo(map2);
          addLegendMap2();
          break;
      }
  }
}

$('.chngClassify2').change(function() {
  if($(this).prop("checked")) {
    classifyCde2 = "equal_interval";
  } else {
    classifyCde2= "quantile";
  };
});
function chngClassify2() {
  switch (slctMap2) {
    case 'congdist':
      lyrCongDist2.setStyle(styleCongDist2).addTo(map2);
      addLegendMap2();
      break;
    case 'zcta':
      lyrZCTA2.setStyle(styleZCTA2).addTo(map2);
      addLegendMap2();
      break;
    case 'boro':
      lyrBoro2.setStyle(styleBoro2).addTo(map2);
      addLegendMap2();
      break;
    case 'nta':
      switch(slctNTAMap2) {
        case 'nta':
          lyrNTA2.setStyle(styleNTA2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaBK':
          lyrNTABK2.setStyle(styleNTABK2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaQN':
          lyrNTAQN2.setStyle(styleNTAQN2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaBX':
          lyrNTABX2.setStyle(styleNTABX2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaMN':
          lyrNTAMN2.setStyle(styleNTAMN2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaSI':
          lyrNTASI2.setStyle(styleNTASI2).addTo(map2);
          addLegendMap2();
          break;
      }
  }
}

function chngNumClasses2() {
  numCde2 = $valueOnChange2;
  switch (slctMap2) {
    case 'congdist':
      lyrCongDist2.setStyle(styleCongDist2).addTo(map2);
      addLegendMap2();
      break;
    case 'zcta':
      lyrZCTA2.setStyle(styleZCTA2).addTo(map2);
      addLegendMap2();
      break;
    case 'boro':
      lyrBoro2.setStyle(styleBoro2).addTo(map2);
      addLegendMap2();
      break;
    case 'nta':
      switch(slctNTAMap2) {
        case 'nta':
          lyrNTA2.setStyle(styleNTA2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaBK':
          lyrNTABK2.setStyle(styleNTABK2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaQN':
          lyrNTAQN2.setStyle(styleNTAQN2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaBX':
          lyrNTABX2.setStyle(styleNTABX2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaMN':
          lyrNTAMN2.setStyle(styleNTAMN2).addTo(map2);
          addLegendMap2();
          break;
        case 'ntaSI':
          lyrNTASI2.setStyle(styleNTASI2).addTo(map2);
          addLegendMap2();
          break;
      }
  }
}
//Starting Styles
numCde2 = 3;
classifyCde2 = 'equal_interval';
clrCde2 = 'BuGn';


for (var i = 0; i < btnClrs2.length; i++) {
  btnClrs2[i].addEventListener('click', chngColor2);
}

$('.chngClassify2').change(chngClassify2);

$('#numClass2').change(chngNumClasses2);

/*
     *************************************************
     BOROUGH - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
     *************************************************
  */
 function styleBoro2(feature) {
  var values = [];
  for (var i = 0; i < boro.features.length; i++) {
    if (boro.features[i].properties[infoKey2] == null) continue;
    values.push(boro.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.setNumClasses(numCde2);
  brew.classify(classifyCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}

/*
     *************************************************
     CD - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
     *************************************************
  */
function styleCongDist2(feature) {
  var values = [];
  for (var i = 0; i < congdist.features.length; i++) {
    if (congdist.features[i].properties[infoKey2] == null) continue;
    values.push(congdist.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde2, numCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}

/*
  **************************************************
  ZIP - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
  **************************************************
  */
function styleZCTA2(feature) {
  var values = [];
  for (var i = 0; i < zcta.features.length; i++) {
    if (zcta.features[i].properties[infoKey2] == null) continue;
    values.push(zcta.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde2, numCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}

/*
  **************************************************
  ZIP - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
  **************************************************
  */
 function styleNTABK2(feature) {
  var values = [];
  for (var i = 0; i < ntaBK.features.length; i++) {
    if (ntaBK.features[i].properties[infoKey2] == null) continue;
    values.push(ntaBK.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde2, numCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}

/*
  **************************************************
  ZIP - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
  **************************************************
  */
 function styleNTA2(feature) {
  var values = [];
  for (var i = 0; i < nta.features.length; i++) {
    if (nta.features[i].properties[infoKey2] == null) continue;
    values.push(nta.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde2, numCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}


function styleNTAQN2(feature) {
  var values = [];
  for (var i = 0; i < ntaQN.features.length; i++) {
    if (ntaQN.features[i].properties[infoKey2] == null) continue;
    values.push(ntaQN.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde2, numCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}

function styleNTAMN2(feature) {
  var values = [];
  for (var i = 0; i < ntaMN.features.length; i++) {
    if (ntaMN.features[i].properties[infoKey2] == null) continue;
    values.push(ntaMN.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde2, numCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}

function styleNTABX2(feature) {
  var values = [];
  for (var i = 0; i < ntaBX.features.length; i++) {
    if (ntaBX.features[i].properties[infoKey2] == null) continue;
    values.push(ntaBX.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde2, numCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}

function styleNTASI2(feature) {
  var values = [];
  for (var i = 0; i < ntaSI.features.length; i++) {
    if (ntaSI.features[i].properties[infoKey2] == null) continue;
    values.push(ntaSI.features[i].properties[infoKey2]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde2, numCde2);
  brew.setColorCode(clrCde2);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey2]),
  };
}


export {
  arCongDist2,
  lyrCongDist2,
  lyrZCTA2,
  lyrBoro2,
  lyrNTA2,
  lyrNTABK2,
  lyrNTAQN2,
  lyrNTAMN2,
  lyrNTABX2,
  lyrNTASI2,
  clrCde2,
  classifyCde2,
  numCde2,
  btnClrs2,
  btnClassify2,
  btnNumClasses2,
  chngColor2,
  chngClassify2,
  chngNumClasses2,
  styleCongDist2,
  styleZCTA2,
  styleBoro2, 
  styleNTA2,
  styleNTABK2, 
  styleNTAQN2,
  styleNTAMN2, 
  styleNTABX2,
  styleNTASI2
};
