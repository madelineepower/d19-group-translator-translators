var uzbOutput = document.getElementById('output');
var slogan3 = (function (originalslogan) {
  var spanwords = {"make":"Hacer", "christmas":"Navidad", "great":"estupendo", "again":"de nuevo"}

    originalslogan.translateToSpanish = function(value) {
      var rev = value.split(" ");
      var keyNames = Object.keys(spanwords);
        var lookup = {};
        for (var j in rev) {
            lookup[rev[j]] = rev[j];
        }
        for (var i in keyNames) {
            if (typeof lookup[keyNames[i]] != 'undefined') {
              if (keyNames[i] === "make") {
                uzbOutput.innerHTML += `<h1>${spanwords.make}</h1>`;
              } else if (keyNames[i] === "christmas") {
                uzbOutput.innerHTML += `<h1>${spanwords.christmas}</h1>`;
              } else if (keyNames[i] === "great") {
                uzbOutput.innerHTML += `<h1>${spanwords.great}</h1>`;
              } else if (keyNames[i] === "again") {
                uzbOutput.innerHTML += `<h1>${spanwords.again}</h1>`;
              }
            }
        }
      }
  return slogan3;
})(slogan);
