function inject() {
    function urlDomain(data) {
        var a = document.createElement('a');
        a.href = data;
        return a.hostname;
    }

    window.open = function (open) {
        return function (url, name, features) {
            if(urlDomain(url) === 'hltv.org' || urlDomain(url) === 'www.hltv.org') {
                return open.call(window, url, name, features);
            }
        };
    }(window.open);
}
//ad links to remove
var style =
    'html, body { background: white !important; }' +
    '#firstCollumn .boxNoDrag:first-child,' +
    '.topHolder a img,' +
    '#razer,' +
    'iframe[src*="wombo.gg"],' +
    'iframe[src*="gainskins.com"],' +
    'iframe[src*="king"],' + //Kinguin
    'a[href*="bit.ly/2cUilNO"],' + //Hellcase
    'a[href*="skinsanity.gg"],' +
    'a[href*="egbaffiliates.com"],' +
    'a[href*="34.gs"],' +
    'a[href*="goo.gl/NQFwqv"],' +
    'a[href*="skinsjar.com"],' +
    'a[href*="bitskins.com"] { display: none; }';

$(function() {
  //add inject function
  var scriptTag = document.createElement("script");
  scriptTag.textContent = inject.toString() + " inject()";
  document.documentElement.appendChild(scriptTag);
  //inject styles
  var styleTag = document.createElement("style");
  styleTag.textContent = style;
  document.documentElement.appendChild(styleTag);
  //hide scores
  $('.result-score .score-lost, .result-score .score-won, .team .lost, .team .won, .mapholder .results').html('');
  $('.team-cell .bold').removeClass('bold');
  $('.hotmatchbox .hotmatchbox span').hide();
});
