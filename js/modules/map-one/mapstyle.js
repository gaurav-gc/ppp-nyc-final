import { map1, brew } from './../foundation.js';
import { infoKey, slctMap,slctNTAMap } from './keys-dropdown.js';
import { highlightFeature, resetHighlight } from './info-control.js';
import { addLegendMap } from './legend.js';
import {$valueOnChange} from './../input-spinner.js';

//********************* CREATING LAYERS FROM GEOJSON -- COPIED OVER *******************************************************************
//SEARCH BAR
var arZCTA = [];
var arCongDist = [];
var arBoro = [];
var arNTA = [];
var arNTABK = [];
var arNTAQN = [];
var arNTAMN = [];
var arNTABX = [];
var arNTASI = [];

function onEachZCTAFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arZCTA.push(att.zcta.toString());
}

function onEachCongDistFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arCongDist.push(att.congdist.toString());
}

function onEachBoroFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arBoro.push(att.boro.toString());
}

function onEachNTABKFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arNTABK.push(att.ntaBK.toString());
}

function onEachNTAFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arNTA.push(att.nta.toString());
}

function onEachNTAQNFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arNTAQN.push(att.ntaQN.toString());
}

function onEachNTAMNFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arNTAMN.push(att.ntaMN.toString());
}

function onEachNTABXFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arNTABX.push(att.ntaBX.toString());
}

function onEachNTASIFeature(feature, layer) {
  var att = feature.properties;
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
  arNTASI.push(att.ntaSI.toString());
}

var lyrBoro = L.geoJSON.ajax('./data/geojson/boro.geojson', {
  onEachFeature: onEachBoroFeature,
})
var lyrCongDist = L.geoJSON.ajax('./data/geojson/congdist.geojson', {
  onEachFeature: onEachCongDistFeature,
});

var lyrZCTA = L.geoJSON.ajax('./data/geojson/zcta.geojson', {
  onEachFeature: onEachZCTAFeature,
});

var lyrNTA = L.geoJSON.ajax('./data/geojson/nta.geojson', {
  onEachFeature: onEachNTAFeature,
});

var lyrNTABK = L.geoJSON.ajax('./data/geojson/ntaBK.geojson', {
  onEachFeature: onEachNTABKFeature,
});

var lyrNTAQN = L.geoJSON.ajax('./data/geojson/ntaQN.geojson', {
  onEachFeature: onEachNTAQNFeature,
});

var lyrNTAMN = L.geoJSON.ajax('./data/geojson/ntaMN.geojson', {
  onEachFeature: onEachNTAMNFeature,
});

var lyrNTABX = L.geoJSON.ajax('./data/geojson/ntaBX.geojson', {
  onEachFeature: onEachNTABXFeature,
});

var lyrNTASI = L.geoJSON.ajax('./data/geojson/ntaSI.geojson', {
  onEachFeature: onEachNTASIFeature,
});




//Sets color code for each layer
//source: https://stackoverflow.com/questions/32151704/addeventlistener-is-not-a-function
var clrCde, classifyCde, numCde;
var btnClrs = document.getElementsByClassName('chngClr');
var btnClassify = document.getElementsByClassName('chngClassify');
var btnNumClasses = document.getElementsByClassName('chngNumClasses');

function chngColor() {
  clrCde = $(this).attr('value');
  switch (slctMap) {
    case 'congdist':
      lyrCongDist.setStyle(styleCongDist).addTo(map1);
      addLegendMap();
      break;
    case 'zcta':
      lyrZCTA.setStyle(styleZCTA).addTo(map1);
      addLegendMap();
      break;
    case 'boro':
      lyrBoro.setStyle(styleBoro).addTo(map1);
      addLegendMap();
      break;
    case 'nta':
      switch(slctNTAMap) {
        case 'nta':
          lyrNTA.setStyle(styleNTA).addTo(map1);
          addLegendMap();
          break;
        case 'ntaBK':
          lyrNTABK.setStyle(styleNTABK).addTo(map1);
          addLegendMap();
          break;
        case 'ntaQN':
          lyrNTAQN.setStyle(styleNTAQN).addTo(map1);
          addLegendMap();
          break;
        case 'ntaBX':
          lyrNTABX.setStyle(styleNTABX).addTo(map1);
          addLegendMap();
          break;
        case 'ntaMN':
          lyrNTAMN.setStyle(styleNTAMN).addTo(map1);
          addLegendMap();
          break;
        case 'ntaSI':
          lyrNTASI.setStyle(styleNTASI).addTo(map1);
          addLegendMap();
          break;
      }
  }
}

$('.chngClassify').change(function() {
    if($(this).prop("checked")) {
      classifyCde = "equal_interval";
    } else {
      classifyCde= "quantile";
    };
  });
 
function chngClassify() {
  switch (slctMap) {
    case 'congdist':
      lyrCongDist.setStyle(styleCongDist).addTo(map1);
      addLegendMap();
      break;
    case 'zcta':
      lyrZCTA.setStyle(styleZCTA).addTo(map1);
      addLegendMap();
      break;
    case 'boro':
      lyrBoro.setStyle(styleBoro).addTo(map1);
      addLegendMap();
      break;
    case 'nta':
      switch(slctNTAMap) {
        case 'nta':
          lyrNTA.setStyle(styleNTA).addTo(map1);
          addLegendMap();
          break;
        case 'ntaBK':
          lyrNTABK.setStyle(styleNTABK).addTo(map1);
          addLegendMap();
          break;
        case 'ntaQN':
          lyrNTAQN.setStyle(styleNTAQN).addTo(map1);
          addLegendMap();
          break;
        case 'ntaBX':
          lyrNTABX.setStyle(styleNTABX).addTo(map1);
          addLegendMap();
          break;
        case 'ntaMN':
          lyrNTAMN.setStyle(styleNTAMN).addTo(map1);
          addLegendMap();
          break;
        case 'ntaSI':
          lyrNTASI.setStyle(styleNTASI).addTo(map1);
          addLegendMap();
          break;
      }
  }
}

