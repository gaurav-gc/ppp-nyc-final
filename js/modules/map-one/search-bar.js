import { format, formatter } from './../foundation.js';
import {srchBldDrpDwn} from './../dropdown.js';
srchBldDrpDwn();

var srchSlctCat,
  srchSlctCatTxt,
  srchSlctAttr,
  srchSlctAttrTxt,
  srchSlctMap,
  srchSlctBoro,
  srchSlctCongDist,
  srchSlctZCTA,
  srchSlctNTA,
  srchSlctNTABK,
  srchSlctNTAQN,
  srchSlctNTAMN,
  srchSlctNTABX,
  srchSlctNTASI;

const srchSelectedAll = document.querySelectorAll('.srchSelected');

//Default hides all categories
$('.srchGrpAttr, .srchGrpGeo').hide();
//Hides Card
$('.ntaCard, .geoCard').hide();

//Disables Search Button
$('#srchBtn').addClass('disabled').prop('disabled', true);


srchSelectedAll.forEach((selected) => {
  const srchOptionsContainer = selected.previousElementSibling;
  const srchOptionsList = srchOptionsContainer.querySelectorAll('.option');
  selected.addEventListener('click', () => {
    if (srchOptionsContainer.classList.contains('active')) {
      srchOptionsContainer.classList.remove('active');
    } else {
      let currentActive = document.querySelector('.options-container.active');

      if (currentActive) {
        currentActive.classList.remove('active');
      }

      srchOptionsContainer.classList.add('active');
    }
    //Sets value of selected class based on selection
    if (srchOptionsContainer.classList.contains('srchDrpCat')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctCat = o.querySelector('.srchSlctCat').value;
          selected.setAttribute('value', srchSlctCat);
          srchSlctCatTxt = selected.textContent
          //Hides all categories that are not selected
          function toggleDisplay() {
            $('.srchGrpAttr')
              .not('#' + srchSlctCat)
              .hide(); //selects and hides all subcategories (i.e. Category = Gender and subcategory = Gender > Male or Female; identifies it by class 'i.e. btype, gender, etc.')
            $('#' + srchSlctCat).show(); // only shows the Subcategory dropdown menu
            //Hiding NTA Maps & Ratio Groups when a new category is selected
          }
          toggleDisplay();
          $('.srchGrpAttr .srchSelected').attr('value', '').text('Please Select');
          srchSlctAttr = '';
        });
      });
    }

    if (srchOptionsContainer.classList.contains('srchDrpAttr')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctAttr = o.querySelector('.srchSlctAttr').value;
          selected.setAttribute('value', srchSlctAttr);
          srchSlctAttrTxt = selected.textContent;
        });
      });
    }

    if (srchOptionsContainer.classList.contains('srchDrpMap')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctMap = o.querySelector('.srchSlctMap').value;
          selected.setAttribute('value', srchSlctMap);
          function toggleGeoDisplay() {
            $('.srchGrpGeo')
              .not('#' + srchSlctMap)
              .hide(); //selects and hides all subcategories (i.e. Category = Gender and subcategory = Gender > Male or Female; identifies it by class 'i.e. btype, gender, etc.')
            $('#' + srchSlctMap).show(); // only shows the Subcategory dropdown menu
            //Hiding NTA Maps & Ratio Groups when a new category is selected
     
          }
          toggleGeoDisplay();
          $('.srchGrpGeo .srchSelected').attr('value', '').text('Please Select');
          srchSlctBoro = '';
          srchSlctCongDist = '';
          srchSlctZCTA = '';
          srchSlctNTA = '';
          srchSlctNTABK = '';
          srchSlctNTAQN = '';
          srchSlctNTAMN = '';
          srchSlctNTABX = '';
          srchSlctNTASI = '';
        });
      });
    }

    //Search Values
    if (srchOptionsContainer.classList.contains('srchDrpBoro')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctBoro = o.querySelector('.srchSlctBoro').value;
          selected.setAttribute('value', srchSlctBoro);
        });
      });
    }
    if (srchOptionsContainer.classList.contains('srchDrpCongDist')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctCongDist = o.querySelector('.srchSlctCongDist').value;
          selected.setAttribute('value', srchSlctCongDist);
        });
      });
    }
    if (srchOptionsContainer.classList.contains('srchDrpZCTA')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctZCTA = o.querySelector('.srchSlctZCTA').value;
          selected.setAttribute('value', srchSlctZCTA);
        });
      });
    }
    if (srchOptionsContainer.classList.contains('srchDrpNTA')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTA = o.querySelector('.srchSlctNTA').value;
          selected.setAttribute('value', srchSlctNTA);
        });
      });
    }
    if (srchOptionsContainer.classList.contains('srchDrpNTABK')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTABK = o.querySelector('.srchSlctNTABK').value;
          selected.setAttribute('value', srchSlctNTABK);
        });
      });
    }
    if (srchOptionsContainer.classList.contains('srchDrpNTAQN')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTAQN = o.querySelector('.srchSlctNTAQN').value;
          selected.setAttribute('value', srchSlctNTAQN);
        });
      });
    }
    if (srchOptionsContainer.classList.contains('srchDrpNTAMN')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTAMN = o.querySelector('.srchSlctNTAMN').value;
          selected.setAttribute('value', srchSlctNTAMN);
        });
      });
    }
    if (srchOptionsContainer.classList.contains('srchDrpNTABX')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTABX = o.querySelector('.srchSlctNTABX').value;
          selected.setAttribute('value', srchSlctNTABX);
        });
      });
    }
    if (srchOptionsContainer.classList.contains('srchDrpNTASI')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTASI = o.querySelector('.srchSlctNTASI').value;
          selected.setAttribute('value', srchSlctNTASI);
        });
      });
    }
  });

  // Conditional Dropdown
  // 1) Get the selected value from slctCat --> 'chosen' [x]
  // 2a) hide all div [x]
  // 2b) chosen --> determines which get unhine (i.e. if chosen = 'btype' )


  srchOptionsList.forEach((o) => {
    o.addEventListener('click', () => {
      selected.innerHTML = o.querySelector('label').innerHTML;
      srchOptionsContainer.classList.remove('active');
    });
  });
  
  

});

