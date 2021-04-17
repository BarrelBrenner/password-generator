// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChar = "0123456789";
let specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
let passwordLength;
let uppercaseCheck;
let numberCheck;
let specialCheck;

//This function is used to determine length of password
function determineLength() {
  passwordLength = prompt(
    "Welcome! Please select the amount of characters you want your password to be (between 8-128 characters): "
  );

  if (passwordLength < 8) {
    alert("Not Enough. Password length must be a number between 8-128 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Too Many. Password length must be a number between 8-128 characters");
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert("Cannot recognize input. Password length must be a number between 8-128 characters");
    determineLength();
  } else {
    alert(
      "Good! Next will be 3 questions that will prompt you to select which types of characters you would want to include in your password.\nIf you type 'N' for all 3 prompts, password will only have lowercase letters."
    );
  }
  return passwordLength;
}

//This function determines whether user wants uppercase characters in their password
function determineUppercase() {
  uppercaseCheck = prompt(
    "First, do you want uppercase letters in your password? \n(Y or N)"
  );
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Field is empty. Please answer Y or N");
    determineUppercase();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  } else {
    alert("Cannot recognize input. Please answer Y or N");
    determineUppercase();
  }
  return uppercaseCheck;
}

//This function determines whether user wants numbers in their password
function determineNumbers() {
  numberCheck = prompt(
    "Next, do you want numbers in your password? \n(Y or N)"
  );
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Field is empty. Please answer Y or N");
    determineNumbers();
  } else if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Cannot recognize input. Please answer Y or N");
    determineNumbers();
  }
  return numberCheck;
}

//This function determines whether user wants special characters in their password
function determineSpecial() {
  specialCheck = prompt(
    "Finally, do you want special characters in your password? \n(Y or N)"
  );
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Field is empty. Please answer Y or N");
    determineSpecial();
  } else if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
    return specialCheck;
  } else {
    alert("Cannot recognize input. Please answer Y or N");
    determineSpecial();
  }
  return specialCheck;
}

//This function takes input from previous prompts and generates a password using a random number generator and
//charAt method which returns specified character from a string.
function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

  let characters = lowercaseChar;
  let password = "";
  if (uppercaseCheck && numberCheck && specialCheck) {
    characters += uppercaseChar + numberChar + specialChar;
  } else if (uppercaseCheck && numberCheck) {
    characters += uppercaseChar + numberChar;
  } else if (numberCheck && specialCheck) {
    characters += numberChar + specialChar;
  } else if (uppercaseCheck && specialCheck) {
    characters += uppercaseChar + specialChar;
  } else if (uppercaseCheck) {
    characters += uppercaseChar;
  } else if (numberCheck) {
    characters += numberChar;
  } else if (specialCheck) {
    characters += specialChar;
  } else {
    characters === lowercaseChar;
  }

  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  let password1 = "";
  password1 = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// function resetText(){
//   document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);