// Assignment Code
var generateBtn = document.querySelector("#generate");

// below I define each possible Characters catagories
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericCharacters = "01234567879".split("");
//the specialCharacters below I learned the usable string from https://stackoverflow.com/questions/11896599/javascript-code-to-check-special-characters
var specialCharacters = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?".split("");
// The string provided by the orgianl instruction readme didn't seem to work https://owasp.org/www-community/password-special-characters
// var specialCharacters=" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    // \n sends the text behind to the next new line.
    prompt('How many characters would you like your password to contain?\n(Please Select no less then 8 and no more than 128 characters.)'),
    10
  );

  // use if function to make sure the user select the password between 8 and 128 characters.
  if (length < 8) {
    alert("The Length of Your Password Is too Short to be Secure!");
    return;
  } else if (length > 128) {
    alert("The Length of Your Password Is Way Over Our Budget!");
    return;
  }


  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected


  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


  // Variable to store boolean regarding the inclusion of lowercase characters
  var haslowercaseCharacters = confirm(
    'Click OK to confirm including LOWER case character(s).'
  );
  // Variable to store boolean regarding the inclusion of upper case characters
  var hasuppercaseCharacters = confirm(
    'Click OK to confirm including UPPER case character(s).'
  );
  // Variable to store boolean regarding the inclusion of numbers
  var hasnumericCharacters = confirm(
    'Click OK to confirm including NUMERIC character(s).'
  );
  // Variable to store boolean regarding the inclusion of special characters
  var hasspecialCharacters = confirm(
    'Click OK to confirm including SPECIAL character(s).'
  );


  // Object to store user input
  var passwordOptions = {
    length: length,
    lowercaseCharacters: haslowercaseCharacters,
    uppercaseCharacters: hasuppercaseCharacters,
    numericCharacters: hasnumericCharacters,
    specialCharacters: hasspecialCharacters,
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
  // Push new random lowercase character to guaranteedCharacters
  if (options.haslowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters));
  }
  // Push new random uppercase character to guaranteedCharacters
  if (options.hasuppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters));
  }

  if (options.hasnumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  result = result.concat(guaranteedCharacters);

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
