import { format, formatter } from './../foundation.js';
import {srchBldDrpDwn2} from './../dropdown.js';
srchBldDrpDwn2();

var srchSlctCat2,
srchSlctCatTxt2,
srchSlctAttrTxt2,
  srchSlctAttr2,
  srchSlctMap2,
  srchSlctBoro2,
  srchSlctCongDist2,
  srchSlctZCTA2,
  srchSlctNTA2,
  srchSlctNTABK2,
  srchSlctNTAQN2,
  srchSlctNTAMN2,
  srchSlctNTABX2,
  srchSlctNTASI2;

const srchSelectedAll2 = document.querySelectorAll('.srchSelected2');

//Default hides all categories
$('.srchGrpAttr2, .srchGrpGeo2').hide();
//Hides Card
$('.ntaCard2, .geoCard2').hide();

//Disables Search Button
$('#srchBtn2').addClass('disabled').prop('disabled', true);

srchSelectedAll2.forEach((selected) => {
  const srchOptionsContainer2 = selected.previousElementSibling;
  const srchOptionsList2 = srchOptionsContainer2.querySelectorAll('.option');
  selected.addEventListener('click', () => {
    if (srchOptionsContainer2.classList.contains('active')) {
      srchOptionsContainer2.classList.remove('active');
    } else {
      let currentActive = document.querySelector('.options-container.active');

      if (currentActive) {
        currentActive.classList.remove('active');
      }

      srchOptionsContainer2.classList.add('active');
    }
    //Sets value of selected class based on selection
    if (srchOptionsContainer2.classList.contains('srchDrpCat2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctCat2 = o.querySelector('.srchSlctCat2').value;
          selected.setAttribute('value', srchSlctCat2);
          srchSlctCatTxt2 = selected.textContent
          //Hides all categories that are not selected
          function toggleDisplay2() {
            $('.srchGrpAttr2')
              .not('#' + srchSlctCat2)
              .hide(); //selects and hides all subcategories (i.e. Category = Gender and subcategory = Gender > Male or Female; identifies it by class 'i.e. btype, gender, etc.')
            $('#' + srchSlctCat2).show(); // only shows the Subcategory dropdown menu
            //Hiding NTA Maps & Ratio Groups when a new category is selected
          }
          toggleDisplay2();
          $('.srchGrpAttr2 .srchSelected2').attr('value', '').text('Please Select');
          srchSlctAttr2 = '';
        });
      });
    }

    if (srchOptionsContainer2.classList.contains('srchDrpAttr2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctAttr2 = o.querySelector('.srchSlctAttr2').value;
          selected.setAttribute('value', srchSlctAttr2);
          srchSlctAttrTxt2 = selected.textContent;
        });
      });
    }

    if (srchOptionsContainer2.classList.contains('srchDrpMap2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctMap2 = o.querySelector('.srchSlctMap2').value;
          selected.setAttribute('value', srchSlctMap2);
          function ToggleGeoDisplay2() {
            $('.srchGrpGeo2')
              .not('#' + srchSlctMap2)
              .hide(); //selects and hides all subcategories (i.e. Category = Gender and subcategory = Gender > Male or Female; identifies it by class 'i.e. btype, gender, etc.')
            $('#' + srchSlctMap2).show(); // only shows the Subcategory dropdown menu
            //Hiding NTA Maps & Ratio Groups when a new category is selected

          }
          ToggleGeoDisplay2();
          $('.srchGrpGeo2 .srchSelected2').attr('value', '').text('Please Select');
          srchSlctBoro2 = '';
          srchSlctCongDist2 = '';
          srchSlctZCTA2 = '';
          srchSlctNTA2 = '';
          srchSlctNTABK2 = '';
          srchSlctNTAQN2 = '';
          srchSlctNTAMN2 = '';
          srchSlctNTABX2 = '';
          srchSlctNTASI2 = '';
        });
      });
    }

    //Search Values
    if (srchOptionsContainer2.classList.contains('srchDrpBoro2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctBoro2 = o.querySelector('.srchSlctBoro2').value;
          selected.setAttribute('value', srchSlctBoro2);
        });
      });
    }
    if (srchOptionsContainer2.classList.contains('srchDrpCongDist2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctCongDist2 = o.querySelector('.srchSlctCongDist2').value;
          selected.setAttribute('value', srchSlctCongDist2);
        });
      });
    }
    if (srchOptionsContainer2.classList.contains('srchDrpZCTA2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctZCTA2 = o.querySelector('.srchSlctZCTA2').value;
          selected.setAttribute('value', srchSlctZCTA2);
        });
      });
    }
    if (srchOptionsContainer2.classList.contains('srchDrpNTA2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTA2 = o.querySelector('.srchSlctNTA2').value;
          selected.setAttribute('value', srchSlctNTA2);
        });
      });
    }
    if (srchOptionsContainer2.classList.contains('srchDrpNTABK2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTABK2 = o.querySelector('.srchSlctNTABK2').value;
          selected.setAttribute('value', srchSlctNTABK2);
        });
      });
    }
    if (srchOptionsContainer2.classList.contains('srchDrpNTAQN2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTAQN2 = o.querySelector('.srchSlctNTAQN2').value;
          selected.setAttribute('value', srchSlctNTAQN2);
        });
      });
    }
    if (srchOptionsContainer2.classList.contains('srchDrpNTAMN2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTAMN2 = o.querySelector('.srchSlctNTAMN2').value;
          selected.setAttribute('value', srchSlctNTAMN2);
        });
      });
    }
    if (srchOptionsContainer2.classList.contains('srchDrpNTABX2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTABX2 = o.querySelector('.srchSlctNTABX2').value;
          selected.setAttribute('value', srchSlctNTABX2);
        });
      });
    }
    if (srchOptionsContainer2.classList.contains('srchDrpNTASI2')) {
      srchOptionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTASI2 = o.querySelector('.srchSlctNTASI2').value;
          selected.setAttribute('value', srchSlctNTASI2);
        });
      });
    }
  });

  srchOptionsList2.forEach((o) => {
    o.addEventListener('click', () => {
      selected.innerHTML = o.querySelector('label').innerHTML;
      srchOptionsContainer2.classList.remove('active');
    });
  });
});

