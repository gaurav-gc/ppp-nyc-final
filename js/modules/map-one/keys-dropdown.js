import {bldDrpDwn} from './../dropdown.js';

bldDrpDwn();

var slctCat, slctMet, slctAttr, slctMap, slctNTAMap, slctNTARatio, infoKey, mapkey;

//selects all dropdowns with the class selected
const selectedAll = document.querySelectorAll('.selected');

//hides Category, NTA Groups, and NTA Maps dropdowns
$('.grpCat, .grpNTAMap, .grpNTARatio, .grpMet, .grpMap').hide();

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const optionsList = optionsContainer.querySelectorAll('.option');
  selected.addEventListener('click', () => {
    //sets the class Active when clicked (ref. dropdown.scss)
    if (optionsContainer.classList.contains('active')) {
      optionsContainer.classList.remove('active');
    } else {
      let currentActive = document.querySelector('.options-container.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      optionsContainer.classList.add('active');
    }
    //Sets value of selected class based on selection
    if (optionsContainer.classList.contains('drpCat')) {
      optionsList.forEach((o) => {
        o.addEventListener('click', () => {
          slctCat = o.querySelector('.slctCat').value;
          selected.setAttribute('value', slctCat);
          //Hides all categories that are not selected
          function toggleDisplay() {
            $('.grpCat')
              .not('#' + slctCat)
              .hide(); //selects and hides all subcategories (i.e. Category = Gender and subcategory = Gender > Male or Female; identifies it by class 'i.e. btype, gender, etc.')
            $('#' + slctCat).show(); // only shows the Subcategory dropdown menu
            //Hiding NTA Maps & Ratio Groups when a new category is selected
            $('.grpMap, .grpMet').show();
            $('.grpNTAMap, .grpNTARatio').hide();

            //resets category dropdown
        
            //resets metric dropdowns
            $('.grpCat .selected').attr('value', '').text('Please Select');
            $('.grpMet .selected').attr('value', '').text('Please Select');
            $('.grpMap .selected').attr('value', '').text('Please Select');
            $('.grpNTAMap .selected').attr('value', '').text('Please Select');
            $('.grpNTARatio .selected').attr('value', '').text('Please Select');
            slctAttr = '';
            slctMet = '';
            slctMap = '';
            slctNTARatio = '';
            slctNTAMap = '';
          }
          toggleDisplay()
        });
      });
    }

    if (optionsContainer.classList.contains('drpMet')) {
      optionsList.forEach((o) => {
        o.addEventListener('click', () => {
          slctMet = o.querySelector('.slctMet').value;
          selected.setAttribute('value', slctMet);
        });
      });
    }

    if (optionsContainer.classList.contains('drpAttr')) {
      optionsList.forEach((o) => {
        o.addEventListener('click', () => {
          slctAttr = o.querySelector('.slctAttr').value;
          selected.setAttribute('value', slctAttr);
        });
      });
    }

    if (optionsContainer.classList.contains('drpMap')) {
      optionsList.forEach((o) => {
        o.addEventListener('click', () => {
          slctMap = o.querySelector('.slctMap').value;
          selected.setAttribute('value', slctMap);
          function toggleDisplay() {
            if (slctMap === 'nta') {
              $('#nta, #ntaRatio').show(); 
            } else {
              $('.grpNTAMap, .grpNTARatio').not('#' + slctMap).hide(); 
              $('.grpNTAMap .selected').attr('value', '').text('Select a NTA Geo');
              $('.grpNTARatio .selected').attr('value', '').text('Select a Ratio');
              slctNTARatio = '';
              slctNTAMap = '';
            }
          }
          toggleDisplay();
        });
      });
    }

    if (optionsContainer.classList.contains('drpNTARatio')) {
      optionsList.forEach((o) => {
        o.addEventListener('click', () => {
          slctNTARatio = o.querySelector('.slctNTARatio').value;
          selected.setAttribute('value', slctNTARatio);
        });
      });
    }

    
    if (optionsContainer.classList.contains('drpNTAMap')) {
      optionsList.forEach((o) => {
        o.addEventListener('click', () => {
          slctNTAMap = o.querySelector('.slctNTAMap').value;
          selected.setAttribute('value', slctNTAMap);
        });
      });
    }

  });

  //Not sure what this does
  optionsList.forEach((o) => {
    o.addEventListener('click', () => {
      selected.innerHTML = o.querySelector('label').innerHTML;
      optionsContainer.classList.remove('active');
    });
  });
});

//Create Keys
$('.slctGrps,.grpMet,.grpCat,.grpMap, .grpNTAMap, .grpNTARatio').on('click', function () {
  if (slctNTARatio) {
    infoKey = slctCat + '_' + slctMet + '_' + slctNTARatio + '_' + slctAttr;
  } else {
    infoKey = slctCat + '_' + slctMet + '_' + slctAttr;
  }
});

export { slctCat, slctMet, slctAttr, slctMap, slctNTAMap, slctNTARatio, infoKey, mapkey, selectedAll };
