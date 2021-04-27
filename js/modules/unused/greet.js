const getGreeting = (name) => `Hello ${name}`;

export default getGreeting;



let btns = getElementsByClassName("btnClr");
btns.addEventListner("mouseenter", function(e) {
  $('.btnClr').not($(this)).addClass('testClr');
})

btns.addEventListner("mouseover", function(e) {
  $('.btnClr').not($(this)).removeClass('testClr');
})



function btnStyle() {
  $('.btnClr').mouseover(function () {
    $('.btnClr').not($(this)).addClass('testClr');
  });

  $('.btnClr').mouseout(function () {
    $('.btnClr').not($(this)).removeClass('testClr');
  });

  //source: https://stackoverflow.com/questions/55873688/how-to-change-button-colors-on-click-with-multiple-buttons/55873783
  $('.btnClr').click(function () {
    $(this).removeClass('active');
    $('.btnClr').not($(this)).addClass('active');
  });

  $('.chngClassify').click(function () {
    $('.chngClassify').removeClass('active');
    $(this).addClass('active');
  });

  $('.chngNumClasses').click(function () {
    $('.chngNumClasses').removeClass('active');
    $(this).addClass('active');
  });
}