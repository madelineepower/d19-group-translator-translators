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
		console.log("one");
	} else if (selected == 2) {
		console.log("two");
	} else if (selected == 3) {
		console.log("three");
	} else if (selected == 4) {
		slogan.translateToUzbek(wordValue);
	}
});






