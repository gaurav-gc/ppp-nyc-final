import { selectInfoMet, resetInfo } from "./map-one/info-control.js";
import {selectMap1} from "./map-one/create-map.js";

var options_before = {
  showButtons: true,
  showProgress: true,
  showBullets: false,
  hidePrev: true,
  steps: [
    {  
    element: document.querySelector('.catSlct'),
    intro: "step1",
    position: 'right',
    }, 
    {
      element: document.querySelector('.btypewlk'),
      intro: "step2",
      position: 'right'
    },
    {
      element: document.querySelector('.catSlct'),
      intro: "step3",
      position: 'right'
    },
    {
      element: document.querySelector('.metSlct'),
      intro: "step4",
      position: 'right'
    },
    {
      element: document.querySelector('.jbrt'),
      intro: "step5",
      position: 'right'
    },
    {
      element: document.querySelector('.metSlct'),
      intro: "step6",
      position: 'right'
    },
    {
      element: document.querySelector('.btypeSlct'),
      intro: "step7",
      position: 'right'
    },
    {
      element: document.querySelector('.corpwlk'),
      intro: "step8",
      position: 'right'
    },
    {
      element: document.querySelector('.btypeSlct'),
      intro: "step9",
      position: 'right'
    },
    {
      element: document.querySelector('.mapSlct'),
      intro: "step10",
      position: 'right'
    }
  ]
}
//selects all dropdowns with the class selected
var intro = introJs();

 
function startObjectsIntro() {
  intro.setOptions(options_before);
  const selectedAll = document.querySelectorAll('.selected');

  intro.start().onbeforechange(function () {
    document.querySelector(".introjs-prevbutton").style.display =
    "none";
    selectedAll.forEach((selected) => {
      const optionsContainer = selected.previousElementSibling;
      const optionsList = optionsContainer.querySelectorAll('.option');
      if (intro._currentStep == "1") {
        if (optionsContainer.classList.contains('drpCat')) {
          optionsContainer.classList.add('active');
          optionsList.forEach((o) => {
            var catSlct
              catSlct = optionsList[0].querySelector('.slctCat').value;
              selected.setAttribute('value', catSlct);
              })
          }
        }
      if (intro._currentStep == "2") {
        if (optionsContainer.classList.contains('drpCat')) {
          optionsList.forEach((o) => {
          selected.innerHTML = optionsList[0].querySelector('label').innerHTML;
          })
          optionsContainer.classList.remove('active');
         }
        }
         if (intro._currentStep == "3") {
         $('.grpMet').show();
          $('#btype').show();
          $('.grpMap').show();
      }
      if (intro._currentStep == "4") {
        if (optionsContainer.classList.contains('drpMet')) {
          optionsContainer.classList.add('active');
          optionsList.forEach((o) => {
            var metSlct
            metSlct = optionsList[0].querySelector('.slctMet').value;
              selected.setAttribute('value', metSlct);
              selected.innerHTML = optionsList[0].querySelector('label').innerHTML;
              })
          } 
      }
      if (intro._currentStep == "5") {
        if (optionsContainer.classList.contains('drpMet')) {
          optionsList.forEach((o) => {
          selected.innerHTML = optionsList[0].querySelector('label').innerHTML;
          })
          optionsContainer.classList.remove('active');
         }
      }
      if (intro._currentStep == "7") {
        if (optionsContainer.classList.contains('drpAttr')) {
          optionsContainer.classList.add('active');
          optionsList.forEach((o) => {
            var attrSlct
            attrSlct = optionsList[0].querySelector('.slctAttr').value;
              selected.setAttribute('value', attrSlct);
              selected.innerHTML = optionsList[0].querySelector('label').innerHTML;
              })
          } 
      }
      if (intro._currentStep == "8") {
        if (optionsContainer.classList.contains('drpAttr')) {
          optionsList.forEach((o) => {
          selected.innerHTML = optionsList[0].querySelector('label').innerHTML;
          })
          optionsContainer.classList.remove('active');
         }
      }
    })
  var doneTour = localStorage.getItem('doneTour') === 'yeah!';
  intro.oncomplete(function() {
    localStorage.setItem('doneTour', 'yeah!');
  })
})

intro.onafterchange(function(targetElement) {
  console.log(targetElement.id);
  switch (targetElement.id){
      case "b1":
          setTimeout(function(){
            var element = document.getElementsByClassName('introjs-tooltip');
            var boxArrow = document.getElementsByClassName('introjs-arrow top');
            var numberLayer = document.getElementsByClassName('introjs-helperNumberLayer');
            element.item(0).setAttribute("style", "top:210px;");
            boxArrow.item(0).setAttribute("style", "display: block");
            numberLayer.item(0).setAttribute("style", "left: 0; top:0;");
          },600)
       } 
  });
};
startObjectsIntro();

