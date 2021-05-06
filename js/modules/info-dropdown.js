var infoParTxt = "<p>The Paycheck Protection Program (PPP) is a loan designed to provide a direct incentive for small businesses to keep their workers on payroll and was established through the Coronavirus Aid, Relief, and Economic Security (CARES) Act on March 27, 2020.</p>"
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

var btypeDef = "In NYC, PPP loan recipients represented 21 different business types (less than 1 percent of recipients leaving their business type as unanswered). Corporations, LLCs, and S-Corp businesses received 80 percent of all PPP loans. Corporations received the most amount of PPP loans, over $10.7 billion, and represented the largest share of all NYC businesses, 35.42 percent, or 104,735 businesses."
var genderDef = "69 percent of PPP loan recipients declined to declare whether their business is either female or male owned. However, of the 31 percent that did declare, 22 percent of businesses are male owned, receiving over $6.3 billion (22 percent of total PPP loan funding in NYC), and 9 percent are female owned, receiving over $1.6 billion (or 6 percent of total PPP loan funding in NYC)."
var nonprofitDef = "In NYC, only 2 percent of all PPP loan recipients identified as a nonprofit - approximately receiving $2.6 billion in PPP loans."
var lenderDef = "In NYC, PPP loan recipients received loans from 999 different lenders. The top 6 lenders that loaned just over 52 percent of all NYC businesses and all PPP loans are JP Morgan Chase, TD Bank, Citibank, Cross River Bank, Bank of America and Signature Bank. JP Morgan Chase Bank loaned the most at $6.9 billion (24 percent) to over 59 thousand NYC businesses (20 percent)."
var vetDef = "Only 1423 of NYC businesses, or 0.48 percent, identified as veteran owned. Those 1423 businesses received only $170 million, or 0.59 percent, of all PPP loans."
var raceDef = "81 percent of businesses did not identify a race. Of PPP recipients that did identify a race, 10 percent identified as White. The remaining 9 percent is composed primarily of Asian (4.1 percent) and Black (1.33 percent)."
var one50kDef =  "NYC businesses that received $150 thousand or less of PPP loans made up 88 percent of all loan recipients. However, these NYC businesses only received 7.8 billion of PPP loans. The 34,917 businesses that received over $150 thousand of PPP loans received 73 percent, or $20.9 billion of PPP loans."


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

var boroDef = "Manhattan received $15.7 billion in PPP loans, 55 percent of all PPP loans, $10.2 billion more than Brooklyn, the borough who received the second highest amount of PPP loans. Staten Island received the least amount of PPP loans, $762 million, with an average loan amount of $68 thousand per business - $79 thousand less than Manhattan's average."
var congdistDef = "Congressional District 12 (NY-12) received $9.4 billion, or 33 percent of all PPP loans. Although, NY-12's boundaries spans both Manhattan and Brooklyn, $7.9 billion was allocated to businesses in Manhattan."
var zctaDef = "According to the U.S. Census Bureau, Zip Code Tabulation Areas (ZCTAs) are generalized areal representations of U.S. Postal Service zip code service areas. In creating ZCTAs, the Census Bureau took the most frequently occurring Zip Code in an area for the ZCTA code. For more details on data for ZCTAs were calculated, see methodology."
var ntaDef = "According to NYC Department of City Planning, Neighborhood Tabulation Areas (NTAs) were created to project populations at a small area level, from 2000 to 2030 for PlaNYC, the long-term sustainability plan for NYC. The minimum population for each NTA is 15,000. For more details on data for ZCTAs were calculated, see methodology."


var infoGeoDef = [boroDef, congdistDef, zctaDef, ntaDef]

var infoRatValues = ['Residential Ratio', 'Business Ratio', 'Other Ratio', 'Total Ratio']
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

var infoClassValues = ['Equal Interval', 'Quantile', 'Number of Classes']
var infoClassCodes = ['equClass', 'qntClass', 'numClass']

var infoClassResult =  infoClassValues.reduce(function(infoClassResult, field, index) {
  infoClassResult[infoClassCodes[index]] = field;
  return infoClassResult;
}, {})

var equClassDef = "The equal interval (or equal step) classification method divides the range of attribute values into equally sized classes."
var qntClassDef = "The quantile classification method places equal numbers of observations into each class. This method is best for data that is evenly distributed across its range."
var numClassDef = "Choosing the number of data classes is an important part of map design. Increasing the number of data classes will result in a more 'information rich' map by decreasing the amount of data generalization. However, too many data classes may overwhelm the map reader with information and distract them from seeing general trends in the distribution. In addition, a large numbers of classes may compromise map legibility—more classes require more colors that become increasingly difficult to tell apart. Many cartographers advise that you use five to seven classes for a choropleth map."


var infoClassDef = [equClassDef, qntClassDef, numClassDef]

var infoClrSchValues = ['Sequential', 'Diverging']
var infoClrSchCodes = ['seqClrSch', 'divClrSch']

var infoClrSchResult =  infoClrSchValues.reduce(function(infoClrSchResult, field, index) {
  infoClrSchResult[infoClrSchCodes[index]] = field;
  return infoClrSchResult;
}, {})

var seqClrSchDef = "Sequential schemes are suited to ordered data that progress from low to high. Lightness steps dominate the look of these schemes, with light colors for low data values to dark colors for high data values."
var divClrSchDef = "Diverging schemes put equal emphasis on mid-range critical values and extremes at both ends of the data range. The critical class or break in the middle of the legend is emphasized with light colors and low and high extremes are emphasized with dark colors that have contrasting hues."

var infoClrSchDef = [seqClrSchDef, divClrSchDef]

var $infoCat = $('.infoCat');
var $infoMet = $('.infoMet');
var $infoGeo = $('.infoGeo')
var $infoRat = $('.infoRat');
var $infoClass = $('.infoClass');
var $infoClrSch = $('.infoClrSch');

var a, b, c, d, e, f, i, j, k, l, m, n;
a = b = c = d = e = f= i = j = k = l = m = n = -1;

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

  $.each(infoClassResult, function (key, value) {
    m = m+1;
    $infoClass.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'"><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'" class="collapse" aria-labelledby="heading'+key+'" data-parent="#accordionClass">'+infoClassDef[m]+'</div></a>');
      });

  $.each(infoClrSchResult, function (key, value) {
    n = n+1;
    $infoClrSch.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'"><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'" class="collapse" aria-labelledby="heading'+key+'" data-parent="#accordionClass">'+infoClrSchDef[n]+'</div></a>');
      });
    }

var $infoCat2 = $('.infoCat2');
var $infoMet2 = $('.infoMet2');
var $infoGeo2 = $('.infoGeo2')
var $infoRat2 = $('.infoRat2') 
var $infoClass2 = $('.infoClass2')
var $infoClrSch2 = $('.infoClrSch2');    
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

  $.each(infoClassResult, function (key, value) {
    e = e+1;
    $infoClass2.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'2"><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'2" class="collapse" aria-labelledby="heading'+key+'2" data-parent="#accordionClass2">'+infoClassDef[e]+'</div></a>');
      });

  $.each(infoClrSchResult, function (key, value) {
    f = f+1;
    $infoClrSch2.append(
      '<a class="list-group-item" data-toggle="collapse" href="#collapse'+key+'2"><span id = "infoTxt">'+value+'</span><div id="collapse'+key+'2" class="collapse" aria-labelledby="heading'+key+'2" data-parent="#accordionClass2">'+infoClrSchDef[f]+'</div></a>');
      });
    }
    
infoDrpDwn();
infoDrpDwn2();

export {infoCatIcon}