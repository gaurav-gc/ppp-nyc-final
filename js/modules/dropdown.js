import {infoCatIcon} from './info-dropdown.js'

var catValues = ['Business Type', 'Gender', 'Nonprofit', 'Lender', 'Veterans', 'Race']

var catCodes = ['btype', 'gender', 'nonprofit', 'lender', 'vet', 'race']

var catResult =  catValues.reduce(function(catResult, field, index) {
  catResult[catCodes[index]] = field;
  return catResult;
}, {})


var metricValues = ['Jobs Retained', 'Loan Amount', 'Business Count']

var metricCodes = ['jbrt', 'lnamt', 'cnt']

var metricResult =  metricValues.reduce(function(metricResult, field, index) {
  metricResult[metricCodes[index]] = field;
  return metricResult;
}, {})

var btypeValues = ['Corporation', 'Limited Liability Company', 'S Corporation', 'Sole Proprietorship', 'Independent Contractors', 'Self-Employed Individuals']

var btypeCodes = ['corp', 'llc',  'scorp', 'sp', 'indcon', 'slfemp']

var btypeResult =  btypeValues.reduce(function(btypeResult, field, index) {
  btypeResult[btypeCodes[index]] = field;
  return btypeResult;
}, {})


var genderValues = ['Female', 'Male', 'Unanswered']

var genderCodes = ['f', 'm', 'ua']

var genderResult =  genderValues.reduce(function(genderResult, field, index) {
  genderResult[genderCodes[index]] = field;
  return genderResult;
}, {})

var nonprofitValues = ['Yes', 'No']

var nonprofitCodes = ['y', 'n']

var nonprofitResult =  nonprofitValues.reduce(function(nonprofitResult, field, index) {
  nonprofitResult[nonprofitCodes[index]] = field;
  return nonprofitResult;
}, {})


var lenderValues = ['JP Morgan Chase Bank', 'TD Bank', 'Citibank', 'Bank of America', 'Cross River Bank', 'Signature Bank']

var lenderCodes = ['jpmc', 'tdnb',  'cbna', 'boa', 'crb', 'sigb']

var lenderResult =  lenderValues.reduce(function(lenderResult, field, index) {
  lenderResult[lenderCodes[index]] = field;
  return lenderResult;
}, {})

var vetValues = ['Veteran', 'Nonveteran', 'Unanswered']

var vetCodes = ['v', 'nv', 'ua']

var vetResult =  vetValues.reduce(function(vetResult, field, index) {
  vetResult[vetCodes[index]] = field;
  return vetResult;
}, {})

var raceValues = ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Native Hawaiian or Other Pacific Islander', 'Puerto Rican', 'White', 'Unanswered']

var raceCodes = ['c', 'd',  'b', 'e', 'pr', 'w', 'ua']

var raceResult =  raceValues.reduce(function(raceResult, field, index) {
  raceResult[raceCodes[index]] = field;
  return raceResult;
}, {})

var one50kValues = ['$5-$10 Million', '$2-$5 Million', '$1-$2 Million', '$350K-$1 Million', '$150K-$350K']

var one50kCodes = ['a150', 'b150',  'c150', 'd150', 'e150']

var one50kResult =  one50kValues.reduce(function(one50kResult, field, index) {
  one50kResult[one50kCodes[index]] = field;
  return one50kResult;
}, {})

var mapValues = ['Borough', 'Congressional Districts', 'Neighborhood Tabulation Area', 'Zip Code Tabulation Area']

var mapCodes = ['boro', 'congdist',  'nta', 'zcta']


var mapResult =  mapValues.reduce(function(mapResult, field, index) {
  mapResult[mapCodes[index]] = field;
  return mapResult;
}, {})

var ntaValues = ['NTA - NYC', 'NTA - BK', 'NTA - QN', 'NTA - MN', 'NTA - BX', 'NTA - SI']

var ntaCodes = ['nta', 'ntaBK',  'ntaQN', 'ntaMN', 'ntaBX', 'ntaSI']

var ntaResult =  ntaValues.reduce(function(ntaResult, field, index) {
  ntaResult[ntaCodes[index]] = field;
  return ntaResult;
}, {})

var srchMapValues = ['Borough', 'Congressional Districts', 'Zip Code Tabulation Area', 'NTA - NYC', 'NTA - BK', 'NTA - QN', 'NTA - MN', 'NTA - BX', 'NTA - SI']

var srchMapCodes = ['srchBoro', 'srchCongDist',  'srchZCTA', 'srchNTA', 'srchNTABK', 'srchNTAQN', 'srchNTAMN', 'srchNTABX', 'srchNTASI']

var srchMapResult =  srchMapValues.reduce(function(srchMapResult, field, index) {
  srchMapResult[srchMapCodes[index]] = field;
  return srchMapResult;
}, {})

