import { slctMap, slctCat, slctAttr, slctMet } from './keys-dropdown.js'

var seqMultiHueVls = ['BuGn', 'BuPu', 'GnBu', 'OrRd', 'PuBu','PuBuGn', 'PuRd', 'RdPu', 'YlGn', 'YlGnBu', 'YlOrBr', 'YlOrRd']
var seqSingleHueVls = ['Blues', 'Greens', 'Oranges', 'Purples', 'Reds']
var divHueVls = ['BrBG', 'PRGn', 'PuOr', 'RdBu', 'RdYlGn']

function bldClrBtns() {
  var seqMultiHue = $('.seqMultiHue');

  $.each(seqMultiHueVls, function (index, value){
    seqMultiHue.append(
      '<button type="button" class="btn btn-clr chngClr btnClr '+value+'" value="'+value+'"></button>'
    )
  });

  var seqSingleHue = $('.seqSingleHue');

  $.each(seqSingleHueVls, function (index, value){
    seqSingleHue.append(
      '<button type="button" class="btn btn-clr chngClr btnClr '+value+'" value="'+value+'"></button>'
    )
  });

  var divHue = $('.divHue');

  $.each(divHueVls, function (index, value){
    divHue.append(
      '<button type="button" class="btn btn-clr chngClr btnClr '+value+'" value="'+value+'"></button>'
    )
  });
}
bldClrBtns();

//Active Color Button on refresh
$(function() {
  $('.BuGn').addClass('btn-active');
});



//Button styling when user selects/hovers
$('.btnClr').on('click', function() {
  $(this).addClass('btn-active').removeClass('btn-not-active btn-active-hover');
  $('.btnClr').not($(this)).addClass('btn-not-active');
  $('.btnClr').not($(this)).removeClass('btn-active');
});

$('.btnClr').on('mouseenter', function() {
  $(this).addClass('btn-hover');
  $('.btnClr').not(this).addClass('btn-not-hover');
  if($(this).hasClass('btn-not-active')) {
    $(this).removeClass('btn-not-active');
    $(this).addClass('btn-active-hover');
  }
});

$('.btnClr').on('mouseleave', function() {
  $(this).removeClass('btn-hover');
  $('.btnClr').not(this).removeClass('btn-not-hover');
  if($(this).hasClass('btn-active-hover')) {
    $(this).removeClass('btn-active-hover');
    $(this).addClass('btn-not-active');
  }
});


//  $(this).removeClass('tstClr');
 // if(!$('button').hasClass('btn-active')) {
 //   $('button').not($(this)).addClass('btn-not-active');
 // }
//  $(this).removeClass('btn-not-active');
 // $('.btnClr').not(this).removeClass('')

 // if(!$((elems)).hasClass('btn-active')) {
//  $(this).addClass('tstClr');
//  }
 // $('.btnClr').not($(this)).removeClass('btn-not-active');
 // $(this).addClass('btn-not-active')


var elems = document.getElementsByClassName("btn");

function disableBtn() {
  if (slctMet && slctCat && slctAttr && slctMap) {
    for(var i = 0; i < elems.length; i++) {
      elems[i].disabled = false;
      console.log("helllo");
  }
  } else {
    console.log("noooo");
    for(var i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
  }
  }
   
}


//disableBtn();
//var styleBtn = btnStyle();

export { seqMultiHueVls, seqSingleHueVls, divHueVls };
