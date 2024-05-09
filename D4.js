/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

const returnArea1 = area(5, 2);
const returnArea2 = area(3, 4);
console.log("l1 = 5; l2 = 2; area del rettangolo: ", returnArea1);
console.log("l1 = 3; l2 = 4; area del rettangolo: ", returnArea2);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
}

const resultCrazySum1 = crazySum(5, 3);
const resultCrazySum2 = crazySum(2, 2);
console.log("num1 = 5; num2 = 3; risultato: ", resultCrazySum1);
console.log("num1 = 2; num2 = 2; risultato: ", resultCrazySum2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num3, num4 = 19) {
  if (num3 < 19) {
    return Math.abs(num3 - num4);
  } else {
    return Math.abs(num3 - num4) * 3;
  }
}

const resultCrazyDiff1 = crazyDiff(18);
const resultCrazyDiff2 = crazyDiff(26);
console.log(resultCrazyDiff1);
console.log(resultCrazyDiff2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
}

const resultBoundary1 = boundary(20);
const resultBoundary2 = boundary(77);
const resultBoundary3 = boundary(100);
const resultBoundary4 = boundary(400);
const resultBoundary5 = boundary(15);
console.log("n = 20; result: ", resultBoundary1);
console.log("n = 77; result: ", resultBoundary2);
console.log("n = 100; result: ", resultBoundary3);
console.log("n = 400; result: ", resultBoundary4);
console.log("n = 15; result: ", resultBoundary5);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa1) {
  const firstWord = stringa1.split(" ")[0];
  if (firstWord !== "EPICODE") {
    return (stringa1 = "EPICODE " + stringa1);
  } else {
    return stringa1;
  }
}

const resultEpify1 = epify("ciao come va");
const resultEpify2 = epify("EPICODE ciao come va");
console.log(resultEpify1);
console.log(resultEpify2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (n % 3 === 0 && n % 7 !== 0) {
    return "multiplo di 3";
  } else if (n % 7 === 0 && n % 3 !== 0) {
    return "multiplo di 7";
  } else if (n % 3 === 0 && n % 7 === 0) {
    return "multiplo di 3 e di 7";
  } else {
    return "non multiplo di 3 o di 7";
  }
}

const resultCheck1 = check3and7(21);
const resultCheck2 = check3and7(4);

console.log(resultCheck1);
console.log(resultCheck2);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
