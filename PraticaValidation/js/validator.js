"use strict";

const VOWEL_TILDE = new Array('á', 'é', 'í', 'ó', 'ú');

export function checkIfElementValueIsEmpty(element, nombreElemento) {
  if (element === null || element === undefined || element === "") {
    return `The element ${nombreElemento} has no value! <br>`;
  }
  return "";
}

export function checkPassword(element) {
  if (element === null || element === undefined) {
    return `The password has no value! <br>`;
  }

  if (element.length <= 5) {
    return `The password size is too small,it needs to be 5 <br>`;
  }

  if (!/[A-Z]/.test(element) || !/\d/g.test(element)) {
    return `The password need to have one capital letter and one digit <br>`;
  }

  const containsVowelsWithTilde = VOWEL_TILDE.some(x => {
    return element.toLowerCase().includes(x);
  });

  if (containsVowelsWithTilde) {
    return `The password contains element with tilde <br>`;
  }
  return "";
}


export function checkIsOlderThanEighteen(date) {
  date = new Date(date);
  if (new Date().getFullYear() - date.getFullYear() < 18) {
    return "The user needs to be at least 18 years old <br>";
  }
  return "";
}

export function checkIfIsCorrectIban(iban) {
  if (iban === null || iban === "" || iban === undefined) {
    return "The iban is empty <br>";
  }

  if (isNaN(iban)) {
    return "The iban is not a number <br>";
  }

  if (iban.length !== 20) {
    return "The iban need to be spanish with 24 numbers <br>";
  }
  return "";
}

export function checkIfCorrectPhone(tlfno) {
  if(!/\d{9}/.test(tlfno)) return "The phone number is wrong <br>";
  return "";
}