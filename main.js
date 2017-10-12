var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randmWord = game.randmWord;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randmWord);
var maxGuesses = 12;

console.log("This game is called Fruit Hangman!");
console.log("Guess a letter and name a Fruit!");
console.log("Have at It!");
console.log("-----------------------------");

function takeAGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('You have no more guesses. Done!');
	return; 
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
		//(str.length != 1) return false;
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ 
				var letter = letterInput.letter; 
				myWord.findLetter(letter); 
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; 
					//Winner
					}
				console.log('-------------------\n'); 
				//games not done. Next guess.
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				takeAGuess(); 
				}
  );
}

takeAGuess(); 