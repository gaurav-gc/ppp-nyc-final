/*
import {srchSlctMap} from './search-bar.js';


export {toggleSrch};


console.log(values);

const srchSelected = document.querySelectorAll('.srchSelected'); 


 //for the conditional dropdown menu
 const srchSelected = document.querySelectorAll('.srchBoxSelected');  
 srchSelected.forEach((selected) => {
          const optionsContainer2 = selected.previousElementSibling;
          const optionsList2 = optionsContainer2.querySelectorAll('.option');
          selected.addEventListener('click', () => {
            
            if (optionsContainer2.classList.contains('active')) {
              optionsContainer2.classList.remove('active');
            } else {
              let currentActive2 = document.querySelector(
                '.options-container.active'
              );
              if (currentActive2) {
                currentActive2.classList.remove('active');
              }
              optionsContainer2.classList.add('active');
            }
          });
          optionsList2.forEach((o) => {
            o.addEventListener('click', () => {
              var srchBox = o.querySelector('.srchBox').value;
              selected.setAttribute('value', srchBox);
              selected.innerHTML = o.querySelector('label').innerHTML;
              optionsContainer2.classList.remove('active');
            });
          });
    });


    if (optionsContainer.classList.contains('srchBox')) {
      optionsList.forEach((o) => {
        o.addEventListener('click', () => {
          console.log("test");
          var srchSlctBox = o.querySelector('.srchSlctBox').value;
          selected.setAttribute('value', srchSlctBox);
        });
      });
    }

    var values = []; 
function toggleSrch() {
      switch (srchSlctMap) {

        case 'nta':
          for (var i = 0; i < nta.features.length; i++) {
            if (nta.features[i].properties['nta'] == null) continue;
            values.push(nta.features[i].properties['nta']);
          }
          break;
        case 'ntaBK':
          for (var i = 0; i < ntaBK.features.length; i++) {
            if (ntaBK.features[i].properties['ntaBK'] == null) continue;
            values.push(ntaBK.features[i].properties['ntaBK']);
          }
          break;
        case 'ntaQN':
          for (var i = 0; i < ntaQN.features.length; i++) {
            if (ntaQN.features[i].properties['ntaQN'] == null) continue;
            values.push(ntaQN.features[i].properties['ntaQN']);
          }
          break;
        case 'ntaBX':
          for (var i = 0; i < ntaBX.features.length; i++) {
            if (ntaBX.features[i].properties['ntaBX'] == null) continue;
            values.push(ntaBX.features[i].properties['ntaBX']);
          }
          break;
        case 'ntaMN':
          for (var i = 0; i < ntaMN.features.length; i++) {
            if (ntaMN.features[i].properties['ntaMN'] == null) continue;
            values.push(ntaMN.features[i].properties['ntaMN']);
          }
          break;
        case 'ntaSI':
          for (var i = 0; i < ntaSI.features.length; i++) {
            if (ntaSI.features[i].properties['ntaSI'] == null) continue;
            values.push(ntaSI.features[i].properties['ntaSI']);
          }
          break;
      }
    }
    toggleSrch();


    <div class="srchMetGrps">
    <label for="">Select a Metric</label>
    <div class="select-box">
      <div class="options-container srchDrpMet" id="srchSlctMet">
        <div class="option">
          <input type="radio" class="radio srchSlctMet" value="jbRt" />
          <label for="jbrt">Jobs Retained</label>
        </div>
        <div class="option" id="lnAmt">
          <input type="radio" class="radio srchSlctMet" value="lnAmt" />
          <label for="lnAmt">Loan Amount</label>
        </div>
        <div class="option" id="cnt">
          <input type="radio" class="radio srchSlctMet" value="cnt" />
          <label for="cnt">Business Count</label>
        </div>
      </div>
      <!-- .options-container -->
      <div class="srchSelected">Select a Metric</div>
    </div>
  </div>

  // Hide/Show CongDist/ZipCode Search Don't know what this does
var mapSrchBar = $('.map1').on('change', function mapSrch() {
  if (slctCat && slctMet && slctAttr && slctMap) {
    $('#srchReset').show();
    if (slctMap == 'cd') {
      $('#srchCongDist').show();
      $('#srchZipCode').hide();
    } else {
      $('#srchZipCode').show();
      $('#srchCongDist').hide();
    }
  } else {
    $('#srchCongDist').hide();
    $('#srchZipCode').hide();
  }
});

$('.selector2 select')
  .on('change', function () {
    function Reset() {
      $('.slctgrps2').val(0);
    }
    Reset();
    $(this)
      .find('option:selected')
      .each(function () {
        var optionValue = $(this).val();
        console.log(optionValue);
        if (optionValue) {
          $('.category2 .grps2')
            .not('.' + optionValue)
            .hide();
          $('.' + optionValue).show();
        } else {
          $('.category2 .grps2').hide();
        }
      });
  })
  .change();

  //Removes legend when a new category is selected
//var rmvLegend = $('#slctCat').on('change', function removeLegend() {
  //map1.removeControl(legend);
  //console.log("canIHazRemove?");


//});

  if (srchOptionsContainer.classList.contains('srchDrpNTAMap')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTAMap = o.querySelector('.srchSlctNTAMap').value;
          selected.setAttribute('value', srchSlctNTAMap);
        });
      });
    }

    if (srchOptionsContainer.classList.contains('srchDrpNTARatio')) {
      srchOptionsList.forEach((o) => {
        o.addEventListener('click', () => {
          srchSlctNTARatio = o.querySelector('.srchSlctNTARatio').value;
          selected.setAttribute('value', srchSlctNTARatio);
        });
      });
    }
  // Conditional Dropdown
  // 1) Get the selected value from slctCat --> 'chosen' [x]
  // 2a) hide all div [x]
  // 2b) chosen --> determines which get unhine (i.e. if chosen = 'btype' )

  //Reset When New Category is Selected
  selectedAll.forEach((reset) => {
    if (optionsContainer.classList.contains('map1')) {
      optionsList.forEach((o) => {
        o.addEventListener('click', () => {
          reset.innerHTML = test;
        });
      });
    }
  });
  
  
  
  <div class="option">
                      <input type="radio" class="radio slctAttr" value="corp" />
                      <label for="corp">Corporation</label>
                    </div>
                    <div class="option">
                      <input type="radio" class="radio slctAttr" value="llc" />
                      <label for="llc">Limited Liability Corporation</label>
                    </div>
                    <div class="option">
                      <input type="radio" class="radio slctAttr" value="semp" />
                      <label for="slfemp">Self-Employed</label>
                    </div>
                    <div class="option">
                      <input
                        type="radio"
                        class="radio slctAttr"
                        value="indcon"
                      />
                      <label for="indcon">Independent Contractor</label>
                    </div>
                    <div class="option">
                      <input type="radio" class="radio slctAttr" value="sp" />
                      <label for="sp">Sole Proprietorship</label>
                    </div>
                    <div class="option">
                      <input type="radio" class="radio slctAttr" value="scorp" />
                      <label for="scorp">S Corporation</label>
                    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  */
  */