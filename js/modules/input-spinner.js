$(function(){
  document.getElementById('bs-switch-1').switchButton({
    onlabel: "Equal Interval",
    offlabel: "Quantile",
    onstyle: "info", 
    offstyle: "warning",
    size: "mini",
    width: "300"
});
});
$(function(){
  document.getElementById('bs-switch-2').switchButton({
    onlabel: "Equal Interval",
    offlabel: "Quantile",
    onstyle: "info", 
    offstyle: "warning",
    size: "mini",
    width: "300"
});
});

//CHANGE NUMBER OF CLASSES

var $valueOnChange;
var $valueOnChange2;

$('#numClass').inputSpinner({
  buttonsClass: "chngNumClasses",
  buttonsOnly: true,
});

$('#numClass').on("change", function (event) {
  $valueOnChange = ($(event.target).val())
  console.log($valueOnChange);
})

$('#numClass2').inputSpinner({
  buttonsClass: "chngNumClasses",
  buttonsOnly: true,
});


 $('#numClass2').on("change", function (event) {
  $valueOnChange2 = ($(event.target).val())
  console.log($valueOnChange2);
}) 

export {$valueOnChange, $valueOnChange2};