var ntaRatioValues = ['Res. Ratio', 'Bus. Ratio', 'Oth. Ratio', 'Tot. Ratio']

var ntaRatioCodes = ['ResRatio', 'BusRatio', 'OthRatio', 'TotRatio']

var ntaRatioResult =  ntaRatioValues.reduce(function(ntaRatioResult, field, index) {
  ntaRatioResult[ntaRatioCodes[index]] = field;
  return ntaRatioResult;
}, {})


var $cat = $('.drpCat');
var $metric = $('.drpMet');
var $btype = $('#btype .drpAttr');
var $gender = $('#gender .drpAttr')
var $nonprofit =  $('#nonprofit .drpAttr')
var $lender =  $('#lender .drpAttr')
var $vet =  $('#vet .drpAttr')
var $one50k =  $('#one50k .drpAttr')
var $race =  $('#race .drpAttr')
var $map = $('.grpMap .drpMap')
var $nta = $('.drpNTAMap')
var $ntaRatio = $('.drpNTARatio')

var w, x, y, z;
w = x = y = z = -1;
function bldDrpDwn () {
  $.each(catResult, function (key, value) {
    z= z+1;
    $cat.append(
      '<div class="option hvr-icon-fade"><input type="radio" class="radio slctCat" value="'+key+'" /><label for="'+key+'"><i class="'+infoCatIcon[z]+'"></i><span class="label">'+value+'</span></label></div>');
      });

  $.each(metricResult, function (key, value) {
    $metric.append(
      '<div class="option '+key+'"><input type="radio" class="radio slctMet" value="'+key+'" /><label for="'+key+'">'+value+'</label></div>');
      });

  $.each(btypeResult, function (key, value) {
    $btype.append(
      '<div class="option"><input type="radio" class="radio slctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });

  $.each(genderResult, function (key, value) {
    $gender.append(
      '<div class="option"><input type="radio" class="radio slctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });
 

  $.each(nonprofitResult, function (key, value) {
    $nonprofit.append(
      '<div class="option"><input type="radio" class="radio slctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });    

  $.each(lenderResult, function (key, value) {
    $lender.append(
      '<div class="option"><input type="radio" class="radio slctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      }); 
  
  $.each(vetResult, function (key, value) {
    $vet.append(
      '<div class="option"><input type="radio" class="radio slctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

/* 
  $.each(one50kResult, function (key, value) {
    $one50k.append(
      '<div class="option"><input type="radio" class="radio slctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      }); 
 */
  $.each(raceResult, function (key, value) {
    $race.append(
      '<div class="option"><input type="radio" class="radio slctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      }); 
 
  $.each(mapResult, function (key, value) {
    $map.append(
      '<div class="option"><input type="radio" class="radio slctMap" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(ntaResult, function (key, value) {
    $nta.append(
      '<div class="option"><input type="radio" class="radio slctNTAMap" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(ntaRatioResult, function (key, value) {
    $ntaRatio.append(
      '<div class="option"><input type="radio" class="radio slctNTARatio" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  
}

var $srchcat = $('.srchDrpCat');
var $srchbtype = $('#srchbtype .srchDrpAttr');
var $srchgender = $('#srchgender .srchDrpAttr');
var $srchnonprofit =  $('#srchnonprofit .srchDrpAttr')
var $srchlender =  $('#srchlender .srchDrpAttr')
var $srchvet =  $('#srchvet .srchDrpAttr')
var $srchone50k =  $('#srchone50k .srchDrpAttr')
var $srchrace =  $('#srchrace .srchDrpAttr')
var $srchmap = $('.srchDrpMap')

function srchBldDrpDwn()  {
  $.each(catResult, function (key, value) {
    y= y+1;
    $srchcat.append(
      '<div class="option hvr-icon-fade"><input type="radio" class="radio srchSlctCat" value="srch'+key+'" /><label for="srch'+key+'"><i class="'+infoCatIcon[y]+'"></i><span class="label">'+value+'</span></label></div>');
      });

  $.each(btypeResult, function (key, value) {
    $srchbtype.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });

  $.each(genderResult, function (key, value) {
    $srchgender.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });


  $.each(nonprofitResult, function (key, value) {
    $srchnonprofit.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });   
  
  
  $.each(lenderResult, function (key, value) {
    $srchlender.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(vetResult, function (key, value) {
    $srchvet.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      }); 

/*   $.each(one50kResult, function (key, value) {
    $srchone50k.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  */
  
  $.each(raceResult, function (key, value) {
    $srchrace.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(srchMapResult, function (key, value) {
    $srchmap.append(
      '<div class="option"><input type="radio" class="radio srchSlctMap" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      }); 
     
}
// Map2 
var $cat2 = $('.drpCat2');
var $metric2 = $('.drpMet2');
var $btype2 = $('#btype2 .drpAttr2');
var $gender2 = $('#gender2 .drpAttr2')
var $nonprofit2 =  $('#nonprofit2 .drpAttr2')
var $lender2 =  $('#lender2 .drpAttr2')
var $vet2 =  $('#vet2 .drpAttr2')
var $one50k2 =  $('#one50k2 .drpAttr2')
var $race2 =  $('#race2 .drpAttr2')
var $map2 = $('.grpMap2 .drpMap2')
var $nta2 = $('.drpNTAMap2')
var $ntaRatio2 = $('.drpNTARatio2')

function bldDrpDwn2() {
  $.each(catResult, function (key, value) {
    x= x+1;
    $cat2.append(
      '<div class="option hvr-icon-fade"><input type="radio" class="radio slctCat2" value="'+key+'" /><label for="'+key+'"><i class="'+infoCatIcon[x]+'"></i><span class="label">'+value+'</span></label></div>');
      });

  $.each(metricResult, function (key, value) {
    $metric2.append(
      '<div class="option '+key+'2"><input type="radio" class="radio slctMet2" value="'+key+'" /><label for="'+key+'">'+value+'</label></div>');
      });

  $.each(btypeResult, function (key, value) {
    $btype2.append(
      '<div class="option"><input type="radio" class="radio slctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });

  $.each(genderResult, function (key, value) {
    $gender2.append(
      '<div class="option"><input type="radio" class="radio slctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });


  $.each(nonprofitResult, function (key, value) {
    $nonprofit2.append(
      '<div class="option"><input type="radio" class="radio slctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });   
  
  
  $.each(lenderResult, function (key, value) {
    $lender2.append(
      '<div class="option"><input type="radio" class="radio slctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(vetResult, function (key, value) {
    $vet2.append(
      '<div class="option"><input type="radio" class="radio slctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      }); 

 /*  $.each(one50kResult, function (key, value) {
    $one50k2.append(
      '<div class="option"><input type="radio" class="radio slctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  
   */
  $.each(raceResult, function (key, value) {
    $race2.append(
      '<div class="option"><input type="radio" class="radio slctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  
  
  $.each(mapResult, function (key, value) {
    $map2.append(
      '<div class="option"><input type="radio" class="radio slctMap2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(ntaResult, function (key, value) {
    $nta2.append(
      '<div class="option"><input type="radio" class="radio slctNTAMap2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(ntaRatioResult, function (key, value) {
    $ntaRatio2.append(
      '<div class="option"><input type="radio" class="radio slctNTARatio2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  
}

//var $metric2 = $('.drpMet2');
var $srchcat2 = $('.srchDrpCat2');
var $srchbtype2 = $('#srchbtype2 .srchDrpAttr2');
var $srchgender2 = $('#srchgender2 .srchDrpAttr2');
var $srchnonprofit2 =  $('#srchnonprofit2 .srchDrpAttr2')
var $srchlender2 =  $('#srchlender2 .srchDrpAttr2')
var $srchvet2 =  $('#srchvet2 .srchDrpAttr2')
var $srchone50k2 =  $('#srchone50k2 .srchDrpAttr2')
var $srchrace2 =  $('#srchrace2 .srchDrpAttr2')
var $srchmap2 = $('.srchDrpMap2')

function srchBldDrpDwn2()  {
  $.each(catResult, function (key, value) {
    w= w+1;
    $srchcat2.append(
      '<div class="option hvr-icon-fade"><input type="radio" class="radio srchSlctCat2" value="srch'+key+'2" /><label for="srch'+key+'2"><i class="'+infoCatIcon[w]+'"></i><span class="label">'+value+'</span></label></div>');
      });

  $.each(btypeResult, function (key, value) {
    $srchbtype2.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });

  $.each(genderResult, function (key, value) {
    $srchgender2.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });


  $.each(nonprofitResult, function (key, value) {
    $srchnonprofit2.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });   
  
  
  $.each(lenderResult, function (key, value) {
    $srchlender2.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(vetResult, function (key, value) {
    $srchvet2.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      }); 
/* 
  $.each(one50kResult, function (key, value) {
    $srchone50k2.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  */ 

  $.each(raceResult, function (key, value) {
    $srchrace2.append(
      '<div class="option"><input type="radio" class="radio srchSlctAttr2" value="'+key+'"/><label for="'+key+'">'+value+'</label></div>');
      });  

  $.each(srchMapResult, function (key, value) {
    $srchmap2.append(
      '<div class="option"><input type="radio" class="radio srchSlctMap2" value="'+key+'2"/><label for="'+key+'">'+value+'</label></div>');
      });      
}



export {bldDrpDwn, bldDrpDwn2, srchBldDrpDwn, srchBldDrpDwn2};






