import React from "react";

export function mathHandler(firstNumber, secondNumber, operator) {
  console.log(firstNumber)
  switch (operator) {
    case "+":
      return +firstNumber + +secondNumber;
      break;
    case "-":
      return +firstNumber - +secondNumber;
      break;
    case "*":
      return +firstNumber * +secondNumber;
      break;
    case "/":
      // console.log(firstNumber / secondNumber);
      return +firstNumber / +secondNumber;
      break;
  }
}
