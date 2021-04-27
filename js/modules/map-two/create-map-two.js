import { map2 } from './../foundation.js';
import { slctMap2, slctCat2, slctAttr2, slctMet2, slctNTAMap2, slctNTARatio2 } from './keys-dropdown-two.js';
import { selectInfoMet2, resetInfo2 } from './info-control-two.js';
import {
  lyrCongDist2,
  lyrZCTA2,
  lyrBoro2,
  lyrNTA2,
  lyrNTABK2,
  lyrNTAQN2,
  lyrNTAMN2,
  lyrNTABX2,
  lyrNTASI2,
  styleCongDist2,
  styleZCTA2,
  styleBoro2, 
  styleNTA2,
  styleNTABK2,
  styleNTAQN2,
  styleNTABX2,
  styleNTAMN2,
  styleNTASI2,
} from './mapstyle-two.js';
import { addLegendMap2, legend2 } from './legend-two.js';
//****************** SELECT MAP1 **********************************
function selectMap2() {
  //Removes Layer from map2 each time function is run. Source: https://stackoverflow.com/questions/28646317/how-to-remove-all-layers-and-features-from-map
  map2.eachLayer(function (layer) {
    if (!(layer.layerID2 == 5 || layer.layerID2 == 6 || layer.layerID2 == 7 || layer.layerID2 == 8)) {
      map2.removeLayer(layer);
      map2.removeControl(legend2);
    }
  });
  if (slctMap2 == 'nta') {
    if (slctMet2 && slctCat2 && slctAttr2 && slctMap2 && slctNTARatio2) {
      switch (slctNTAMap2) {
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
  } else {
    if (slctMet2 && slctCat2 && slctAttr2 && slctMap2) {
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
      }
    }
  }
}


$(".slctGrps2,.grpMet2,.grpCat2,.grpMap2, .grpNTAMap2, .grpNTARatio2").on('click', function() {
  selectMap2();
  selectInfoMet2();
  resetInfo2();
});

export { selectMap2};