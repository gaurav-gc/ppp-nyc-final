import { map1 } from './../foundation.js';
import { slctMap, slctCat, slctAttr, slctMet, slctNTAMap, slctNTARatio } from './keys-dropdown.js';
import { selectInfoMet, resetInfo } from './info-control.js';
import {
  lyrCongDist,
  lyrZCTA,
  lyrBoro,
  lyrNTA,
  lyrNTABK,
  lyrNTAQN,
  lyrNTAMN,
  lyrNTABX,
  lyrNTASI,
  styleCongDist,
  styleZCTA,
  styleBoro, 
  styleNTA,
  styleNTABK,
  styleNTAQN,
  styleNTABX,
  styleNTAMN,
  styleNTASI,
} from './mapstyle.js';
import { addLegendMap, legend } from './legend.js';
//****************** SELECT MAP1 **********************************
function selectMap1() {
  //Removes Layer from map1 each time function is run. Source: https://stackoverflow.com/questions/28646317/how-to-remove-all-layers-and-features-from-map
  map1.eachLayer(function (layer) {
    if (!(layer.layerID == 1 || layer.layerID == 2 || layer.layerID == 3 || layer.layerID == 4)) {
      map1.removeLayer(layer);
      map1.removeControl(legend);
    }
  });
  if (slctMap == 'nta') {
    if (slctMet && slctCat && slctAttr && slctMap && slctNTARatio) {
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
} else {
  if (slctMet && slctCat && slctAttr && slctMap) {
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
        }
    }
  }

}

$(".slctGrps,.grpMet,.grpCat,.grpMap, .grpNTAMap, .grpNTARatio").on('click', function() {
  selectMap1();
  selectInfoMet();
  resetInfo();
});

export { selectMap1};
