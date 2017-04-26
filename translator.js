let translate = document.getElementById('translate');
let play = document.getElementById('play');
translate.addEventListener('click', function() {
	let wordValue = document.getElementById('value').value;
	//which sidep
	var selected;
	var radios = document.getElementsByName('spanish');
	for(var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			selected = radios[i].value;
			break;
		}
	}
	if (selected == 1) {
		slogan.translateToSpanish(wordValue);
	} else if (selected == 2) {
		slogan.translateToFrench(wordValue);
	} else if (selected == 3) {
		slogan.translateToItalian(wordValue);
	} else if (selected == 4) {
		slogan.translateToUzbek(wordValue);
	}
});

var clear = document.getElementById('clear');
clear.addEventListener('click', () => {
	var textArea = document.getElementById('output');
	textArea.innerHTML = " ";
});

play.addEventListener("click", function(){
					var selected;
					var radios = document.getElementsByName('spanish');
					for(var i = 0; i < radios.length; i++) {
						if (radios[i].checked) {
							selected = radios[i].value;
							break;
						}
					}
					if (selected == 1) {
						responsiveVoice.speak(document.querySelector('#output').textContent, "Spanish Female");
					} else if (selected == 2) {
						responsiveVoice.speak(document.querySelector('#output').textContent, "French Female");
					} else if (selected == 3) {
						responsiveVoice.speak(document.querySelector('#output').textContent, "Italian Female");
					} else if (selected == 4) {
						responsiveVoice.speak(document.querySelector('#output').textContent, "Turkish Female");
					}
});
