// Assignment Code
var generateBtn = document.querySelector("#generate");



//---- Let me start by saying this code is totally optional and if you want to go in a completely different direction I support it. Go with your gut and what works for you because it will help you figure out your thought process.Let us know if you have any questions and don't be afraid to start a dialogue with fellow students!  ----------------------- Delete this before you push your code to github LOL 
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "01234567879";
//the specialCharacters below I learned the usable string from https://stackoverflow.com/questions/11896599/javascript-code-to-check-special-characters
var specialCharacters ="~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
// The string provided by the orgianl instruction readme didn't seem to work https://owasp.org/www-community/password-special-characters
// var specialCharacters=" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    prompt('How many characters would you like your password to contain?(Please Select no less then 8 and no more than 128 characters.)'),
    10
  );

  // use if function to make sure the user select the password between 8 and 128 characters.
  if (length<8){
    alert("The length of your password might not be secure!");
    return;
  } else if (length > 128){
    alert("The length of your password is over our budget!");
    return;
  }


  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Object to store user input
  var passwordOptions = {
    length: length,
    // add more properties and values here
  }

  return passwordOptions;
}



// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }




  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
