import { brew, map2, formatter, format } from './../foundation.js';
import { slctMet2 } from './keys-dropdown-two.js';

var lgndMet2;

function selectLegendTxt2() {
  switch (slctMet2) {
    case 'jbrt':
      lgndMet2 = 'Jobs Retained';
      break;
    case 'lnamt':
      lgndMet2 = 'Loan Amount';
      break;
    case 'cnt':
      lgndMet2 = 'Business Count';
      break;
  }
}

//****************** LEGEND ******************
//from classybrew
var legend2 = L.control({
  position: 'bottomleft',
});
var addLegend2 = (legend2.onAdd = function (map2) {
  var div = L.DomUtil.create('div', 'info2 legend2'),
    percents = brew.getBreaks(),
    labels = [],
    from,
    to,
    header;
    header = '<div id="lgndtxt">'+lgndMet2+'</div>';
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < percents.length; i++) {
    from = Math.floor(percents[i]);
    var fromclr = Math.floor(percents[i + 1]);
    to = Math.ceil(percents[i + 1]);
    var fromFrmt;
    var toFrmt;
    if (slctMet2 == 'lnamt') {
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

function addLegendMap2() {
  selectLegendTxt2();
  legend2.addTo(map2);
}


export {addLegend2, legend2, addLegendMap2 };
