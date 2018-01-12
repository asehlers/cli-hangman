//constructor for letter object
function Letter(char, hidden){
	//object properties
	this.character = char;
	this.guessed = false;
	this.blank = hidden;
	if(char === " "){
		this.guessed = true;
	}
	//Letter methods
	this.checkGuess = function(guess){
		if(this.character.toLowerCase() === guess.toLowerCase()){
			this.guessed = true;
			console.log("guess is same");
			return true;
		}else{
			console.log("guess is different");
			return false;
		}
	};

	this.output = function(){
		console.log("output");
		if(this.guessed){
			return this.character;
		}else{
			return this.blank;
		}
	}
}

module.exports = {
	Letter: Letter
}