//Random Fruit is selected and exported
var wordsGuess = ["Mango", "Apple", "Peach", "Orange", "Plum", "Pear", "Tomato", "Pineapple", "Guava", "Lemon"];
var randmIndex = Math.floor(Math.random() * wordsGuess.length);
var randmWord = wordsGuess[randmIndex];
exports.randmWord = randmWord;