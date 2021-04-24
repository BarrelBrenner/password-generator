// Assignment Code for Password Generator using JavaScript
let generateBtn = document.getElementById("generate");
let copyBtn = document.getElementById("copy");

//Here is an array of SPECIAL characters to be included in password
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

// Here is an array of NUMERIC characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Here is an array of LOWERCASE characters to be included in password
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

// Here is an array of UPPERCASE characters to be included in password
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

// Function to get characters from the cosmos and shake it around like a scrabble bag
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Function to Generate Password starting with a prompt for length followed by confirmation of character choices
function generatePassword() {
  let randomPassword = [];
  let possibleCharacters = [];
  let passwordLength = window.prompt(
    "Welcome to this simple Password Generator. How many characters do you want in your password?"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Password is either less than 8 or more than 128 characters, refresh & give it another try.");
      return;
  }
  else {
    let hasSpecialChars = window.confirm(
      "First, Would you like special characters in your password?"
    );
    let hasNumericChars = window.confirm(
      "Next, Would you like numeric characters in your password?"
    );
    let hasLowerCase = window.confirm(
      "Next, Would you like lower case characters in your password?"
    );
    let hasUpperCase = window.confirm(
      "Finally, Would you like upper case characters in your password?"
    );

    if (hasSpecialChars) {
      randomPassword.push(getRandom(specialCharacters));
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }

    if (hasNumericChars) {
      randomPassword.push(getRandom(numericCharacters));
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }

    if (hasLowerCase) {
      randomPassword.push(getRandom(lowerCasedCharacters));
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    }

    if (hasUpperCase) {
      randomPassword.push(getRandom(upperCasedCharacters));
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    }
  }
  
// This setup determines length of password after prompts are confirmed
  let remainingPasswordLength = passwordLength - randomPassword.length;

  for (let i = 0; i < remainingPasswordLength; i++) {
    randomPassword.push(getRandom(possibleCharacters));
  }
  return randomPassword.join("");
}

// Function to Write Password to the #password input
function writePassword() {
  let randomPassword = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}

// Function to Copy Password onto Clipboard
function copyPassword() {
  password.select();
  document.execCommand('copy');
  alert("Your Password is Copied Successfully! Test it out to see how strong your new password is.");
}

// Function to Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
