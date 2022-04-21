// Assignment Code
var generateBtn = document.querySelector("#generate");


function questions() {
  var pwLength = prompt(
    "How long do you want your password? Password must be 8 to 128 characters."
  );

  if (pwLength < 8 || pwLength > 128) {
    alert ("Invalid input, password must be 8 - 128 characters long");
    return

  }
}


function generatePassword() {

  questions()

  var upperCaseCha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCaseCha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numericCha= ["0","1","2","3","4","5","6","7","8","9"];
  var specialCha = ["~","!","@","#","$","%","^","&","*","(",")",":",";","<",">","?","]","{","-","|","}","["];

  var uppercase = confirm("Do you want uppercase characters in your password?");
  var lowercase = confirm("Do you want lowerrcase characters in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var symbols = confirm("Do you want special character in your password?");

  var userInput = []


  if (uppercase){
    userInput.concat(userInput, upperCaseCha)
  };
  if (lowercase){
    userInput.concat(userInput, lowerCaseCha)
  };
  
  if (numbers){
    userInput.concat(userInput, numericCha)
  };

  if (symbols){
    userInput.concat(userInput, specialCha)
  };



}

function writePassword() {
  generatePassword()
  var password = generatePassword();
    
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

