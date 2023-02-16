function checkSign(n) {
  if (n < 0) {
    return "Negatif";
  } else {
    return "Positif";
  }
}

// Exemple d'utilisation de la fonction :
console.log(checkSign(-5)); // Output : Negatif
console.log(checkSign(10)); // Output : Positif
console.log(checkSign(0)); // Output : Positif
module.exports = checkSign