function chngNumClasses() {
  numCde = $valueOnChange;
  switch (slctMap) {
    case 'congdist':
      lyrCongDist.setStyle(styleCongDist).addTo(map1);
      addLegendMap();
      break;
    case 'zcta':
      lyrZCTA.setStyle(styleZCTA).addTo(map1);
      addLegendMap();
      break;
    case 'boro':
      lyrBoro.setStyle(styleBoro).addTo(map1);
      addLegendMap();
      break;
    case 'nta':
      switch(slctNTAMap) {
        case 'nta':
          lyrNTA.setStyle(styleNTA).addTo(map1);
          addLegendMap();
          break;
        case 'ntaBK':
          lyrNTABK.setStyle(styleNTABK).addTo(map1);
          addLegendMap();
          break;
        case 'ntaQN':
          lyrNTAQN.setStyle(styleNTAQN).addTo(map1);
          addLegendMap();
          break;
        case 'ntaBX':
          lyrNTABX.setStyle(styleNTABX).addTo(map1);
          addLegendMap();
          break;
        case 'ntaMN':
          lyrNTAMN.setStyle(styleNTAMN).addTo(map1);
          addLegendMap();
          break;
        case 'ntaSI':
          lyrNTASI.setStyle(styleNTASI).addTo(map1);
          addLegendMap();
          break;
      }
  }
}
//Starting Styles
numCde = 3;
classifyCde = 'equal_interval';
clrCde = 'BuGn';

for (var i = 0; i < btnClrs.length; i++) {
  btnClrs[i].addEventListener('click', chngColor);
}

$('.chngClassify').change(chngClassify)

$('#numClass').change(chngNumClasses);

/*
     *************************************************
     BOROUGH - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
     *************************************************
  */

 function styleBoro(feature) {
  var values = [];
  for (var i = 0; i < boro.features.length; i++) {
    if (boro.features[i].properties[infoKey] == null) continue;
    values.push(boro.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.setNumClasses(numCde);
  brew.classify(classifyCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}

/*
     *************************************************
     CD - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
     *************************************************
  */
function styleCongDist(feature) {
  var values = [];
  for (var i = 0; i < congdist.features.length; i++) {
    if (congdist.features[i].properties[infoKey] == null) continue;
    values.push(congdist.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde, numCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}

/*
  **************************************************
  ZIP - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
  **************************************************
  */
function styleZCTA(feature) {
  var values = [];
  for (var i = 0; i < zcta.features.length; i++) {
    if (zcta.features[i].properties[infoKey] == null) continue;
    values.push(zcta.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde, numCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}

/*
  **************************************************
  ZIP - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
  **************************************************
  */
 function styleNTABK(feature) {
  var values = [];
  for (var i = 0; i < ntaBK.features.length; i++) {
    if (ntaBK.features[i].properties[infoKey] == null) continue;
    values.push(ntaBK.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde, numCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}

/*
  **************************************************
  ZIP - BUSINESS TYPE - LOAN AMOUNT - CORPORATION 
  **************************************************
  */
 function styleNTA(feature) {
  var values = [];
  for (var i = 0; i < nta.features.length; i++) {
    if (nta.features[i].properties[infoKey] == null) continue;
    values.push(nta.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde, numCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}


function styleNTAQN(feature) {
  var values = [];
  for (var i = 0; i < ntaQN.features.length; i++) {
    if (ntaQN.features[i].properties[infoKey] == null) continue;
    values.push(ntaQN.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde, numCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}

function styleNTAMN(feature) {
  var values = [];
  for (var i = 0; i < ntaMN.features.length; i++) {
    if (ntaMN.features[i].properties[infoKey] == null) continue;
    values.push(ntaMN.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde, numCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}

function styleNTABX(feature) {
  var values = [];
  for (var i = 0; i < ntaBX.features.length; i++) {
    if (ntaBX.features[i].properties[infoKey] == null) continue;
    values.push(ntaBX.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde, numCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}

function styleNTASI(feature) {
  var values = [];
  for (var i = 0; i < ntaSI.features.length; i++) {
    if (ntaSI.features[i].properties[infoKey] == null) continue;
    values.push(ntaSI.features[i].properties[infoKey]);
  }
  brew.setSeries(values);
  brew.classify(classifyCde, numCde);
  brew.setColorCode(clrCde);
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: brew.getColorInRange(feature.properties[infoKey]),
  };
}


export {
  arCongDist,
  lyrCongDist,
  lyrZCTA,
  lyrBoro,
  lyrNTA,
  lyrNTABK,
  lyrNTAQN,
  lyrNTAMN,
  lyrNTABX,
  lyrNTASI,
  clrCde,
  classifyCde,
  numCde,
  btnClrs,
  btnClassify,
  btnNumClasses,
  chngColor,
  chngClassify,
  chngNumClasses,
  styleCongDist,
  styleZCTA,
  styleBoro, 
  styleNTA,
  styleNTABK, 
  styleNTAQN,
  styleNTAMN, 
  styleNTABX,
  styleNTASI
};
