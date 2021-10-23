// Assignment Code
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


function getuseroptions(){
 // generatePassword 8-128 characters
  //  what type of character does the user want
  var passwordLength= prompt("what length does user want between 8-128 characters")
  var confirmUpperCase= confirm( "does user want to use uppercase")
  var confirmLowerCase= confirm( "does user want to use lower case")
  var confirmSpecialCharacters= confirm( "does user want special characters")
  var confirmNumericCharacters= confirm( "does user want numeric characters")

var useroptions= {
  passwordLength:passwordLength,
  confirmLowerCase:confirmLowerCase,
  confirmUpperCase:confirmUpperCase,
  confirmNumericCharacters:confirmNumericCharacters,
  confirmSpecialCharacters:confirmSpecialCharacters,

}
useroptions.passwordLength=passwordLength
useroptions.confirmLowerCase=confirmLowerCase
useroptions.confirmUpperCase=confirmUpperCase
useroptions.confirmNumericCharacters=confirmNumericCharacters
useroptions.confirmSpecialCharacters=confirmSpecialCharacters
return useroptions
} 

var generateBtn = document.querySelector("#generate");
function generatePassword(){
 

}

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
