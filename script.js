const alphabet = ["A","a","B","b","C","c","ç","D","d","E","e","é","È","è","Ê","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z","-","'",".",",",":","!","?","@","(",")","\"", " "]

const inputHTML = document.querySelector('#input')
const outputHTML = document.querySelector('#output')
const decoderBtn = document.querySelector('#decoderBtn')
const encoderBtn = document.querySelector('#encoderBtn')
const facteurInput = document.querySelector('#facteur')

function findPosition(char) {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === char) {
      return i;
    }
  }
  return -1; // Retourne -1 si le caractère n'est pas trouvé
}

function getCharacter(index) {
  // L'index doit être ajusté pour rester dans les limites de l'alphabet
  // Si l'index est négatif, on ajoute la longueur de l'alphabet
  // Si l'index dépasse la longueur, le modulo le ramène à une valeur valide
  const adjustedIndex = (index % alphabet.length + alphabet.length) % alphabet.length;
  return alphabet[adjustedIndex];
}

function stringToTableau(str) {
  return str.split('').map(char => char);
}

function encoder() {
  const facteur = parseInt(facteurInput.value);
  if (isNaN(facteur)) { // Utiliser isNaN pour vérifier si la valeur n'est pas un nombre
    alert("Merci de mettre un facteur valide...");
    return null;
  }
  const input = stringToTableau(inputHTML.value);
  let output = "";
  input.forEach(char => {
    const position = findPosition(char);
    if (position !== -1) { // Vérifier si le caractère est trouvé dans l'alphabet
      const newPosition = position + facteur;
      output += getCharacter(newPosition);
    } else {
      output += char; // Si le caractère n'est pas dans l'alphabet, l'ajouter tel quel
    }
  });
  outputHTML.textContent = output;
  inputHTML.value = "";
}

function decoder() {
  const facteur = parseInt(facteurInput.value);
  if (isNaN(facteur)) { // Utiliser isNaN pour vérifier si la valeur n'est pas un nombre
    alert("Merci de mettre un facteur valide...");
    return null;
  }
  const input = stringToTableau(inputHTML.value);
  let output = "";
  input.forEach(char => {
    const position = findPosition(char);
    if (position !== -1) { // Vérifier si le caractère est trouvé dans l'alphabet
      const newPosition = position - facteur;
      output += getCharacter(newPosition);
    } else {
      output += char; // Si le caractère n'est pas dans l'alphabet, l'ajouter tel quel
    }
  });
  outputHTML.textContent = output;
  inputHTML.value = "";
}

decoderBtn.addEventListener('click', () => decoder())
encoderBtn.addEventListener('click', () => encoder())