var uzbOutput = document.getElementById('output');

var slogan1 = (function (originalslogan) {
	var lexicon = {"make":"Faire", "christmas":"du Noël", "great":"genial", "again":"encore"}

    originalslogan.translateToFrench = function(value) {

      var rev = value.split(" ");
			var keyNames = Object.keys(lexicon);
				var lookup = {};
				for (var j in rev) {
				    lookup[rev[j]] = rev[j];
				}
				for (var i in keyNames) {
				    if (typeof lookup[keyNames[i]] != 'undefined') {
				    	if (keyNames[i] === "make") {
				    		uzbOutput.innerHTML += `<h1>${lexicon.make}</h1>`;
				    	} else if (keyNames[i] === "christmas") {
				    		uzbOutput.innerHTML += `<h1>${lexicon.christmas}</h1>`;
				    	} else if (keyNames[i] === "great") {
				    		uzbOutput.innerHTML += `<h1>${lexicon.great}</h1>`;
				    	} else if (keyNames[i] === "again") {
				    		uzbOutput.innerHTML += `<h1>${lexicon.again}</h1>`;
				    	}
				    }
				}
	  	}
  return slogan1;
})(slogan);
