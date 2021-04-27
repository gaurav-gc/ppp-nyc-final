//SEARCH BAR
var arZipCode = [];
var arCongDist = [];

var arZipCode2 = [];
var arCongDist2 = [];
//****************** MAP1 SEARCH CONTROL **********************************
//source: https://stackoverflow.com/questions/7617373/limit-results-in-jquery-ui-autocomplete
function autoComplete() {
  selectInfoMet();
  if (slctMap == 'cd') {
    arCongDist.sort(function (a, b) {
      return a - b;
    });
    $('#txtFindCongDist').autocomplete({
      source: function (request, response) {
        var results = $.ui.autocomplete.filter(arCongDist, request.term);
        response(results.slice(0, 5));
      },
    });
  } else {
    arZipCode.sort(function (a, b) {
      return a - b;
    });
    $('#txtFindZipCode').autocomplete({
      source: function (request, response) {
        var results = $.ui.autocomplete.filter(arZipCode, request.term);
        response(results.slice(0, 5));
      },
    });
  }
}

var mapLyr;
var armapLyr;
var lyrSearch;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Random Color Generator source: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  $('#colorpad').css('background-color', getRandomColor());
}
setRandomColor();

function clrMap() {
  for (i = 0; i < srchVar.length - 1; i++) {
    var val = srchVar[i];
    var lyr = returnCongDistById('congdist', val);
    lyr.setStyle({
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    });
  }
}
//RESET BUTTON
$('#btnReset').click(function () {
  // var val = $("#txtFindCongDist").val();
  clrMap();
  srchVar.length = 0;
  console.log('Hey THUR');
});
//******************CONGRESSIONAL DISTRICTS **********************************
function returnCongDistById(att, val) {
  var arCongDist = armapLyr;
  for (i = 0; i < arCongDist.length - 1; i++) {
    var ftrVal = arCongDist[i].feature.properties[att];
    if (ftrVal == val) {
      return arCongDist[i];
    }
  }
  return false;
}
$('#btnFindCongDist').click(function () {
  var val = $('#txtFindCongDist').val();
  var lyr = returnCongDistById('congdist', val);
  srchVar.push(lyr.feature.properties[infoMapNum]);
  console.log(srchVar);
  selectInfoMet();
  if (lyr) {
    if (lyrSearch) {
      lyrSearch.remove();
    }
    lyr.setStyle({
      color: getRandomColor(),
      weight: 3,
    });
    //lyrSearch = L.geoJSON(lyr.toGeoJSON(), {style:{color:'red', weight:10, opacity:0.5, fillOpacity:0}}).addTo(map1);
    var att = lyr.feature.properties;
    $('#srchCongDistData').html(
      "<h4 class='text-center'>Attributes</h4><h5>Loan Amont: " +
        att[infoKey] +
        '</h5><h5>Jobs Retained: ' +
        att[infoKey] +
        '</h5>'
    );
    $('#srchCongDistError').html('');
  } else {
    $('#srchCongDistError').html('**** Congressional District not found ****');
  }
});

$('#lblCongDist').click(function () {
  $('#srchCongDistData').toggle();
});

function testCongDist(id) {
  if (arCongDist.indexOf(id) < 0) {
    $('#srchCongDist').addClass('has-error');
    $('#srchCongDistError').html('*** CONGRESSIONAL DISTRICT NOT FOUND ***');
    $('#btnFindCongDist').attr('disabled', true);
  } else {
    $('#srchCongDist').removeClass('has-error');
    $('#srchCongDistError').html('');
    $('#btnFindCongDist').attr('disabled', false);
  }
}
$('#txtFindCongDist').on('keyup paste', function () {
  var id = $('#txtFindCongDist').val();
  testCongDist(id);
});
//******************  ZIPCODE  **********************************
function returnZipCodeById(att, val) {
  var arZipCode = armapLyr;
  for (i = 0; i < arZipCode.length - 1; i++) {
    var ftrVal = arZipCode[i].feature.properties[att];
    if (ftrVal == val) {
      return arZipCode[i];
    }
  }
  return false;
}
$('#btnFindZipCode').click(function () {
  var val = $('#txtFindZipCode').val();
  var lyr = returnZipCodeById('ZIPCODE', val);
  selectInfoMet();
  srchVar.push(lyr.feature.properties[infoMapNum]);
  console.log(srchVar);
  if (lyr) {
    if (lyrSearch) {
      lyrSearch.remove();
    }
    lyr.setStyle({
      color: getRandomColor(), //RANDOM COLOR
      weight: 3,
    });
    var att = lyr.feature.properties;
    $('#srchZipCodeData').html(
      "<h4 class='text-center'>Attributes</h4><h5>Loan Amont: " +
        att[infoKey] +
        '</h5><h5>Jobs Retained: ' +
        att[infoKey] +
        '</h5>'
    );
    $('#srchZipCodeError').html('');
  } else {
    $('#srchZipCodeError').html('**** Congressional District not found ****');
  }
});

$('#lblZipCode').click(function () {
  $('#srchZipCodeData').toggle();
});

function testZipCode(id) {
  if (arZipCode.indexOf(id) < 0) {
    $('#srchZipCode').addClass('has-error');
    $('#srchZipCodeError').html('*** ZIP CODE NOT FOUND ***');
    $('#btnFindZipCode').attr('disabled', true);
  } else {
    $('#srchZipCode').removeClass('has-error');
    $('#srchZipCodeError').html('');
    $('#btnFindZipCode').attr('disabled', false);
  }
}
$('#txtFindZipCode').on('keyup paste', function () {
  var id = $('#txtFindZipCode').val();
  testZipCode(id);
});



      
  //Reset When New Category is Selected
  srchSelectedAll.forEach((reset) => {
    if (srchOptionsContainer.classList.contains('map1')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          reset.innerHTML = test;
        });
      });
    }
  });