var lnamtKey2,
  jbrtKey2,
  cntKey2,
  str2,
  slug2,
  lnamtBusRatioKey2,
  jbrtBusRatioKey2,
  cntBusRatioKey2,
  lnamtResRatioKey2,
  jbrtResRatioKey2,
  cntResRatioKey2,
  lnamtOthRatioKey2,
  jbrtOthRatioKey2,
  cntOthRatioKey2,
  lnamtTotRatioKey2,
  jbrtTotRatioKey2,
  cntTotRatioKey2;

//Create Keys
$(
  '.srchGrpCat2,.srchGrpAttr2,.srchGrpGeo2, .srchGrpMap2'
).on('click', function () {
  //Conditional Disabling Search Button
  if (srchSlctAttr2 && srchSlctCat2 && srchSlctMap2 && (srchSlctBoro2 || srchSlctCongDist2 || srchSlctZCTA2 || srchSlctNTA2 || srchSlctNTABK2 || srchSlctNTAQN2 || srchSlctNTAMN2 || srchSlctNTABX2 || srchSlctNTASI2)) {
    $('#srchBtn2').removeClass('disabled').prop('disabled', false);
    } else {
    $('#srchBtn2').addClass('disabled').prop('disabled', true);
    console.log(srchSlctAttr2);
    console.log(srchSlctCat2);
    console.log(srchSlctMap2);
    console.log(srchSlctBoro2);
  }


if (srchSlctCat2) {
    str2 = srchSlctCat2;
    slug2 = str2.split('srch').pop().slice(0, -1);
  }
  if (
    srchSlctMap2 == 'srchNTA2' ||
    srchSlctMap2 == 'srchNTABK2' ||
    srchSlctMap2 == 'srchNTAQN2' ||
    srchSlctMap2 == 'srchNTAMN2' ||
    srchSlctMap2 == 'srchNTABX2' ||
    srchSlctMap2 == 'srchNTASI2'
  ) {
    lnamtBusRatioKey2 = slug2 + '_lnamt_BusRatio_' + srchSlctAttr2;
    jbrtBusRatioKey2 = slug2 + '_jbrt_BusRatio_' + srchSlctAttr2;
    cntBusRatioKey2 = slug2 + '_cnt_BusRatio_' + srchSlctAttr2;
    lnamtResRatioKey2 = slug2 + '_lnamt_ResRatio_' + srchSlctAttr2;
    jbrtResRatioKey2 = slug2 + '_jbrt_ResRatio_' + srchSlctAttr2;
    cntResRatioKey2 = slug2 + '_cnt_ResRatio_' + srchSlctAttr2;
    lnamtOthRatioKey2 = slug2 + '_lnamt_OthRatio_' + srchSlctAttr2;
    jbrtOthRatioKey2 = slug2 + '_jbrt_OthRatio_' + srchSlctAttr2;
    cntOthRatioKey2 = slug2 + '_cnt_OthRatio_' + srchSlctAttr2;
    lnamtTotRatioKey2 = slug2 + '_lnamt_TotRatio_' + srchSlctAttr2;
    jbrtTotRatioKey2 = slug2 + '_jbrt_TotRatio_' + srchSlctAttr2;
    cntTotRatioKey2 = slug2 + '_cnt_TotRatio_' + srchSlctAttr2;
  } else {
    lnamtKey2 = slug2 + '_lnamt_' + srchSlctAttr2;
    jbrtKey2 = slug2 + '_jbrt_' + srchSlctAttr2;
    cntKey2 = slug2 + '_cnt_' + srchSlctAttr2;
  }
});

