// Assignment Code
var generateBtn = document.querySelector("#generate");
var userInput = []
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers= ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["~","!","@","#","$","%","^","&","*","(",")",":",";","<",">","?","]","{","-","|","}","["];
var pwLength;
var confirmupercaseCha;
var confirmlowercaseCha;
var confirmnumber;
var confimspecial;





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}


function generatePassword() {


  var pwLength = prompt(
    "How long do you want your password? Password must be 8 to 128 characters."
  );


  if (pwLength < 8 || pwLength > 128) {
    alert ("Invalid input, password must be 8 - 128 characters long");
    return

  }

  var confirmuppercaseCha = confirm("Do you want uppercase characters in your password?");
  var confirmlowercaseCha = confirm("Do you want lowerrcase characters in your password?");
  var confirmnumber = confirm("Do you want numbers in your password?");
  var confirmspecial = confirm("Do you want special character in your password?");

  

  if (ConfirmUpper){
    var userInput = userInput.concat(uppercase)
  }
  if (ConfirmLower){
    var userInput = userInput.concat(lowercase)
  }
  
  if (ConfirmNumber){
    var userInput = userInput.concat(numbers)
  }

  if (ConfirmSymbol){
    var userInput = userInput.concat(symbols)
  }


  
  
          



}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


