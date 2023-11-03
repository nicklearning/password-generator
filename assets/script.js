// Assignment code here
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var uppercaseList = lowercaseList.toUpperCase();
var specialList = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numList = "0123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  var concatList = "";

  // prompt user for password length. Password must be at least 8 characters and no more than 128 characters.
  do {
    var length = prompt("How many characters would you like your password to be?", 8);
    if (length === null) {
      return; // exit the function
    }
    else if (length < 8) {
      alert("Password must be at least 8 characters.");
    }
    else if (length > 128) {
      alert("Password must be less than 128 characters.");
    }
  } while (length < 8 || length > 128); // code flow continues if satisfied


  // prompt user for their desired characters in their password, returns boolean 
  var lowers = confirm("Do you want lowercase letters?");
  var uppers = confirm("Do you want uppercase letters?");
  var numbers = confirm("Do you want numbers?");
  var specials = confirm("Do you want special letters?");

  // make user config object to store the results of the user selections 
  let userConfig = {
    lowerCase: lowers,
    upperCase: uppers,
    numbers: numbers,
    specials: specials,
  }

  // create the list dynamically based on the user's desired character types
  if (userConfig.lowerCase) {
    concatList += lowercaseList;
  }
  if (userConfig.upperCase) {
    concatList += uppercaseList;
  }
  if (userConfig.numbers) {
    concatList += numList;
  }
  if (userConfig.specials) {
    concatList += specialList;
  }

  // select a random value from the list and store it in the password.
  for (var i = 0; i < length; i++) {
    val = getRandomItem(concatList);
    password += val;
  }
    return password;
}

function getRandomItem(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