var lnamtKey,
  jbrtKey,
  cntKey,
  str,
  slug,
  lnamtBusRatioKey,
  jbrtBusRatioKey,
  cntBusRatioKey,
  lnamtResRatioKey,
  jbrtResRatioKey,
  cntResRatioKey,
  lnamtOthRatioKey,
  jbrtOthRatioKey,
  cntOthRatioKey,
  lnamtTotRatioKey,
  jbrtTotRatioKey,
  cntTotRatioKey;

//Create Keys
$(
  '.srchGrpCat,.srchGrpAttr,.srchGrpGeo, .srchGrpMap'
).on('click', function () {
  //Conditional Disabling Search Button
  if (srchSlctAttr && srchSlctCat && srchSlctMap && (srchSlctBoro || srchSlctCongDist || srchSlctZCTA || srchSlctNTA || srchSlctNTABK || srchSlctNTAQN || srchSlctNTAMN || srchSlctNTABX || srchSlctNTASI)) {
    $('#srchBtn').removeClass('disabled').prop('disabled', false);
    } else {
    $('#srchBtn').addClass('disabled').prop('disabled', true);
  }

  
  if (srchSlctCat) {
    str = srchSlctCat;
    slug = str.split('srch').pop();
  }
  if (
    srchSlctMap == 'srchNTA' ||
    srchSlctMap == 'srchNTABK' ||
    srchSlctMap == 'srchNTAQN' ||
    srchSlctMap == 'srchNTAMN' ||
    srchSlctMap == 'srchNTABX' ||
    srchSlctMap == 'srchNTASI'
  ) {
    lnamtBusRatioKey = slug + '_lnamt_BusRatio_' + srchSlctAttr;
    jbrtBusRatioKey = slug + '_jbrt_BusRatio_' + srchSlctAttr;
    cntBusRatioKey = slug + '_cnt_BusRatio_' + srchSlctAttr;
    lnamtResRatioKey = slug + '_lnamt_ResRatio_' + srchSlctAttr;
    jbrtResRatioKey = slug + '_jbrt_ResRatio_' + srchSlctAttr;
    cntResRatioKey = slug + '_cnt_ResRatio_' + srchSlctAttr;
    lnamtOthRatioKey = slug + '_lnamt_OthRatio_' + srchSlctAttr;
    jbrtOthRatioKey = slug + '_jbrt_OthRatio_' + srchSlctAttr;
    cntOthRatioKey = slug + '_cnt_OthRatio_' + srchSlctAttr;
    lnamtTotRatioKey = slug + '_lnamt_TotRatio_' + srchSlctAttr;
    jbrtTotRatioKey = slug + '_jbrt_TotRatio_' + srchSlctAttr;
    cntTotRatioKey = slug + '_cnt_TotRatio_' + srchSlctAttr;
  } else {
    lnamtKey = slug + '_lnamt_' + srchSlctAttr;
    jbrtKey = slug + '_jbrt_' + srchSlctAttr;
    cntKey = slug + '_cnt_' + srchSlctAttr;
    
  }
});

