import { brew, map1, formatter, format } from './../foundation.js';
import {slctMet} from './keys-dropdown.js';

var lgndMet;

function selectLegendTxt() {
  switch (slctMet) {
    case 'jbrt':
      lgndMet = 'Jobs Retained';
      break;
    case 'lnamt':
      lgndMet = 'Loan Amount';
      break;
    case 'cnt':
      lgndMet = 'Business Count';
      break;
  }
}

//****************** LEGEND ******************

//from classybrew
var legend = L.control({
  position: 'bottomright',
});
var addLegend = (legend.onAdd = function (map1) {
  var div = L.DomUtil.create('div', 'info legend'),
    percents = brew.getBreaks(),
    labels = [],
    from,
    to,
    header;

    header = '<div id="lgndtxt">'+lgndMet+'</div>';
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < percents.length; i++) {
    from = Math.floor(percents[i]);
    var fromclr = Math.floor(percents[i + 1]);
    to = Math.ceil(percents[i + 1]);
    var fromFrmt;
    var toFrmt;
    if (slctMet == 'lnamt') {
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
  div.innerHTML = header + labels.join('<br>');
  return div;
});

function addLegendMap() {
  selectLegendTxt();
  legend.addTo(map1);
}


export {addLegend, legend, addLegendMap };
