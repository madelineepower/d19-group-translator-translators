var uzbOutput = document.getElementById('output');
var slogan2 = (function (originalslogan) {
	var italWords = {"make":"Rendere", "again":"ancora", "great":"di nuovo", "christmas":"Natale"}

		originalslogan.translateToItalian = function(value) {

			var rev = value.split(" ");
			var keyNames = Object.keys(italWords);
				var lookup = {};
				for (var j in rev) {
				    lookup[rev[j]] = rev[j];
				}
				for (var i in keyNames) {
				    if (typeof lookup[keyNames[i]] != 'undefined') {
				    	if (keyNames[i] === "make") {
				    		uzbOutput.innerHTML += `<h1>${italWords.make}</h1>`;
				    	} else if (keyNames[i] === "again") {
				    		uzbOutput.innerHTML += `<h1>${italWords.again}</h1>`;
				    	} else if (keyNames[i] === "great") {
				    		uzbOutput.innerHTML += `<h1>${italWords.great}</h1>`;
				    	} else if (keyNames[i] === "christmas") {
				    		uzbOutput.innerHTML += `<h1>${italWords.christmas}</h1>`;
				    	}
				    }
				}
	  	}
return slogan2;
})(slogan);