var srchCongDist = congdist.features;
var srchBoro = boro.features;
var srchZCTA = zcta.features;
var srchNTA = nta.features;
var srchNTABK = ntaBK.features;
var srchNTABX = ntaBX.features;
var srchNTAMN = ntaMN.features;
var srchNTAQN = ntaQN.features;
var srchNTASI = ntaSI.features;

var srchlnamt, srchjbrt, srchCnt, arrNum;

//text for the Card
var titleTxt;
function tstSrch() {
  var cdArr = [];
  var boroArr = [];
  var zctaArr = [];
  var ntaArr = [];
  var ntaBKArr = [];
  var ntaQNArr = [];
  var ntaMNArr = [];
  var ntaBXArr = [];
  var ntaSIArr = [];

  switch (srchSlctMap) {
    case 'srchCongDist':
      for (var i in srchCongDist) {
        cdArr.push(srchCongDist[i].properties['CD']);
      }
      arrNum = cdArr.indexOf(srchSlctCongDist);
      srchlnamt = srchCongDist[arrNum].properties[lnamtKey];
      srchjbrt = srchCongDist[arrNum].properties[jbrtKey];
      srchCnt = srchCongDist[arrNum].properties[cntKey];
      //text for the card
      titleTxt = 'Congressional District: '+srchCongDist[arrNum].properties['CD']
      break;
    case 'srchBoro':
      for (var i in srchBoro) {
        boroArr.push(srchBoro[i].properties['boroID']);
      }
      arrNum = boroArr.indexOf(srchSlctBoro);
      srchlnamt = srchBoro[arrNum].properties[lnamtKey];
      srchjbrt = srchBoro[arrNum].properties[jbrtKey];
      srchCnt = srchBoro[arrNum].properties[cntKey];
      //text for the card
      titleTxt = 'Borough: '+srchBoro[arrNum].properties['boro']
      break;
    case 'srchZCTA':
      for (var i in srchZCTA) {
        zctaArr.push(srchZCTA[i].properties['zctaID']);
      }
      arrNum = zctaArr.indexOf(srchSlctZCTA);
      srchlnamt = srchZCTA[arrNum].properties[lnamtKey];
      srchjbrt = srchZCTA[arrNum].properties[jbrtKey];
      srchCnt = srchZCTA[arrNum].properties[cntKey];
      //text for the card
      titleTxt = 'Zip Code Tabulation Area: '+srchZCTA[arrNum].properties['zcta']
      break;
    case 'srchNTA':
      for (var i in srchNTA) {
        ntaArr.push(srchNTA[i].properties['NTACode']);
      }
      arrNum = ntaArr.indexOf(srchSlctNTA);
      var srchlnamtBusRatio = srchNTA[arrNum].properties[lnamtBusRatioKey];
      var srchjbrtBusRatio = srchNTA[arrNum].properties[jbrtBusRatioKey];
      var srchCntBusRatio = srchNTA[arrNum].properties[cntBusRatioKey];

      var srchlnamtResRatio = srchNTA[arrNum].properties[lnamtResRatioKey];
      var srchjbrtResRatio = srchNTA[arrNum].properties[jbrtResRatioKey];
      var srchCntResRatio = srchNTA[arrNum].properties[cntResRatioKey];

      var srchlnamtOthRatio = srchNTA[arrNum].properties[lnamtOthRatioKey];
      var srchjbrtOthRatio = srchNTA[arrNum].properties[jbrtOthRatioKey];
      var srchCntOthRatio = srchNTA[arrNum].properties[cntOthRatioKey];

      var srchlnamtTotRatio = srchNTA[arrNum].properties[lnamtTotRatioKey];
      var srchjbrtTotRatio = srchNTA[arrNum].properties[jbrtTotRatioKey];
      var srchCntTotRatio = srchNTA[arrNum].properties[cntTotRatioKey];

      //text for the card
      titleTxt = 'Neighborhood Tabulation Area: '+srchNTA[arrNum].properties['nta']
      break;
    case 'srchNTABK':
      for (var i in srchNTABK) {
        ntaBKArr.push(srchNTABK[i].properties['NTACode']);
      }
      arrNum = ntaBKArr.indexOf(srchSlctNTABK);
      srchlnamtBusRatio = srchNTABK[arrNum].properties[lnamtBusRatioKey];
      srchjbrtBusRatio = srchNTABK[arrNum].properties[jbrtBusRatioKey];
      srchCntBusRatio = srchNTABK[arrNum].properties[cntBusRatioKey];

      srchlnamtResRatio = srchNTABK[arrNum].properties[lnamtResRatioKey];
      srchjbrtResRatio = srchNTABK[arrNum].properties[jbrtResRatioKey];
      srchCntResRatio = srchNTABK[arrNum].properties[cntResRatioKey];

      srchlnamtOthRatio = srchNTABK[arrNum].properties[lnamtOthRatioKey];
      srchjbrtOthRatio = srchNTABK[arrNum].properties[jbrtOthRatioKey];
      srchCntOthRatio = srchNTABK[arrNum].properties[cntOthRatioKey];

      srchlnamtTotRatio = srchNTABK[arrNum].properties[lnamtTotRatioKey];
      srchjbrtTotRatio = srchNTABK[arrNum].properties[jbrtTotRatioKey];
      srchCntTotRatio = srchNTABK[arrNum].properties[cntTotRatioKey];

      //text for the card
      titleTxt = 'Neighborhood Tabulation Area: '+srchNTABK[arrNum].properties['ntaBK']      
      break;
    case 'srchNTAQN':
      for (var i in srchNTAQN) {
        ntaQNArr.push(srchNTAQN[i].properties['NTACode']);
      }
      arrNum = ntaQNArr.indexOf(srchSlctNTAQN);
      srchlnamtBusRatio = srchNTAQN[arrNum].properties[lnamtBusRatioKey];
      srchjbrtBusRatio = srchNTAQN[arrNum].properties[jbrtBusRatioKey];
      srchCntBusRatio = srchNTAQN[arrNum].properties[cntBusRatioKey];

      srchlnamtResRatio = srchNTAQN[arrNum].properties[lnamtResRatioKey];
      srchjbrtResRatio = srchNTAQN[arrNum].properties[jbrtResRatioKey];
      srchCntResRatio = srchNTAQN[arrNum].properties[cntResRatioKey];

      srchlnamtOthRatio = srchNTAQN[arrNum].properties[lnamtOthRatioKey];
      srchjbrtOthRatio = srchNTAQN[arrNum].properties[jbrtOthRatioKey];
      srchCntOthRatio = srchNTAQN[arrNum].properties[cntOthRatioKey];

      srchlnamtTotRatio = srchNTAQN[arrNum].properties[lnamtTotRatioKey];
      srchjbrtTotRatio = srchNTAQN[arrNum].properties[jbrtTotRatioKey];
      srchCntTotRatio = srchNTAQN[arrNum].properties[cntTotRatioKey];

      //text for the card
      titleTxt = 'Neighborhood Tabulation Area: '+srchNTAQN[arrNum].properties['ntaQN']        
      break;
    case 'srchNTAMN':
      for (var i in srchNTAMN) {
        ntaMNArr.push(srchNTAMN[i].properties['NTACode']);
      }
      arrNum = ntaMNArr.indexOf(srchSlctNTAMN);
      srchlnamtBusRatio = srchNTAMN[arrNum].properties[lnamtBusRatioKey];
      srchjbrtBusRatio = srchNTAMN[arrNum].properties[jbrtBusRatioKey];
      srchCntBusRatio = srchNTAMN[arrNum].properties[cntBusRatioKey];

      srchlnamtResRatio = srchNTAMN[arrNum].properties[lnamtResRatioKey];
      srchjbrtResRatio = srchNTAMN[arrNum].properties[jbrtResRatioKey];
      srchCntResRatio = srchNTAMN[arrNum].properties[cntResRatioKey];

      srchlnamtOthRatio = srchNTAMN[arrNum].properties[lnamtOthRatioKey];
      srchjbrtOthRatio = srchNTAMN[arrNum].properties[jbrtOthRatioKey];
      srchCntOthRatio = srchNTAMN[arrNum].properties[cntOthRatioKey];

      srchlnamtTotRatio = srchNTAMN[arrNum].properties[lnamtTotRatioKey];
      srchjbrtTotRatio = srchNTAMN[arrNum].properties[jbrtTotRatioKey];
      srchCntTotRatio = srchNTAMN[arrNum].properties[cntTotRatioKey];
      //text for the card
      titleTxt = 'Neighborhood Tabulation Area: '+srchNTAMN[arrNum].properties['ntaMN']              
      break;
    case 'srchNTABX':
      for (var i in srchNTABX) {
        ntaBXArr.push(srchNTABX[i].properties['NTACode']);
      }
      arrNum = ntaBXArr.indexOf(srchSlctNTABX);
      srchlnamtBusRatio = srchNTABX[arrNum].properties[lnamtBusRatioKey];
      srchjbrtBusRatio = srchNTABX[arrNum].properties[jbrtBusRatioKey];
      srchCntBusRatio = srchNTABX[arrNum].properties[cntBusRatioKey];

      srchlnamtResRatio = srchNTABX[arrNum].properties[lnamtResRatioKey];
      srchjbrtResRatio = srchNTABX[arrNum].properties[jbrtResRatioKey];
      srchCntResRatio = srchNTABX[arrNum].properties[cntResRatioKey];

      srchlnamtOthRatio = srchNTABX[arrNum].properties[lnamtOthRatioKey];
      srchjbrtOthRatio = srchNTABX[arrNum].properties[jbrtOthRatioKey];
      srchCntOthRatio = srchNTABX[arrNum].properties[cntOthRatioKey];

      srchlnamtTotRatio = srchNTABX[arrNum].properties[lnamtTotRatioKey];
      srchjbrtTotRatio = srchNTABX[arrNum].properties[jbrtTotRatioKey];
      srchCntTotRatio = srchNTABX[arrNum].properties[cntTotRatioKey];
      //text for the card
      titleTxt = 'Neighborhood Tabulation Area: '+srchNTABX[arrNum].properties['ntaBX']        
      break;
    case 'srchNTASI':
      for (var i in srchNTASI) {
        ntaSIArr.push(srchNTASI[i].properties['NTACode']);
      }
      arrNum = ntaSIArr.indexOf(srchSlctNTASI);
      srchlnamtBusRatio = srchNTASI[arrNum].properties[lnamtBusRatioKey];
      srchjbrtBusRatio = srchNTASI[arrNum].properties[jbrtBusRatioKey];
      srchCntBusRatio = srchNTASI[arrNum].properties[cntBusRatioKey];

      srchlnamtResRatio = srchNTASI[arrNum].properties[lnamtResRatioKey];
      srchjbrtResRatio = srchNTASI[arrNum].properties[jbrtResRatioKey];
      srchCntResRatio = srchNTASI[arrNum].properties[cntResRatioKey];

      srchlnamtOthRatio = srchNTASI[arrNum].properties[lnamtOthRatioKey];
      srchjbrtOthRatio = srchNTASI[arrNum].properties[jbrtOthRatioKey];
      srchCntOthRatio = srchNTASI[arrNum].properties[cntOthRatioKey];

      srchlnamtTotRatio = srchNTASI[arrNum].properties[lnamtTotRatioKey];
      srchjbrtTotRatio = srchNTASI[arrNum].properties[jbrtTotRatioKey];
      srchCntTotRatio = srchNTASI[arrNum].properties[cntTotRatioKey];

      //text for the card
      titleTxt = 'Neighborhood Tabulation Area: '+srchNTASI[arrNum].properties['ntaSI']           
      break;
  }
  var $srchlnamtVal = $('.srchlnamtVal');
  var $srchjbrtVal = $('.srchjbrtVal');
  var $srchCntVal = $('.srchCntVal');

  var $srchlnamtResRatioVal = $('.srchlnamtResRatioVal');
  var $srchjbrtResRatioVal = $('.srchjbrtResRatioVal');
  var $srchCntResRatioVal = $('.srchCntResRatioVal');

  var $srchlnamtBusRatioVal = $('.srchlnamtBusRatioVal');
  var $srchjbrtBusRatioVal = $('.srchjbrtBusRatioVal');
  var $srchCntBusRatioVal = $('.srchCntBusRatioVal');

  var $srchlnamtOthRatioVal = $('.srchlnamtOthRatioVal');
  var $srchjbrtOthRatioVal = $('.srchjbrtOthRatioVal');
  var $srchCntOthRatioVal = $('.srchCntOthRatioVal');

  var $srchlnamtTotRatioVal = $('.srchlnamtTotRatioVal');
  var $srchjbrtTotRatioVal = $('.srchjbrtTotRatioVal');
  var $srchCntTotRatioVal = $('.srchCntTotRatioVal');

  $srchlnamtVal.empty();
  $srchjbrtVal.empty();
  $srchCntVal.empty();

  $srchlnamtResRatioVal.empty();
  $srchjbrtResRatioVal.empty();
  $srchCntResRatioVal.empty();

  $srchlnamtBusRatioVal.empty();
  $srchjbrtBusRatioVal.empty();
  $srchCntBusRatioVal.empty();

  $srchlnamtOthRatioVal.empty();
  $srchjbrtOthRatioVal.empty();
  $srchCntOthRatioVal.empty();

  $srchlnamtTotRatioVal.empty();
  $srchjbrtTotRatioVal.empty();
  $srchCntTotRatioVal.empty();

  $srchlnamtVal.append(
    '<span class="badge">' +
      formatter.format(srchlnamt) +
      '</span>'
  );
  $srchjbrtVal.append(
    '<span class="badge">' +
      format(srchjbrt) +
      '</span>'
  );
  $srchCntVal.append(
    '<span class="badge">' +
      format(srchCnt) +
      '</span>'
  );

  $srchlnamtResRatioVal.append(
    '<span class="badge">' +
      formatter.format(srchlnamtResRatio) +
      '</span>'
  );
  $srchjbrtResRatioVal.append(
    '<span class="badge">' +
      format(srchjbrtResRatio) +
      '</span>'
  );
  $srchCntResRatioVal.append(
    '<span class="badge">' +
      format(srchCntResRatio) +
      '</span>'
  );

  $srchlnamtBusRatioVal.append(
    '<span class="badge">' +
      formatter.format(srchlnamtBusRatio) +
      '</span>'
  );
  $srchjbrtBusRatioVal.append(
    '<span class="badge">' +
      format(srchjbrtBusRatio) +
      '</span>'
  );
  $srchCntBusRatioVal.append(
    '<span class="badge">' +
      format(srchCntBusRatio) +
      '</span>'
  );

  $srchlnamtOthRatioVal.append(
    '<span class="badge">' +
      formatter.format(srchlnamtOthRatio) +
      '</span>'
  );
  $srchjbrtOthRatioVal.append(
    '<span class="badge">' +
      format(srchjbrtOthRatio) +
      '</span>'
  );
  $srchCntOthRatioVal.append(
    '<span class="badge">' +
      format(srchCntOthRatio) +
      '</span>'
  );

  $srchlnamtTotRatioVal.append(
    '<span class="badge">' +
      formatter.format(srchlnamtTotRatio) +
      '</span>'
  );
  $srchjbrtTotRatioVal.append(
    '<span class="badge">' +
      format(srchjbrtTotRatio) +
      '</span>'
  );
  $srchCntTotRatioVal.append(
    '<span class="badge">' +
      format(srchCntTotRatio) +
      '</span>'
  );
  appendCardTitle();
  displayCard();
}


function displayCard() {
  if (
    srchSlctMap == 'srchNTA' ||
    srchSlctMap == 'srchNTABK' ||
    srchSlctMap == 'srchNTAQN' ||
    srchSlctMap == 'srchNTAMN' ||
    srchSlctMap == 'srchNTABX' ||
    srchSlctMap == 'srchNTASI'
  ) {
    $('.geoCard').hide();
    $('.ntaCard').show();
  } else {
    $('.geoCard').show();
    $('.ntaCard').hide();
  }
} 

//Search Button
var p = document.getElementById('srchBtn');
p.onclick = tstSrch;

//Dynamically creates text for the search card
function appendCardTitle() {
  $('.cardTitle').text(srchSlctCatTxt+': '+srchSlctAttrTxt);
  $('.cardSubTitle').text(titleTxt)
} 


export { tstSrch, srchSlctMap };
