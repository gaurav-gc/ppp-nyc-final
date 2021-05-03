var infoParTxt = "<p>The Paycheck Protection Program (PPP) is a loan designed to provide a direct incentive for small businesses to keep their workers on payroll and was established through the Coronavirus Aid, Relief, and Economic Security (CARES) Act on March 27, 2020. The PPP loan level Data for the maps are derived from two datasets from the Small Business Administration (SBA) for loans lent through March XX, 2021. <br><br>.</p>"
const $infoPar = $('#wrapper, #wrapper2');
function infoPar () {
  $infoPar.append(infoParTxt);
}
infoPar();



var infoCatValues = ['Business Type', 'Gender', 'Nonprofit', 'Lender', 'Veteran', 'Race']
var infoCatCodes = ['btype', 'gender', 'nonprofit', 'lender', 'vet', 'race']

var infoCatIcon = ["fas fa-building fa-fw hvr-icon", "fas fa-transgender fa-fw hvr-icon", "fas fa-hands-helping fa-fw hvr-icon", "fas fa-hand-holding-usd fa-fw hvr-icon", "fas fa-flag-usa fa-fw hvr-icon", "fas fa-users fa-fw hvr-icon"]

var infoCatResult =  infoCatValues.reduce(function(infoCatResult, field, index) {
  infoCatResult[infoCatCodes[index]] = field;
  return infoCatResult;
}, {})

var btypeDef = "In NYC, PPP loan recipients represented 20 different business types (less than 1 percent of recipients leaving their business type as unanswered). Corporations, LLCs, and S-Corp businesses received 87 percent of all PPP loans. Corporations received the most amount of PPP loans, over $1.7 billion, and represented the largest share of all businesses, 44 percent, or over 21 thousand."
var genderDef = "66 percent of PPP loan recipients declined to declare whether their business is either female or male owned. However, of the 34 percent that did declare, 8 percent of businesses are male owned, receiving over $1 billion (26 percent of total PPP loan funding in NYC), and 8 percent are female owned, receiving over $305 million (or 7 percent of total PPP loan funding in NYC)."
var nonprofitDef = "In NYC, only 3 percent of all PPP loan recipients identified as a nonprofit - approximately receiving $132 million in PPP loans."
var lenderDef = "In NYC, PPP loan recipients received loans from 569 different lenders. The top 6 lenders that loaned 62 percent of all NYC businesses and 59 percent of all PPP loans are JP Morgan Chase, TD Bank, Citibank, Cross River Bank, Bank of America and Signature Bank. JP Morgan Chase Bank loaned the most at $1.1 billion, or 29 percent, to 14 thousand businesses, or 28 percent of all NYC businesses."
var vetDef = "Only 304 of NYC businesses, or 0.61 percent, identified as veteran owned. Those 304 businesses received only $24 million, or 0.62 percent, of all PPP loans."
var raceDef = "81 percent of businesses did not identify a race. Of PPP recipients that did identify a race, 12 percent identified as White. The remaining 7 percent is composed primarily of Asian (5.3 percent) and Black (1.63 percent)."
var one50kDef =  "NYC businesses that received over $150 thousand of PPP loans only made up 13 percent of all loan recipients. However, these NYC businesses reported 67 percent of all the jobs retained."


var infoCatDef = [btypeDef, genderDef, nonprofitDef, lenderDef, vetDef, raceDef, one50kDef]

var infoMetValues = ['Loan Amount', 'Jobs Retained', 'Business Count']

var infoMetIcon = ["fas fa-dollar-sign fa-fw hvr-icon", "fas fa-briefcase fa-fw hvr-icon", "fas fa-store fa-fw hvr-icon"]

var infoMetCodes = ['lnamt', 'jbrt', 'cnt']

var infoMetResult =  infoMetValues.reduce(function(infoMetResult, field, index) {
  infoMetResult[infoMetCodes[index]] = field;
  return infoMetResult;
}, {})

var lnamtDef = "87 percent of NYC businesses who received PPP loans received a loan of $150 thousand or less. The average loan amount is $31,282. Of the 13 percent who received a loan amount greater than $150 thousand, 85 percent received a loan of less than $1 million."
var jbrtDef = "On average, for every NYC business that received a PPP loan, 8 jobs were retained. For businesses that received less than $150 thousand in PPP loans, for every $100 thousand dollars borrowed, approximately 3.2 jobs were retained."
var cntDef = "In total, approximately 166,497 NYC businesses received a PPP loan. That is slightly over 50 percent of all PPP loan recipients in New York State."


var infoMetDef = [lnamtDef, jbrtDef, cntDef]

var infoGeoValues = ['Borough', 'Congressional District', 'Zip Code Tabulation Area', 'Neighborhood Tabulation Area']
var infoGeoCodes = ['boro', 'congdist', 'zcta', 'nta']

var infoGeoResult =  infoGeoValues.reduce(function(infoGeoResult, field, index) {
  infoGeoResult[infoGeoCodes[index]] = field;
  return infoGeoResult;
}, {})

