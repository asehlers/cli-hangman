var char = require("./letter.js");

function Word(){
	//properties
	this.characters = [];

	//functions
	//generate random word TBI
	this.generateWord = function(input){
		// console.log("generateWord");
		this.characters = [];
		for(var i = 0; i < input.length; i++){
			this.characters.push(new char.Letter(input.charAt(i), "_"));
		}
	}

	//generate output
	this.getOutput = function(){
		// console.log("getting word output");
		var wordOut = "";
		for(var j = 0; j < this.characters.length; j++){
			wordOut += " " + this.characters[j].output();
		}
		wordOut += "\n\r";
		return wordOut;
	}

	//check if all letters guessed
	this.wordGuessed = function(){
		// console.log("checking word completion");
		var wordGuess = true;
		for(var k = 0; k < this.characters.length; k++){
			if(!this.characters[k].guessed){
				wordGuess = false;
			}
		}
		return wordGuess;
	}

	this.guessLetter = function(guess){
		// console.log("guess checking");
		var guessedCorrect = false;
		for(var l = 0; l < this.characters.length; l++){
			if(this.characters[l].checkGuess(guess)){
				guessedCorrect = true;
			}
		}
		return guessedCorrect;
	}
}

module.exports = {
	Word: Word
}