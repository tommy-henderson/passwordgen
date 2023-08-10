// Assignment code here
function generatePassword() {

  // Asks whether the user wants specific character types in their password and stores as booleans for later
  var lowerCaseInput = confirm("Would you like lowercase letters in your password?")
  var upperCaseInput = confirm("Would you like upper cases in your password?")
  var numbersInput = confirm("Would you like numbers in your password?")
  var specialsInput = confirm("Would you like special characters in your password?")

  // Defines arrays to be combined into newArray depending on what the user selects
  var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  // Sets a variable for the password string to be added to eventually
  var passwordString = ""

  // Sets variable for array that the for loop will eventually pull from to create password
  var newArray = [];

  // Uses lengthPrompt function to determine password length
  var passwordLength = lengthPrompt()

// Depending on what the user picks, adds arrays into the pool of characters the password generator will end up pulling from
  if (lowerCaseInput) { 
    newArray.push(lowerCases) 
  }
  if (upperCaseInput) { 
    newArray.push(upperCases) 
  }
  if (numbersInput) { 
    newArray.push(numbers) 
  }
  if (specialsInput) { 
    newArray.push(specials) 
  }

  // This will concatenate the arrays into one big array instead of 4 seperate arrays
  flatNewArray = newArray.flat()

  // Pulls random characters from new array up to the specified password length to create the password string
  for (var i = 0; i < passwordLength; i++) {
    passwordString += flatNewArray[Math.floor(Math.random() * (flatNewArray.length))];
  }

  return passwordString;

}

// Allows user to input how many characters they'd like in their password

function lengthPrompt() {
  var passwordLength = prompt("How many characters would you like in your password?")

  // Displays an error message and if the password length doesn't fit the set parameters

  if (passwordLength < 10) {
    alert("Your password must be between 10 and 128 characters")
  }
  if (passwordLength > 128) {
    alert("Your password must be between 10 and 128 characters")
  }
  return passwordLength;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
