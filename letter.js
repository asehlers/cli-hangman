//constructor for letter object
function Letter(char, hidden){
	//object properties
	this.character = char;
	this.guessed = false;
	this.blank = hidden;
	this.alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	if(this.alphabet.indexOf(char.toLowerCase()) < 0){
		this.guessed = true;
	}
	//Letter methods
	this.checkGuess = function(guess){
		if(this.character.toLowerCase() === guess.toLowerCase()){
			this.guessed = true;
			// console.log("guess is same");
			return true;
		}else{
			// console.log("guess is different");
			return false;
		}
	};

	this.output = function(){
		// console.log("output");
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