function findSpaces(text){
	var object = {};
	console.log(text);
	var originalText = text;
	console.log(originalText);
	object.original = originalText;
	var newText = text;
	var array = newText.split('');
	var counter = 0;
	var newArray = [];
	var mistakeLog = [];
	for(var i = 0; i<array.length; i++){
		if(array[i] === '.'){
			newArray.push(array[i]);
			if(array[i+1] == ' ' && array[i+2] == ' '){
				var mistakeIndex = i+2;
				mistakeLog.push('extra space index ' + mistakeIndex);
				// $(extraSpace).addClass('mistake');
				counter += 1;
				array.splice(array[i+1], 1);
			}
		} else {
			newArray.push(array[i]);
		}
	}
	var joined = newArray.join('');
	object.answer = joined;
	object.numberOfMistakes = counter;
	object.mistakeLog = mistakeLog;
	return object;
}