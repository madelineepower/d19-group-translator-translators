let translate = document.getElementById('translate');
translate.addEventListener('click', function() {
	let wordValue = document.getElementById('value').value;
	//which side
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
