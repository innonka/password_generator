// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = prompt("Enter your password length (10-64 characters)");
  if (passLength === null) {
    return null;
  } else if (passLength < 10 || passLength > 64) {
    alert("You must enter a number between 10 and 64");
    return null;
  }

  var includeSpecialCharacters = confirm(
    "Would you like to include special characters?"
  );
  var includeNumericCharacters = confirm(
    "Would you like to include numeric characters?"
  );
  var includeUpperCasedCharacters = confirm(
    "Would you like to include upper case characters?"
  );
  var includeLowerCasedCharacters = confirm(
    "Would you like to include lower case characters?"
  );

  if (!includeSpecialCharacters && !includeNumericCharacters && !includeUpperCasedCharacters && !includeLowerCasedCharacters)
  {
    alert('You must include at least one of special characters, numeric characters, upper or lower case characters');
    return null;
  }

  return {
    passLength,
    includeSpecialCharacters,
    includeNumericCharacters,
    includeUpperCasedCharacters,
    includeLowerCasedCharacters,
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.round(Math.random() * arr.length);
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (options == null) {
    return;
  }

  var validCharacters = [];
  if (options.includeSpecialCharacters === true) {
    validCharacters = validCharacters.concat(specialCharacters);
  }
  if (options.includeNumericCharacters === true) {
    validCharacters = validCharacters.concat(numericCharacters);
  }
  // add other ones

  var password = "";

  for (var i = 0; i < options.passLength; i++) {
    var letter = getRandom(validCharacters);
    password += letter;
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input// return statement
function writePassword() {
  var password = generatePassword();
  if (password != null && password.length > 0) {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
