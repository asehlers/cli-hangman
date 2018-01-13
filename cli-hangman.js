var inquirer = require("inquirer");
var hangman = require("./hangman.js");
//Letter test logic
// var test = require("./letter.js");
// var ob = new test.Letter("a", "_");
// console.log(ob);
// console.log(ob.output());
// console.log(ob.checkGuess("b"));

//word test code
// var test = require("./word.js");
// var ob = new test.Word();
// ob.generateWord("Hello World");
// console.log(ob.getOutput());
// console.log(ob.guessLetter("l"));
// console.log(ob.guessLetter("h"));
// console.log(ob.guessLetter("d"));
// console.log(ob.guessLetter("r"));
// console.log(ob.guessLetter("w"));
// console.log(ob.guessLetter("o"));
// console.log(ob.guessLetter("e"));
// console.log(ob.getOutput());
// console.log(ob.wordGuessed());

var game = new hangman.Game();
game.newGame();

function nextRound (){
	console.log(game.wordToGuess.getOutput());
	console.log("You have " + game.guesses + " guesses left");
	console.log("Your Guesses: " + game.guessedOutput());
	inquirer.prompt([
		{
			type: "input",
			name: "guess",
			message: "enter a letter to make a guess"
		}
	]).then(function(res){
		if(res.guess.length === 1){
			game.makeGuess(res.guess);
			if(game.continueGame()){
				nextRound();
			}else{
				playAgain();
			}
		}
	});
}

function playAgain(){
	inquirer.prompt([
	{
		type: "confirm",
		name: "again",
		message: "Would you like to play again"
	}
	]).then(function(res){
		if(res.again){
			game.newGame();
			nextRound();
		}else{
			console.log("Thanks for playing!");
		}
	})
}

nextRound();