/***************************************** MAP 2: LEGEND, INFO CONTROL, SELECTMAP ****************************** */
//from classybrew
var legend2 = L.control({
  position: 'bottomleft',
});
legend2.onAdd = function (map2) {
  var div = L.DomUtil.create('div', 'info legend'),
    percents = brew.getBreaks(),
    labels = [],
    from,
    to; //Not sure What this is

  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < percents.length; i++) {
    from = percents[i];
    fromclr = percents[i + 1];
    to = percents[i + 1];
    var fromFrmt;
    var toFrmt;
    if (slctMet2 == 'lnAmt2') {
      fromFrmt = formatter.format(from);
      toFrmt = formatter.format(to);
    } else {
      fromFrmt = format(from);
      toFrmt = format(to);
    }
    if (to) {
      labels.push(
        '<i style="background:' +
          brew.getColorInRange(fromclr) +
          '"></i> ' +
          fromFrmt +
          ' &ndash; ' +
          toFrmt
      );
    }
  }

  div.innerHTML = labels.join('<br>');
  return div;
};
//Removes legend when a new category is selected
function removeLegend2() {
  map2.removeControl(legend2);
}
$('select#slctCat2').change(removeLegend2);

//****************** MAP2 INFO CONTROL **********************************

//******** MAP 2 INFO CONTROL */
// control that shows state info on hover
var info2 = L.control({
  position: 'topleft',
});
info2.onAdd = function (map2) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};

function selectInfoMet2() {
  infoMet2 = $('#slctMet2:visible').val();
  switch (slctMet2) {
    case 'jbRt2':
      infoMet2 = 'Jobs Retained';
      break;
    case 'lnAmt2':
      infoMet2 = 'Loan Amount';
      break;
    case 'cnt2':
      infoMet2 = 'Business Count';
      break;
  }
}
$('select[name="map2"]').change(selectInfoMet2);

function selectInfoMap2() {
  infoMap2 = $('#slctMap2:visible').val();
  switch (slctMap2) {
    case 'cd2':
      infoMapTxt2 = 'Congressional District';
      infoMapNum2 = 'congdist';
      break;
    case 'zip2':
      infoMapTxt2 = 'Zip Code';
      infoMapNum2 = 'ZIPCODE';
      break;
  }
}
$('select[name="map2"]').change(selectInfoMap2);

// method that we will use to update the control based on feature properties passed
info2.update = function (props) {
  let i = 0;
  map2.eachLayer(function () {
    i += 1;
  });
  var infoKeyFrmt2;
  if (i > 1) {
    if (slctMet2 == 'lnAmt2') {
      props ? (infoKeyFrmt2 = formatter.format(props[infoKey2])) : '';
    } else {
      props ? (infoKeyFrmt2 = format(props[infoKey2])) : '';
    }
    this._div.innerHTML = props
      ? '<h6>' +
        infoMet2 +
        '</h6>' +
        '<b>' +
        infoKeyFrmt2 +
        '</b><br />' +
        infoMapTxt2 +
        ' :' +
        props[infoMapNum2]
      : '<h5>Hover over a ' + infoMapTxt2 + '</h5>';
  } else {
    this._div.innerHTML = '<h6>Select from the Dropdown to Create Map</h6>';
  }
};

function resetInfo2() {
  info2.update();
}
$('select[name="map2"]').change(resetInfo2);

info2.addTo(map2);

function highlightFeature2(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  info2.update(layer.feature.properties);
}

function resetHighlight2(e) {
  var layer = e.target;
  layer.setStyle({
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  });
  info2.update();
}

function onEachFeature2(feature, layer) {
  layer.on({
    mouseover: highlightFeature2,
    mouseout: resetHighlight2,
  });
}

//****************** SELECT MAP2 **********************************