var srchCongDist2 = congdist.features;
var srchBoro2 = boro.features;
var srchZCTA2 = zcta.features;
var srchNTA2 = nta.features;
var srchNTABK2 = ntaBK.features;
var srchNTABX2 = ntaBX.features;
var srchNTAMN2 = ntaMN.features;
var srchNTAQN2 = ntaQN.features;
var srchNTASI2 = ntaSI.features;


var srchLnamtBusRatio2;
var srchJbrtBusRatio2;
var srchCntBusRatio2;

var srchLnamtResRatio2;
var srchJbrtResRatio2;
var srchCntResRatio2;

var srchlnamtOthRatio2;
var srchjbrtOthRatio2;
var srchCntOthRatio2;

var srchlnamtTotRatio2;
var srchjbrtTotRatio2;
var srchCntTotRatio2;

var srchLnamt2, srchJbrt2, srchCnt2, arrNum2;
//text for the Card
var titleTxt2;
function tstSrch2() {
  var cdArr = [];
  var boroArr = [];
  var zctaArr = [];
  var ntaArr = [];
  var ntaBKArr = [];
  var ntaQNArr = [];
  var ntaMNArr = [];
  var ntaBXArr = [];
  var ntaSIArr = [];
  console.log(srchLnamtBusRatio2);
  switch (srchSlctMap2) {
    case 'srchCongDist2':
      for (var i in srchCongDist2) {
        cdArr.push(srchCongDist2[i].properties['CD']);
      }
      arrNum2 = cdArr.indexOf(srchSlctCongDist2);
      srchLnamt2 = srchCongDist2[arrNum2].properties[lnamtKey2];
      srchJbrt2 = srchCongDist2[arrNum2].properties[jbrtKey2];
      srchCnt2 = srchCongDist2[arrNum2].properties[cntKey2];
      titleTxt2 = 'Congressional District: '+srchCongDist2[arrNum2].properties['CD']
      break;
    case 'srchBoro2':
      for (var i in srchBoro2) {
        boroArr.push(srchBoro2[i].properties['boroID']);
      }
      arrNum2 = boroArr.indexOf(srchSlctBoro2);
      srchLnamt2 = srchBoro2[arrNum2].properties[lnamtKey2];
      srchJbrt2 = srchBoro2[arrNum2].properties[jbrtKey2];
      srchCnt2 = srchBoro2[arrNum2].properties[cntKey2];
      titleTxt2 = 'Borough: '+srchBoro2[arrNum2].properties['boro']
      break;
    case 'srchZCTA2':
      for (var i in srchZCTA2) {
        zctaArr.push(srchZCTA2[i].properties['zctaID']);
      }
      arrNum2 = zctaArr.indexOf(srchSlctZCTA2);
      srchLnamt2 = srchZCTA2[arrNum2].properties[lnamtKey2];
      srchJbrt2 = srchZCTA2[arrNum2].properties[jbrtKey2];
      srchCnt2 = srchZCTA2[arrNum2].properties[cntKey2];
      titleTxt2 = 'Zip Code Tabulation Area: '+srchZCTA2[arrNum2].properties['zcta']
      break;
    case 'srchNTA2':
      for (var i in srchNTA2) {
        ntaArr.push(srchNTA2[i].properties['NTACode']);
      }
      arrNum2 = ntaArr.indexOf(srchSlctNTA2);
      srchLnamtBusRatio2 = srchNTA2[arrNum2].properties[lnamtBusRatioKey2];
      srchJbrtBusRatio2 = srchNTA2[arrNum2].properties[jbrtBusRatioKey2];
      srchCntBusRatio2 = srchNTA2[arrNum2].properties[cntBusRatioKey2];

      srchLnamtResRatio2 = srchNTA2[arrNum2].properties[lnamtResRatioKey2];
      srchJbrtResRatio2 = srchNTA2[arrNum2].properties[jbrtResRatioKey2];
      srchCntResRatio2 = srchNTA2[arrNum2].properties[cntResRatioKey2];

      srchlnamtOthRatio2 = srchNTA2[arrNum2].properties[lnamtOthRatioKey2];
      srchjbrtOthRatio2 = srchNTA2[arrNum2].properties[jbrtOthRatioKey2];
      srchCntOthRatio2 = srchNTA2[arrNum2].properties[cntOthRatioKey2];

      srchlnamtTotRatio2 = srchNTA2[arrNum2].properties[lnamtTotRatioKey2];
      srchjbrtTotRatio2 = srchNTA2[arrNum2].properties[jbrtTotRatioKey2];
      srchCntTotRatio2 = srchNTA2[arrNum2].properties[cntTotRatioKey2];
      //text for the card
      titleTxt2 = 'Neighborhood Tabulation Area: '+srchNTA2[arrNum2].properties['nta']
      break;
    case 'srchNTABK2':
      for (var i in srchNTABK2) {
        ntaBKArr.push(srchNTABK2[i].properties['NTACode']);
      }
      arrNum2 = ntaBKArr.indexOf(srchSlctNTABK2);
      srchLnamtBusRatio2 = srchNTABK2[arrNum2].properties[lnamtBusRatioKey2];
      srchJbrtBusRatio2 = srchNTABK2[arrNum2].properties[jbrtBusRatioKey2];
      srchCntBusRatio2 = srchNTABK2[arrNum2].properties[cntBusRatioKey2];

      srchLnamtResRatio2 = srchNTABK2[arrNum2].properties[lnamtResRatioKey2];
      srchJbrtResRatio2 = srchNTABK2[arrNum2].properties[jbrtResRatioKey2];
      srchCntResRatio2 = srchNTABK2[arrNum2].properties[cntResRatioKey2];

      srchlnamtOthRatio2 = srchNTABK2[arrNum2].properties[lnamtOthRatioKey2];
      srchjbrtOthRatio2 = srchNTABK2[arrNum2].properties[jbrtOthRatioKey2];
      srchCntOthRatio2 = srchNTABK2[arrNum2].properties[cntOthRatioKey2];

      srchlnamtTotRatio2 = srchNTABK2[arrNum2].properties[lnamtTotRatioKey2];
      srchjbrtTotRatio2 = srchNTABK2[arrNum2].properties[jbrtTotRatioKey2];
      srchCntTotRatio2 = srchNTABK2[arrNum2].properties[cntTotRatioKey2];
      //text for the card
      titleTxt2 = 'Neighborhood Tabulation Area: '+srchNTABK2[arrNum2].properties['ntaBK']      
      break;
    case 'srchNTAQN2':
      for (var i in srchNTAQN2) {
        ntaQNArr.push(srchNTAQN2[i].properties['NTACode']);
      }
      arrNum2 = ntaQNArr.indexOf(srchSlctNTAQN2);
      srchLnamtBusRatio2 = srchNTAQN2[arrNum2].properties[lnamtBusRatioKey2];
      srchJbrtBusRatio2 = srchNTAQN2[arrNum2].properties[jbrtBusRatioKey2];
      srchCntBusRatio2 = srchNTAQN2[arrNum2].properties[cntBusRatioKey2];

      srchLnamtResRatio2 = srchNTAQN2[arrNum2].properties[lnamtResRatioKey2];
      srchJbrtResRatio2 = srchNTAQN2[arrNum2].properties[jbrtResRatioKey2];
      srchCntResRatio2 = srchNTAQN2[arrNum2].properties[cntResRatioKey2];

      srchlnamtOthRatio2 = srchNTAQN2[arrNum2].properties[lnamtOthRatioKey2];
      srchjbrtOthRatio2 = srchNTAQN2[arrNum2].properties[jbrtOthRatioKey2];
      srchCntOthRatio2 = srchNTAQN2[arrNum2].properties[cntOthRatioKey2];

      srchlnamtTotRatio2 = srchNTAQN2[arrNum2].properties[lnamtTotRatioKey2];
      srchjbrtTotRatio2 = srchNTAQN2[arrNum2].properties[jbrtTotRatioKey2];
      srchCntTotRatio2 = srchNTAQN2[arrNum2].properties[cntTotRatioKey2];
      //text for the card
      titleTxt2 = 'Neighborhood Tabulation Area: '+srchNTAQN2[arrNum2].properties['ntaQN']  
      break;
    case 'srchNTAMN2':
      for (var i in srchNTAMN2) {
        ntaMNArr.push(srchNTAMN2[i].properties['NTACode']);
      }
      arrNum2 = ntaMNArr.indexOf(srchSlctNTAMN2);
      srchLnamtBusRatio2 = srchNTAMN2[arrNum2].properties[lnamtBusRatioKey2];
      srchJbrtBusRatio2 = srchNTAMN2[arrNum2].properties[jbrtBusRatioKey2];
      srchCntBusRatio2 = srchNTAMN2[arrNum2].properties[cntBusRatioKey2];

      srchLnamtResRatio2 = srchNTAMN2[arrNum2].properties[lnamtResRatioKey2];
      srchJbrtResRatio2 = srchNTAMN2[arrNum2].properties[jbrtResRatioKey2];
      srchCntResRatio2 = srchNTAMN2[arrNum2].properties[cntResRatioKey2];

      srchlnamtOthRatio2 = srchNTAMN2[arrNum2].properties[lnamtOthRatioKey2];
      srchjbrtOthRatio2 = srchNTAMN2[arrNum2].properties[jbrtOthRatioKey2];
      srchCntOthRatio2 = srchNTAMN2[arrNum2].properties[cntOthRatioKey2];

      srchlnamtTotRatio2 = srchNTAMN2[arrNum2].properties[lnamtTotRatioKey2];
      srchjbrtTotRatio2 = srchNTAMN2[arrNum2].properties[jbrtTotRatioKey2];
      srchCntTotRatio2 = srchNTAMN2[arrNum2].properties[cntTotRatioKey2];
      //text for the card
      titleTxt2 = 'Neighborhood Tabulation Area: '+srchNTAMN2[arrNum2].properties['ntaMN']   
      break;
    case 'srchNTABX2':
      for (var i in srchNTABX2) {
        ntaBXArr.push(srchNTABX2[i].properties['NTACode']);
      }
      arrNum2 = ntaBXArr.indexOf(srchSlctNTABX2);
      srchLnamtBusRatio2 = srchNTABX2[arrNum2].properties[lnamtBusRatioKey2];
      srchJbrtBusRatio2 = srchNTABX2[arrNum2].properties[jbrtBusRatioKey2];
      srchCntBusRatio2 = srchNTABX2[arrNum2].properties[cntBusRatioKey2];

      srchLnamtResRatio2 = srchNTABX2[arrNum2].properties[lnamtResRatioKey2];
      srchJbrtResRatio2 = srchNTABX2[arrNum2].properties[jbrtResRatioKey2];
      srchCntResRatio2 = srchNTABX2[arrNum2].properties[cntResRatioKey2];

      srchlnamtOthRatio2 = srchNTABX2[arrNum2].properties[lnamtOthRatioKey2];
      srchjbrtOthRatio2 = srchNTABX2[arrNum2].properties[jbrtOthRatioKey2];
      srchCntOthRatio2 = srchNTABX2[arrNum2].properties[cntOthRatioKey2];

      srchlnamtTotRatio2 = srchNTABX2[arrNum2].properties[lnamtTotRatioKey2];
      srchjbrtTotRatio2 = srchNTABX2[arrNum2].properties[jbrtTotRatioKey2];
      srchCntTotRatio2 = srchNTABX2[arrNum2].properties[cntTotRatioKey2];
      //text for the card
      titleTxt2 = 'Neighborhood Tabulation Area: '+srchNTABX2[arrNum2].properties['ntaBX'] 
      break;
    case 'srchNTASI2':
      for (var i in srchNTASI2) {
        ntaSIArr.push(srchNTASI2[i].properties['NTACode']);
      }
      arrNum2 = ntaSIArr.indexOf(srchSlctNTASI2);
      srchLnamtBusRatio2 = srchNTASI2[arrNum2].properties[lnamtBusRatioKey2];
      srchJbrtBusRatio2 = srchNTASI2[arrNum2].properties[jbrtBusRatioKey2];
      srchCntBusRatio2 = srchNTASI2[arrNum2].properties[cntBusRatioKey2];

      srchLnamtResRatio2 = srchNTASI2[arrNum2].properties[lnamtResRatioKey2];
      srchJbrtResRatio2 = srchNTASI2[arrNum2].properties[jbrtResRatioKey2];
      srchCntResRatio2 = srchNTASI2[arrNum2].properties[cntResRatioKey2];

      srchlnamtOthRatio2 = srchNTASI2[arrNum2].properties[lnamtOthRatioKey2];
      srchjbrtOthRatio2 = srchNTASI2[arrNum2].properties[jbrtOthRatioKey2];
      srchCntOthRatio2 = srchNTASI2[arrNum2].properties[cntOthRatioKey2];

      srchlnamtTotRatio2 = srchNTASI2[arrNum2].properties[lnamtTotRatioKey2];
      srchjbrtTotRatio2 = srchNTASI2[arrNum2].properties[jbrtTotRatioKey2];
      srchCntTotRatio2 = srchNTASI2[arrNum2].properties[cntTotRatioKey2];
      
      //text for the card
      titleTxt2 = 'Neighborhood Tabulation Area: '+srchNTASI2[arrNum2].properties['ntaSI']  
      break;
  }
  var $srchlnamtVal2 = $('.srchlnamtVal2');
  var $srchjbrtVal2 = $('.srchjbrtVal2');
  var $srchCntVal2 = $('.srchCntVal2');

  var $srchlnamtResRatioVal2 = $('.srchlnamtResRatioVal2');
  var $srchjbrtResRatioVal2 = $('.srchjbrtResRatioVal2');
  var $srchCntResRatioVal2 = $('.srchCntResRatioVal2');

  var $srchlnamtBusRatioVal2 = $('.srchlnamtBusRatioVal2');
  var $srchjbrtBusRatioVal2 = $('.srchjbrtBusRatioVal2');
  var $srchCntBusRatioVal2 = $('.srchCntBusRatioVal2');

  var $srchlnamtOthRatioVal2 = $('.srchlnamtOthRatioVal2');
  var $srchjbrtOthRatioVal2 = $('.srchjbrtOthRatioVal2');
  var $srchCntOthRatioVal2 = $('.srchCntOthRatioVal2');

  var $srchlnamtTotRatioVal2 = $('.srchlnamtTotRatioVal2');
  var $srchjbrtTotRatioVal2 = $('.srchjbrtTotRatioVal2');
  var $srchCntTotRatioVal2 = $('.srchCntTotRatioVal2');

  $srchlnamtVal2.empty();
  $srchjbrtVal2.empty();
  $srchCntVal2.empty();

  $srchlnamtResRatioVal2.empty();
  $srchjbrtResRatioVal2.empty();
  $srchCntResRatioVal2.empty();

  $srchlnamtBusRatioVal2.empty();
  $srchjbrtBusRatioVal2.empty();
  $srchCntBusRatioVal2.empty();

  $srchlnamtOthRatioVal2.empty();
  $srchjbrtOthRatioVal2.empty();
  $srchCntOthRatioVal2.empty();

  $srchlnamtTotRatioVal2.empty();
  $srchjbrtTotRatioVal2.empty();
  $srchCntTotRatioVal2.empty();

  $srchlnamtVal2.append(
    '<span class="badge">' +
      formatter.format(srchLnamt2) +
      '</span>'
  );
  $srchjbrtVal2.append(
    '<span class="badge">' +
      format(srchJbrt2) +
      '</span>'
  );
  $srchCntVal2.append(
    '<span class="badge">' +
      format(srchCnt2) +
      '</span>'
  );

  $srchlnamtResRatioVal2.append(
    '<span class="badge">' +
      formatter.format(srchLnamtResRatio2) +
      '</span>'
  );
  $srchjbrtResRatioVal2.append(
    '<span class="badge">' +
      format(srchJbrtResRatio2) +
      '</span>'
  );
  $srchCntResRatioVal2.append(
    '<span class="badge">' +
      format(srchCntResRatio2) +
      '</span>'
  );

  $srchlnamtBusRatioVal2.append(
    '<span class="badge">' +
      formatter.format(srchLnamtBusRatio2) +
      '</span>'
  );
  $srchjbrtBusRatioVal2.append(
    '<span class="badge">' +
      format(srchJbrtBusRatio2) +
      '</span>'
  );
  $srchCntBusRatioVal2.append(
    '<span class="badge">' +
      format(srchCntBusRatio2) +
      '</span>'
  );

  $srchlnamtOthRatioVal2.append(
    '<span class="badge">' +
      formatter.format(srchlnamtOthRatio2) +
      '</span>'
  );
  $srchjbrtOthRatioVal2.append(
    '<span class="badge">' +
      format(srchjbrtOthRatio2) +
      '</span>'
  );
  $srchCntOthRatioVal2.append(
    '<span class="badge">' +
      format(srchCntOthRatio2) +
      '</span>'
  );

  $srchlnamtTotRatioVal2.append(
    '<span class="badge">' +
      formatter.format(srchlnamtTotRatio2) +
      '</span>'
  );
  $srchjbrtTotRatioVal2.append(
    '<span class="badge">' +
      format(srchjbrtTotRatio2) +
      '</span>'
  );
  $srchCntTotRatioVal2.append(
    '<span class="badge">' +
      format(srchCntTotRatio2) +
      '</span>'
  );
  appendCardTitle2();
  displayCard2();
}
  function displayCard2() {
    if (
      srchSlctMap2 == 'srchNTA2' ||
      srchSlctMap2 == 'srchNTABK2' ||
      srchSlctMap2 == 'srchNTAQN2' ||
      srchSlctMap2 == 'srchNTAMN2' ||
      srchSlctMap2 == 'srchNTABX2' ||
      srchSlctMap2 == 'srchNTASI2'
    ) {
      $('.geoCard2').hide();
      $('.ntaCard2').show();
    } else {
      $('.geoCard2').show();
      $('.ntaCard2').hide();
    }
}

//Search Button
var p2 = document.getElementById('srchBtn2');
p2.onclick = tstSrch2;

//Dynamically creates text for the search card
function appendCardTitle2() {
  $('.cardTitle2').text(srchSlctCatTxt2+': '+srchSlctAttrTxt2);
  $('.cardSubTitle2').text(titleTxt2)
} 


//export { tstSrch2, srchSlctMap2 };
