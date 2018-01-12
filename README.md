# cli-hangman

###Description
This program will take user letter input using inquirer for input. As guesses are made the word output will be updated accordingly from blank underscores to the guessed letter. The user will start with 8 guesses and upon running out or guessing all letters will be asked if they want to play agian.


##Files
####word.js
	seperate file containing the word object constructor. Contains an array of Letter objects, a function to generate a word, a function to format and output words contents, and a function to determine if all letters were guessed.

####letter.js
	seperate file containing the letter object constructor. Contains two single letter strings which are the letter itself and a placeholder output. It has a boolean for if the letter was guessed, a function to determine if a guess is the same, a function to return current output.

####hangman.js
	seperate file containing the game object constructor. Contains word to guess, number of guesses left, function to process a guess, function to determine if youve won.

####cli-hangman.js
	main file handles running of the hangman game. Makes use of inquirer to get user input, validate it and send updates to game.