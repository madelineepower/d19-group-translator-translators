var uzbOutput = document.getElementById('output');
var slogan = (function () {
	var rusWords = {"make":"Qilish", "christmas":"Bayramni", "great":"Katta", "again":"Yana"}
	return {
		translateToUzbek: function(value) {
			var rev = value.split(" ");
			var keyNames = Object.keys(rusWords);
				var lookup = {};
				for (var j in rev) {
				    lookup[rev[j]] = rev[j];
				}
				for (var i in keyNames) {
				    if (typeof lookup[keyNames[i]] != 'undefined') {
				    	if (keyNames[i] === "make") {
				    		uzbOutput.innerHTML += `<h1>${rusWords.make}</h1>`;
				    	} else if (keyNames[i] === "christmas") {
				    		uzbOutput.innerHTML += `<h1>${rusWords.christmas}</h1>`;
				    	} else if (keyNames[i] === "great") {
				    		uzbOutput.innerHTML += `<h1>${rusWords.great}</h1>`;
				    	} else if (keyNames[i] === "again") {
				    		uzbOutput.innerHTML += `<h1>${rusWords.again}</h1>`;
				    	}
				    }
				}
	  	}
	}
})();


