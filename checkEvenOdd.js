function checkEvenOdd(nombre) {
  if (nombre % 2 === 0) {
    return "Pair";
  } else {
    return "Impair";
  }
}

// Exemple d'utilisation de la fonction :
console.log(checkEvenOdd(7)); // Output : Impair
console.log(checkEvenOdd(10)); // Output : Pair
  module.exports = checkEvenOdd