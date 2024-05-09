/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2;
};

const areaResult1 = area(5, 2);
const areaResult2 = area(3, 4);
console.log("l1 = 5; l2 = 2; area del rettangolo: ", areaResult1);
console.log("l1 = 3; l2 = 4; area del rettangolo: ", areaResult2);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
};

const crazySumResult1 = crazySum(5, 3);
const crazySumResult2 = crazySum(2, 2);
console.log("num1 = 5; num2 = 3; risultato: ", crazySumResult1);
console.log("num1 = 2; num2 = 2; risultato: ", crazySumResult2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num) {
  if (num < 19) {
    return Math.abs(num - 19);
  } else {
    return Math.abs(num - 19) * 3;
  }
};

const crazyDiffResult1 = crazyDiff(18);
const crazyDiffResult2 = crazyDiff(26);
console.log(crazyDiffResult1);
console.log(crazyDiffResult2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

const boundaryResult1 = boundary(20);
const boundaryResult2 = boundary(77);
const boundaryResult3 = boundary(100);
const boundaryResult4 = boundary(400);
const boundaryResult5 = boundary(15);
console.log("n = 20; result: ", boundaryResult1);
console.log("n = 77; result: ", boundaryResult2);
console.log("n = 100; result: ", boundaryResult3);
console.log("n = 400; result: ", boundaryResult4);
console.log("n = 15; result: ", boundaryResult5);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (str) {
  const firstWord = str.split(" ")[0];
  if (firstWord !== "EPICODE") {
    return (str = "EPICODE " + str);
  } else {
    return str;
  }
};

const epifyResult1 = epify("ciao come va");
const epifyResult2 = epify("EPICODE ciao come va");
console.log(epifyResult1);
console.log(epifyResult2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (n % 3 === 0 && n % 7 !== 0) {
    return "multiplo di 3";
  } else if (n % 7 === 0 && n % 3 !== 0) {
    return "multiplo di 7";
  } else if (n % 3 === 0 && n % 7 === 0) {
    return "multiplo di 3 e di 7";
  } else {
    return "non multiplo di 3 o di 7";
  }
};

const checkResult1 = check3and7(9);
const checkResult2 = check3and7(14);
const checkResult3 = check3and7(21);
const checkResult4 = check3and7(4);

console.log(checkResult1);
console.log(checkResult2);
console.log(checkResult3);
console.log(checkResult4);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (str) {
  let splitString = str.split("");
  let reverseString = splitString.reverse();
  let finalString = reverseString.join();
  return finalString;
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(phrase) {
  const parole = phrase.split(" ");
  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
  }
  return parole.join(" ");
}

const risultato = upperFirst("you shall not pass");
console.log(risultato);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (str) {
  return str.slice(1, str.length - 1);
};

console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const arr = [];
  for (i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
};

console.log(giveMeRandom(5));
