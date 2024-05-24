let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

/***CREATES PASSWORD ***/

function generatePasswords() {
    let passwordOne = "";
    let passwordTwo = "";
    let passwordLength = 15;
    const passLength = document.getElementById("password_length").value;
    const symbols = document.getElementById("symbols_answer");
    const numbers = document.getElementById("numbers_answer");

    
    if (Number(passLength)) {
        passwordLength = passLength
    }
    
    if (!symbols.checked && numbers.checked) {
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    } else if (!numbers.checked && symbols.checked){
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    } else if (!numbers.checked && !symbols.checked){
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    }
       
    for (let i = 0; i < passwordLength; i++) {
        let characterOne = characters[Math.floor(Math.random() * (characters.length - 1))];
        passwordOne += characterOne;
        
        let characterTwo = characters[Math.floor(Math.random() * (characters.length - 1))];
        passwordTwo += characterTwo;
    }
    
    document.getElementById('password_field_one').textContent = passwordOne;
    document.getElementById('password_field_two').textContent = passwordTwo;
}

/***LIGHT MODE ***/

const lightModeCheckbox = document.getElementById("light_mode");
const container = document.getElementById("info_container");

lightModeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    container.classList.add("light-mode");
  } else {
    container.classList.remove("light-mode");
  }
});

/***COPY TEXT -- WIP ***/

function copyOnClick() {
    let passwordOneText = document.getElementById('password_field_one');
    // passwordOne.select();
    // document.execCommand("copy");
    // setClipboard(passwordOne);
      // Get the text field

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(passwordOneText.textContent);

  // Alert the copied text
  alert("Copied the text: " + passwordOneText.textContent);
}
