
let numberOne = +prompt("Introduce un número");
let numberTwo = +prompt("Introduce otro número");
function calculator() {
  if (
    Number.isNaN(numberOne) ||
    Number.isNaN(numberTwo) ||
    numberOne === "" ||
    numberTwo === "" ||
    numberOne === null ||
    numberTwo === null
  ) {
    alert("No has introducido los valores correctos");
  } else if (numberTwo === null || numberTwo === +"") {
    console.log("El valor de la raíz cuadrada es " + Math.sqrt(numberOne));
  } else if (numberOne === null || numberOne === +"") {
    console.log("El valor de la raíz cuadrada es " + Math.sqrt(numberTwo));
  } else {
    let resultSum = numberOne + numberTwo;
    resultSum = parseFloat(resultSum.toFixed(3));
    let resultRest = numberOne - numberTwo;
    resultRest = parseFloat(resultRest.toFixed(3));
    let resultMult = numberOne * numberTwo;
    resultMult = parseFloat(resultMult.toFixed(3));
    let resultDiv = numberOne / numberTwo;
    resultDiv = parseFloat(resultDiv.toFixed(3));
    let sqrt1 = numberOne * numberOne;
    resultSqrt = parseFloat(sqrt1.toFixed(3));
    const allResults = [
      resultSum + "," + resultRest + "," + resultMult + "," + resultDiv,
    ];

    console.log(
      "The result of " +
        numberOne +
        " + " +
        numberTwo +
        " is equal to " +
        resultSum
    );
    console.log(
      "The result of " +
        numberOne +
        " - " +
        numberTwo +
        " is equal to " +
        resultRest
    );
    console.log(
      "The result of " +
        numberOne +
        " * " +
        numberTwo +
        " is equal to " +
        resultMult
    );
    console.log(
      "The result of " +
        numberOne +
        " / " +
        numberTwo +
        " is equal to " +
        resultDiv
    );

    console.log("All results together " + allResults);
  }
}

calculator(numberOne, numberTwo);
view rawcalculadora práctica 1 hosted with ❤ by GitHub