function geoSrch2() {
  var boroValues = []
  var boroCodeValues = []
  for (var i = 0; i < boro.features.length; i++) {
    if (boro.features[i].properties['boro'] == null) continue;
    boroValues.push(boro.features[i].properties['boro']);

  }
  for (var i = 0; i < boro.features.length; i++) {
    if (boro.features[i].properties['boroID'] == null) continue;
    boroCodeValues.push(boro.features[i].properties['boroID']);

  }
  //combining the two arrays into a key value pair
  //source: https://riptutorial.com/javascript/example/8628/merge-two-array-as-key-value-pair
  var boroResult =  boroCodeValues.reduce(function(boroResult, field, index) {
    boroResult[boroValues[index]] = field;
    return boroResult;
  }, {})
  //source: https://css-tricks.com/dynamic-dropdowns/
  //values for the dynamic dropdown
  var $boroChoice = $('.srchDrpBoro2');
  //$selectedChoice.empty();
  $.each(boroResult, function (key, value) {
    $boroChoice.append(
      '<div class = option><input type=radio class="radio srchSlctBoro2" value='+value+'><label for ='+key+'>' + key +'</label></div>');
      });
  
  var congdistValues = []
  for (var i = 0; i < congdist.features.length; i++) {
    if (congdist.features[i].properties['CD'] == null)
      continue;
      congdistValues.push(congdist.features[i].properties['CD']);
  }  
  var $congdistChoice = $('.srchDrpCongDist2');
  //$selectedChoice.empty();
  $.each(congdistValues, function (index, value) {
    $congdistChoice.append(
      '<div class = option><input type=radio class="radio srchSlctCongDist2" value='+value+'><label>' + value +'</label></div>');
      });  

  var zctaValues = []
  var zctaCodeValues = []
  for (var i = 0; i < zcta.features.length; i++) {
    if (zcta.features[i].properties['zcta'] == null)
      continue;
      zctaValues.push(zcta.features[i].properties['zcta']);
  }
  for (var i = 0; i < zcta.features.length; i++) {
    if (zcta.features[i].properties['zctaID'] == null) continue;
    zctaCodeValues.push(zcta.features[i].properties['zctaID']);

  }
  var zctaResult =  zctaCodeValues.reduce(function(zctaResult, field, index) {
    zctaResult[zctaValues[index]] = field;
    return zctaResult;
  }, {})
  var $zctaChoice = $('.srchDrpZCTA2');
  //$selectedChoice.empty();
  $.each(zctaResult, function (key, value) {
    $zctaChoice.append(
      '<div class = option><input type=radio class="radio srchSlctZCTA2" value='+value+'><label for ='+key+'>' + key +'</label></div>');
      });  

  var ntaValues = []
  var ntaCodeValues = []
  for (var i = 0; i < nta.features.length; i++) {
    if (nta.features[i].properties['nta'] == null) continue;
    ntaValues.push(nta.features[i].properties['nta']);
  }
  for (var i = 0; i < nta.features.length; i++) {
    if (nta.features[i].properties['NTACode'] == null) continue;
    ntaCodeValues.push(nta.features[i].properties['NTACode']);
  }
  var ntaResult =  ntaCodeValues.reduce(function(ntaResult, field, index) {
    ntaResult[ntaValues[index]] = field;
    return ntaResult;
  }, {})
  var $ntaChoice = $('.srchDrpNTA2');
  //$selectedChoice.empty();
  $.each(ntaResult, function (key, value) {
    $ntaChoice.append(
      '<div class = option><input type=radio class="radio srchSlctNTA2" value='+value+'><label for ='+key+'>' + key +'</label></div>');
      }); 

  var ntaBKValues = []
  var ntaBKCodeValues = []
  for (var i = 0; i < ntaBK.features.length; i++) {
    if (ntaBK.features[i].properties['ntaBK'] == null) continue;
    ntaBKValues.push(ntaBK.features[i].properties['ntaBK']);
  }
  for (var i = 0; i < ntaBK.features.length; i++) {
    if (ntaBK.features[i].properties['NTACode'] == null) continue;
    ntaBKCodeValues.push(ntaBK.features[i].properties['NTACode']);
  }
  var ntaBKResult =  ntaBKCodeValues.reduce(function(ntaBKResult, field, index) {
    ntaBKResult[ntaBKValues[index]] = field;
    return ntaBKResult;
  }, {})
  var $ntaBKChoice = $('.srchDrpNTABK2');
  //$selectedChoice.empty();
  $.each(ntaBKResult, function (key, value) {
    $ntaBKChoice.append(
      '<div class = option><input type=radio class="radio srchSlctNTABK2" value='+value+'><label for ='+key+'>' + key +'</label></div>');
      }); 
 
  var ntaQNValues = []
  var ntaQNCodeValues = []
  for (var i = 0; i < ntaQN.features.length; i++) {
    if (ntaQN.features[i].properties['ntaQN'] == null) continue;
    ntaQNValues.push(ntaQN.features[i].properties['ntaQN']);
  }
  for (var i = 0; i < ntaQN.features.length; i++) {
    if (ntaQN.features[i].properties['NTACode'] == null) continue;
    ntaQNCodeValues.push(ntaQN.features[i].properties['NTACode']);
  }
  var ntaQNResult =  ntaQNCodeValues.reduce(function(ntaQNResult, field, index) {
    ntaQNResult[ntaQNValues[index]] = field;
    return ntaQNResult;
  }, {})
  var $ntaQNChoice = $('.srchDrpNTAQN2');
  //$selectedChoice.empty();
  $.each(ntaQNResult, function (key, value) {
    $ntaQNChoice.append(
      '<div class = option><input type=radio class="radio srchSlctNTAQN2" value='+value+'><label for ='+key+'>' + key +'</label></div>');
      });  

  var ntaMNValues = []
  var ntaMNCodeValues = []
  for (var i = 0; i < ntaMN.features.length; i++) {
    if (ntaMN.features[i].properties['ntaMN'] == null) continue;
    ntaMNValues.push(ntaMN.features[i].properties['ntaMN']);
  }
  for (var i = 0; i < ntaMN.features.length; i++) {
    if (ntaMN.features[i].properties['NTACode'] == null) continue;
    ntaMNCodeValues.push(ntaMN.features[i].properties['NTACode']);
  }
  var ntaMNResult =  ntaMNCodeValues.reduce(function(ntaMNResult, field, index) {
    ntaMNResult[ntaMNValues[index]] = field;
    return ntaMNResult;
  }, {})
  var $ntaMNChoice = $('.srchDrpNTAMN2');
  //$selectedChoice.empty();
  $.each(ntaMNResult, function (key, value) {
    $ntaMNChoice.append(
      '<div class = option><input type=radio class="radio srchSlctNTAMN2" value='+value+'><label for ='+key+'>' + key +'</label></div>');
      }); 

  var ntaBXValues = []
  var ntaBXCodeValues = []
  for (var i = 0; i < ntaBX.features.length; i++) {
    if (ntaBX.features[i].properties['ntaBX'] == null) continue;
    ntaBXValues.push(ntaBX.features[i].properties['ntaBX']);
  }
  for (var i = 0; i < ntaBX.features.length; i++) {
    if (ntaBX.features[i].properties['NTACode'] == null) continue;
    ntaBXCodeValues.push(ntaBX.features[i].properties['NTACode']);
  }
  var ntaBXResult =  ntaBXCodeValues.reduce(function(ntaBXResult, field, index) {
    ntaBXResult[ntaBXValues[index]] = field;
    return ntaBXResult;
  }, {})
  var $ntaBXChoice = $('.srchDrpNTABX2');
  //$selectedChoice.empty();
  $.each(ntaBXResult, function (key, value) {
    $ntaBXChoice.append(
      '<div class = option><input type=radio class="radio srchSlctNTABX2" value='+value+'><label for ='+key+'>' + key +'</label></div>');
      });   

var ntaSIValues = []
var ntaSICodeValues = []
for (var i = 0; i < ntaSI.features.length; i++) {
  if (ntaSI.features[i].properties['ntaSI'] == null) continue;
  ntaSIValues.push(ntaSI.features[i].properties['ntaSI']);
}
for (var i = 0; i < ntaSI.features.length; i++) {
  if (ntaSI.features[i].properties['NTACode'] == null) continue;
  ntaSICodeValues.push(ntaSI.features[i].properties['NTACode']);
}
var ntaSIResult =  ntaSICodeValues.reduce(function(ntaSIResult, field, index) {
  ntaSIResult[ntaSIValues[index]] = field;
  return ntaSIResult;
}, {})
var $ntaSIChoice = $('.srchDrpNTASI2');
//$selectedChoice.empty();
$.each(ntaSIResult, function (key, value) {
  $ntaSIChoice.append(
    '<div class = option><input type=radio class="radio srchSlctNTASI2" value='+value+'><label for ='+key+'>' + key +'</label></div>');
    });   

}
geoSrch2();


