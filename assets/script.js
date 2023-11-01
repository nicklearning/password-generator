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

  // prompt user for password length
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
  } while (length < 8 || length > 128);


  console.log(length);

  // prompt user for their desired characters in their password 
  var lowers = confirm("Do you want lowercase letters?");
  console.log(lowers);

  var uppers = confirm("Do you want uppercase letters?");
  console.log(uppers);

  var numbers = confirm("Do you want numbers?");
  console.log(numbers);

  var specials = confirm("Do you want special letters?");
  console.log(specials);

  // set the value for all possible combined conditions the user entered.
  var combinedCondition1 = lowers && uppers && numbers && specials;
  var combinedCondition2 = lowers && uppers && numbers && !specials;
  var combinedCondition3 = lowers && uppers && !numbers && specials;
  var combinedCondition4 = lowers && uppers && !numbers && !specials;
  var combinedCondition5 = lowers && !uppers && numbers && specials;
  var combinedCondition6 = lowers && !uppers && numbers && !specials;
  var combinedCondition7 = lowers && !uppers && !numbers && specials;
  var combinedCondition8 = lowers && !uppers && !numbers && !specials;
  var combinedCondition9 = !lowers && uppers && numbers && specials;
  var combinedCondition10 = !lowers && uppers && numbers && !specials;
  var combinedCondition11 = !lowers && uppers && !numbers && specials;
  var combinedCondition12 = !lowers && uppers && !numbers && !specials;
  var combinedCondition13 = !lowers && !uppers && numbers && specials;
  var combinedCondition14 = !lowers && !uppers && numbers && !specials;
  var combinedCondition15 = !lowers && !uppers && !numbers && specials;
  var combinedCondition16 = !lowers && !uppers && !numbers && !specials;

  // conditionally create the list of characters based on the user's desired characters
  while (password.length < length) {
    if (combinedCondition1) {
      var concatList = lowercaseList + uppercaseList + numList + specialList;
      var val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition2) {
      concatList = lowercaseList + uppercaseList + numList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition3) {
      concatList = lowercaseList + uppercaseList + specialList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition4) {
      concatList = lowercaseList + uppercaseList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition5) {
      concatList = lowercaseList + numList + specialList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition6) {
      concatList = lowercaseList + numList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition7) {
      concatList = lowercaseList + specialList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition8) {
      concatList = lowercaseList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition9) {
      concatList = uppercaseList + numList + specialList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition10) {
      concatList = uppercaseList + numList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition11) {
      concatList = uppercaseList + specialList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition12) {
      concatList = uppercaseList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition13) {
      concatList = numList + specialList;
      val = getRandomItem(concatList);
      password += val;
    }  else if (combinedCondition14) {
      concatList = numList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition15) {
      concatList = specialList;
      val = getRandomItem(concatList);
      password += val;
    } else if (combinedCondition16) {
      password = "";
      return;
    }

  }

  return password;

}

function getRandomItem(str) {
  return str[Math.floor(Math.random() * str.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