var boroDef = "Of the PPP loan recipients who received less than $150 thousand, and of the 5 boroughs, Manhattan (New York County) received $1.9 billion in PPP loans, $800 million more than Brooklyn (Kings County), the borough who received the second highest amount of PPP loans. Although, Staten Island (Richmond County) received the least amount of PPP loans, $163 million, the average loan amount was $3.6 thousand more than the borough with the lowest average PPP loan amount, Bronx."
var congdistDef = "Of the PPP loan recipients who received less than $150 thousand, Congressional District 12 (NY-12) received $1.2 billion, or 27 percent of all PPP loans. Although, NY-12's boundaries spans both Manhattan and Brooklyn, $1.1 billion was allocated to businesses in Manhattan."
var zctaDef = "According to the U.S. Census Bureau, Zip Code Tabulation Areas (ZCTAs) are generalized areal representations of U.S. Postal Service zip code service areas. In creating ZCTAs, the Census Bureau took the most frequently occurring Zip Code in an area for the ZCTA code. For more details on data for ZCTAs were calculated, see methodology."
var ntaDef = "According to NYC Department of City Planning, Neighborhood Tabulation Areas (NTAs) were created to project populations at a small area level, from 2000 to 2030 for PlaNYC, the long-term sustainability plan for NYC. The minimum population for each NTA is 15,000. For more details on data for ZCTAs were calculated, see methodology."


var infoGeoDef = [boroDef, congdistDef, zctaDef, ntaDef]

var infoRatValues = ['Residential Ratio', 'Busienss Ratio', 'Other Ratio', 'Total Ratio']
var infoRatCodes = ['resRat', 'busRat', 'othRat', 'totRat']

var infoRatResult =  infoRatValues.reduce(function(infoRatResult, field, index) {
  infoRatResult[infoRatCodes[index]] = field;
  return infoRatResult;
}, {})

var resRatDef = "The ratio of residential addresses in the Census Tract part to the total number of residential addresses in the entire Tract"
var busRatDef = "The ratio of business addresses in the Census Tract part to the total number of business addresses in the entire Tract"
var othRatDef = "The ratio of other addresses in the Census Tract part to the total number of other addresses in the entire Tract"
var totRatDef = "The ratio of all addresses in the Census Tract part to the total number of all types of addresses in the entire Tract"


var infoRatDef = [resRatDef, busRatDef, othRatDef, totRatDef]

var $infoCat = $('.infoCat');
var $infoMet = $('.infoMet');
var $infoGeo = $('.infoGeo')
var $infoRat = $('.infoRat')

var a, b, c, d, e, i, j, k, l;
a = b = c = d = i = j = k = l = -1;

function infoDrpDwn () {
  $.each(infoCatResult, function (key, value) {
    i = i+1;
    $infoCat.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'"><i class="'+infoCatIcon[i]+'"></i><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'" class="collapse" aria-labelledby="heading'+key+'" data-parent="#accordionCat">'+infoCatDef[i]+'</div></a>');
      });
  $.each(infoMetResult, function (key, value) {
    j = j+1;
    $infoMet.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'"><i class="'+infoMetIcon[j]+'"></i><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'" class="collapse" aria-labelledby="heading'+key+'" data-parent="#accordionMet">'+infoMetDef[j]+'</div></a>');
      });
  $.each(infoGeoResult, function (key, value) {
    k = k+1;
    $infoGeo.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'"><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'" class="collapse" aria-labelledby="heading'+key+'" data-parent="#accordionGeo">'+infoGeoDef[k]+'</div></a>');
      });

  $.each(infoRatResult, function (key, value) {
    l = l+1;
    $infoRat.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'"><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'" class="collapse" aria-labelledby="heading'+key+'" data-parent="#accordionRat">'+infoRatDef[l]+'</div></a>');
      });
    }

var $infoCat2 = $('.infoCat2');
var $infoMet2 = $('.infoMet2');
var $infoGeo2 = $('.infoGeo2')
var $infoRat2 = $('.infoRat2')    
function infoDrpDwn2 () {
  $.each(infoCatResult, function (key, value) {
    a = a+1;
    $infoCat2.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'2"><i class="'+infoCatIcon[a]+'"></i><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'2" class="collapse" aria-labelledby="heading'+key+'2" data-parent="#accordionCat2">'+infoCatDef[a]+'</div></a>');
      });
  $.each(infoMetResult, function (key, value) {
    b = b+1;
    $infoMet2.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'2"><i class="'+infoMetIcon[b]+'"></i><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'2" class="collapse" aria-labelledby="heading'+key+'2" data-parent="#accordionMet2">'+infoMetDef[b]+'</div></a>');
      });
  $.each(infoGeoResult, function (key, value) {
    c = c+1;
    $infoGeo2.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'2"><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'2" class="collapse" aria-labelledby="heading'+key+'2" data-parent="#accordionGeo2">'+infoGeoDef[c]+'</div></a>');
      });

  $.each(infoRatResult, function (key, value) {
    d = d+1;
    $infoRat2.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'2"><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'2" class="collapse" aria-labelledby="heading'+key+'2" data-parent="#accordionRat2">'+infoRatDef[d]+'</div></a>');
      });
    }
    
infoDrpDwn();
infoDrpDwn2();

export {infoCatIcon}