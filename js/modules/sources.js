var sourceLnk = ['https://data.sba.gov/dataset/ppp-foia', 'https://github.com/tannerjt/classybrew', 'https://colorbrewer2.org/#', 'https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s10-03-data-classification.html', 'https://www.washingtonpost.com/graphics/2020/business/sba-ppp-data/']
var sourceTxt = ['SBA Paycheck Protection Program Loan Level Data', 'classybrew', 'ColorBrewer 2.0', 'Essentials of Geographic Information Systems', 'Washington Post: Explore Updated SBA data on Businesses that Received PPP Loans']

var sourceBdy = ["Data Last Updated: May 2, 2021, 9:30 PM (UTC-04:00)", "This map could not be created without the excellent classybrew library that Joshua Tanner created. classybrew lets you not only choose from several statistical algorithms but also has colorbrewer color palettes built in to quickly generate choropleth maps.", "The classybrew tool was built off of Cynthia's Brewers ColorBrewer2.0, which is a web tool for guidance in choosing choropleth map color schemes based on the research of Dr. Cynthia Brewer. The definitions for 'Sequential', 'Diverging' & 'Number of Classes' are sourced from ColorBrewer 2.0.", "Definitions for 'Equal Interval' and 'Quantile' are sourced from chapter 6 from 'Essentials of Geographic Information Systems' by Jonathan Campbell and Micahel E. Shin", "On December 2, 2020 the Washington Post published a map that visualized where loans of more than $150,000 were issued for the entire country."]

var sourceResult =  sourceLnk.reduce(function(sourceResult, field, index) {
  sourceResult[sourceTxt[index]] = field;
  return sourceResult;
}, {})
var i;
i = -1;
const $sourcePar = $('#acknowledgement2, #acknowledgement');
function sourcePar () {
  $.each(sourceResult, function (key, value) {
    i = i+1;
    $sourcePar.append(
      '<p><a href="'+value+'"target="_blank" rel="noopener noreferrer">'+key+'</a></p><p>'+sourceBdy[i]+'</p>');
      });
}
sourcePar();
/*
<p>
<a href="https://data.sba.gov/dataset/ppp-foia" target="_blank" rel="noopener noreferrer">SBA Paycheck Protection Program Loan Level Data</a>
Data Last Updated: May 2, 2021, 9:30 PM (UTC-04:00)
</p>
<p>
<a href="https://github.com/tannerjt/classybrew" target="_blank" rel="noopener noreferrer">classybrew</a>
<p>This map could not be created without the excellent classybrew library that Joshua Tanner created. classybrew lets you not only choose from several statistical algorithms but also has colorbrewer color palettes built in to quickly generate choropleth maps.</p>
</p>
<p>
<a href="https://colorbrewer2.org/#" target="_blank" rel="noopener noreferrer">ColorBrewer 2.0</a>
<p>The classybrew tool was built off of Cynthia's Brewers ColorBrewer2.0, which is a web tool for guidance in choosing choropleth map color schemes based on the research of Dr. Cynthia Brewer. The definitions for 'Sequential', 'Diverging' & 'Number of Classes' are sourced from ColorBrewer 2.0.</p>
</p>
<p>
<a href="https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s10-03-data-classification.html" target="_blank" rel="noopener noreferrer">Essentials of Geographic Information Systems</a>
<p>Definitions for 'Equal Interval' and 'Quantile' are sourced from chapter 6 from "Essentials of Geogprahic Information Systems" by Jonathan Campbell and Micahel E. Shin</p>
</p>
<p>
<a href="https://www.washingtonpost.com/graphics/2020/business/sba-ppp-data/" target="_blank" rel="noopener noreferrer">Washington Post: Explore Updated SBA data on Businesses that Received PPP Loans</a>
<p>On December 2, 2020 the Washington Post published a map that visualized where loans of more than $150,000 were issued for the entire country.</p>
</p>
<p>
Special thanks to my life partner Melissa, who not only provided excellent support & design insight, but, as a true and true New Yorker representing BK, took me to school on the official boundaries and geographies of a NYC neighborhoods.
</p>
*/