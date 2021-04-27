import {seqMultiHueVls, seqSingleHueVls, divHueVls} from './../map-one/btnstyle.js'


function bldClrBtns2() {
  var seqMultiHue = $('.seqMultiHue2');

  $.each(seqMultiHueVls, function (index, value){
    seqMultiHue.append(
      '<button type="button" class="btn btn-clr chngClr2 btnClr2 '+value+'2" value="'+value+'"></button>'
    )
  });

  var seqSingleHue = $('.seqSingleHue2');

  $.each(seqSingleHueVls, function (index, value){
    seqSingleHue.append(
      '<button type="button" class="btn btn-clr chngClr2 btnClr2 '+value+'2" value="'+value+'"></button>'
    )
  });

  var divHue = $('.divHue2');

  $.each(divHueVls, function (index, value){
    divHue.append(
      '<button type="button" class="btn btn-clr chngClr2 btnClr2 '+value+'2" value="'+value+'"></button>'
    )
  });
}
bldClrBtns2();

//Active Color Button on refresh
$(function() {
  $('.BuGn2').addClass('btn-active');
});


//Button styling when user selects/hovers
$('.btnClr2').on('click', function() {
  $(this).addClass('btn-active').removeClass('btn-not-active btn-active-hover');
  $('.btnClr2').not($(this)).addClass('btn-not-active');
  $('.btnClr2').not($(this)).removeClass('btn-active');
});

$('.btnClr2').on('mouseenter', function() {
  $(this).addClass('btn-hover');
  $('.btnClr2').not(this).addClass('btn-not-hover');
  if($(this).hasClass('btn-not-active')) {
    $(this).removeClass('btn-not-active');
    $(this).addClass('btn-active-hover');
  }
});

$('.btnClr2').on('mouseleave', function() {
  $(this).removeClass('btn-hover');
  $('.btnClr2').not(this).removeClass('btn-not-hover');
  if($(this).hasClass('btn-active-hover')) {
    $(this).removeClass('btn-active-hover');
    $(this).addClass('btn-not-active');
  }
});

/*
function disableBtn2() {
  if (slctMet2 && slctCat2 && slctAttr2 && slctMap2) {
    for(var i = 0; i < elems.length; i++) {
      elems[i].disabled = false;
  }
  } else {
    for(var i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
  }
  }
   
}
//var dsbleBtn = disableBtn2();
var styleBtn2 = btnStyle2();
*/
//export { styleBtn2};
