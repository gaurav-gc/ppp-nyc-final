import {bldDrpDwn2} from './../dropdown.js';

bldDrpDwn2();

var slctCat2, slctMet2, slctAttr2, slctMap2, slctNTAMap2, slctNTARatio2, infoKey2, mapKey2;

//selects all dropdowns with the class selected
const selectedAll2 = document.querySelectorAll('.selected2');

//hides Category, NTA Groups, and NTA Maps dropdowns
$('.grpCat2, .grpNTAMap2, .grpNTARatio2, .grpMet2, .grpMap2').hide();

selectedAll2.forEach((selected) => {
  const optionsContainer2 = selected.previousElementSibling;
  const optionsList2 = optionsContainer2.querySelectorAll('.option');
  selected.addEventListener('click', () => {
    //sets the class Active when clicked (ref. dropdown.scss)
    if (optionsContainer2.classList.contains('active')) {
      optionsContainer2.classList.remove('active');
    } else {
      let currentActive = document.querySelector('.options-container.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      optionsContainer2.classList.add('active');
    }
    //Sets value of selected class based on selection
    if (optionsContainer2.classList.contains('drpCat2')) {
      optionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          slctCat2 = o.querySelector('.slctCat2').value;
          selected.setAttribute('value', slctCat2);
          //Hides all categories that are not selected
          function toggleDisplay2() {
            $('.grpCat2')
              .not('#' + slctCat2 + 2)
              .hide(); //selects and hides all subcategories (i.e. Category = Gender and subcategory = Gender > Male or Female; identifies it by class 'i.e. btype, gender, etc.')
            $('#' + slctCat2 + 2).show(); // only shows the Subcategory dropdown menu
            //Hiding NTA Maps & Ratio Groups when a new category is selected
            $('.grpMap2, .grpMet2').show();
            $('.grpNTAMap2, .grpNTARatio2').hide();

            //resets category dropdown
        
            //resets metric dropdowns
            $('.grpCat2 .selected2').attr('value', '').text('Please Select');
            $('.grpMet2 .selected2').attr('value', '').text('Please Select');
            $('.grpMap2 .selected2').attr('value', '').text('Please Select');
            $('.grpNTAMap2 .selected2').attr('value', '').text('Please Select');
            $('.grpNTARatio2 .selected2').attr('value', '').text('Please Select');
            slctAttr2 = '';
            slctMet2 = '';
            slctMap2 = '';
            slctNTARatio2 = '';
            slctNTAMap2 = '';
          }
          toggleDisplay2();
        });
      });
    }

    if (optionsContainer2.classList.contains('drpMet2')) {
      optionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          slctMet2 = o.querySelector('.slctMet2').value;
          selected.setAttribute('value', slctMet2);
        });
      });
    }

    if (optionsContainer2.classList.contains('drpAttr2')) {
      optionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          slctAttr2 = o.querySelector('.slctAttr2').value;
          selected.setAttribute('value', slctAttr2);
        });
      });
    }

    if (optionsContainer2.classList.contains('drpMap2')) {
      optionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          slctMap2 = o.querySelector('.slctMap2').value;
          selected.setAttribute('value', slctMap2);
          function toggleDisplay2() {
            if (slctMap2 === 'nta') {
              $('#nta2, #ntaRatio2').show(); 
            } else {
              $('.grpNTAMap2, .grpNTARatio2').not('#' + slctMap2).hide(); 
              $('.grpNTAMap2 .selected2').attr('value', '').text('Select a NTA Geo');
              $('.grpNTARatio2 .selected2').attr('value', '').text('Select a Ratio');
              slctNTARatio2 = '';
              slctNTAMap2 = '';
            }
          }
          toggleDisplay2();
        });
      });
    }

    if (optionsContainer2.classList.contains('drpNTARatio2')) {
      optionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          slctNTARatio2 = o.querySelector('.slctNTARatio2').value;
          selected.setAttribute('value', slctNTARatio2);
        });
      });
    }

    
    if (optionsContainer2.classList.contains('drpNTAMap2')) {
      optionsList2.forEach((o) => {
        o.addEventListener('click', () => {
          slctNTAMap2 = o.querySelector('.slctNTAMap2').value;
          selected.setAttribute('value', slctNTAMap2);
        });
      });
    }

  });

  //Makes Selection the Selected Choice and Removes Active Class
  optionsList2.forEach((o) => {
    o.addEventListener('click', () => {
      selected.innerHTML = o.querySelector('label').innerHTML;
      optionsContainer2.classList.remove('active');
    });
  });
});

//Create Keys
$('.slctGrps2,.grpMet2,.grpCat2,.grpMap2, .grpNTAMap2, .grpNTARatio2').on('click', function () {
  if (slctNTARatio2) {
    infoKey2 = slctCat2 + '_' + slctMet2 + '_' + slctNTARatio2 + '_' + slctAttr2;
  } else {
    infoKey2 = slctCat2 + '_' + slctMet2 + '_' + slctAttr2;
  }
});

export { slctCat2, slctMet2, slctAttr2, slctMap2, slctNTAMap2, slctNTARatio2, infoKey2, mapKey2, selectedAll2 };
