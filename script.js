// Assignment Code for Password Generator using JavaScript
// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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

//Function to Generate Password starting with prompt for length followed by confirmation of character choices
function generatePassword() {
  let passwordString = "";
  let passwordLength = window.prompt("How many characters do you want in your password?");
  let hasSpecialChars = window.confirm("Do you want special characters in your password?");
  let hasNumericChars = window.confirm("Do you want numeric characters in your password?");
  let hasLowerCase = window.confirm("Do you want lower case characters in your password?");
  let hasUpperCase = window.confirm("Do you want upper case characters in your password?");
}

let caseArray = [];
let randomPassword = [];
let possibleCharacters = [];

if (hasSpecialChars==true){
  caseArray.push(specialCharacters);
}

if (hasNumericChars==true){
  caseArray.push(numericCharacters);
}

if (hasLowerCase=true){
  caseArray.push(lowerCasedCharacters);
}

if (hasUpperCase=true){
  caseArray.push(upperCasedCharacters);
}

for (i = 0; i < remainingPasswordLength; i++) {
  password += caseArray[Math.floor(Math.random() * randomPassword.remainingPasswordLength)
  ];

  return password;
}

// Write password to the #password input
function writePassword() {
  let randomPassword = "";
  randomPassword = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
