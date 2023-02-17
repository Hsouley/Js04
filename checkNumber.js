function checkNumber(n) {
  if (n < 5) {
    console.log("Faible");
  } else if(n >= 5 && n <= 6) {
    console.log("Moyen");
  } 
}

// Exemple d'utilisation de la fonction :
checkNumber(3); // Output : Faible
checkNumber(5); // Output : Moyen
checkNumber(6); // Output : Moyen

module.exports = checkNumber;