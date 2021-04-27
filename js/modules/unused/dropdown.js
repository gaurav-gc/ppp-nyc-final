import { slctCat, slctMet, slctAttr, slctMap } from './keys.js';

//******************DROPDOWN CONDITIONAL SHOW/HIDE******************
var rstDD1 = $('.map1')
  .on('change', function rstDropDown() {
    console.log('test');
    //when user selects another category, other dropdowns get reset so it doesn't confuse the user which map is featured
    function Reset() {
      $('.slctgrps').val(0);
    }
    Reset();
    $(this)
.find('option:selected')
.each(function () {
  var optionValue = $(this).val(); //optionValue = selected Category
  $('.grps')
    .not('.' + optionValue)
    .hide(); //selects and hides all subcategories (i.e. Category = Gender and subcategory = Gender > Male or Female; identifies it by class 'i.e. btype, gender, etc.')
  $('.' + optionValue).show(); // only shows the Subcategory dropdown menu
});
  })
  .change();

//****************** RESET DROPDOWNS FOR 150K, remove LOAN AMOUNT AND ADD BUSINESS COUNT *******************
var changeDD1 = $('select#slctCat').on('change', function () {
  if ($('#slctCat').val() == 'one50k') {
    $("option[value='lnAmt']").remove();
    var myOptions = {
      cnt: 'Business Count',
    };
    var mySelect = $('#slctMet');
    $.each(myOptions, function (val, text) {
      mySelect.append($('<option></option>').val(val).html(text));
    });
  } else {
    $("option[value='cnt']").remove();
    if ($("#slctMet option[value='lnAmt']").length != 0) {
    } else {
      var myOptions = {
        lnAmt: 'Loan Amount',
      };
      var mySelect = $('#slctMet');
      $.each(myOptions, function (val, text) {
        mySelect.append($('<option></option>').val(val).html(text));
      });
    }
  }
});


var changeDD2 = $('select#slctCat2').on('change', function () {
  if ($('#slctCat2').val() == 'one50k2') {
    $("option[value='lnAmt2']").remove();
    var myOptions = {
      cnt2: 'Business Count',
    };
    var mySelect = $('#slctMet2');
    $.each(myOptions, function (val, text) {
      mySelect.append($('<option></option>').val(val).html(text));
    });
  } else {
    $("option[value='cnt2']").remove();
    if ($("#slctMet2 option[value='lnAmt2']").length != 0) {
    } else {
      var myOptions = {
        lnAmt2: 'Loan Amount',
      };
      var mySelect = $('#slctMet2');
      $.each(myOptions, function (val, text) {
        mySelect.append($('<option></option>').val(val).html(text));
      });
    }
  }
});

export { rstDD1, changeDD1, mapSrchBar, changeDD2 };
