"use strict";
import { storeData } from "./main.js";
import {
  checkIfElementValueIsEmpty, checkPassword,
  checkIsOlderThanEighteen, checkIfIsCorrectIban,
  checkIfCorrectPhone,
} from "./validator.js";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('idForm').addEventListener("submit", function (event) {
    checkAndSaveData(event);
  })
});

function checkAndSaveData(event) {
  let message = "";
  const nombre = document.getElementById('iNombre').value;
  const apellido = document.getElementById('iApellido').value;
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const nacimiento = document.getElementById('iNacimiento').value;
  const pass = document.getElementById('iPass').value;
  const iban = document.getElementById('ccc1').value
    + document.getElementById('ccc2').value
    + document.getElementById('ccc3').value
    + document.getElementById('ccc4').value;
  const phone = document.getElementById('iTlfno').value;
  const interest = document.getElementById('iInteres').value;

  const errName = checkNombre(nombre);
  const errApellido = checkApellido(apellido);
  const errTel = checkPhone(phone);
  const errNac = checkNacimiento(nacimiento);
  const errNacMayor = checkNacimientoMayor(nacimiento);
  const errIban = checkIban(iban);
  const errGen = checkGenero(genero);
  const errPass = checkPass(pass);

  setErrorMessage(event, errName, 'nombreError');
  setErrorMessage(event, errApellido, 'apellError');
  setErrorMessage(event, errTel, 'tfnoError');
  setErrorMessage(event, errNac, 'nacError');
  setErrorMessage(event, errNacMayor, 'nacErrorMayor');
  setErrorMessage(event, errGen, 'generoError');
  setErrorMessage(event, errIban, 'ibanError');
  setErrorMessage(event, errPass, 'passError');

  if (errName === "" && errApellido === "" && errTel === "" && errNac === "" && errNacMayor === "" && errIban === "" && errGen === "" && errPass === "") {
    storeData(nombre, apellido, nacimiento, genero, iban, pass, phone, interest);
  }
}

function setErrorMessage(event, message, id) {
  const error = document.getElementById(id);
  if (message !== "") {
    event.preventDefault();
    error.className = "error active";
    error.innerHTML = message;
    return;
  }
  error.className = "error";
  error.textContent = "";
}

function checkIban(iban) {
  return checkIfIsCorrectIban(iban);
}

function checkPass(pass) {
  return checkPassword(pass);
}

function checkPhone(phone) {
  return checkIfCorrectPhone(phone);
}

function checkNombre(nombre) {
  return checkIfElementValueIsEmpty(nombre, 'nombre');
}

function checkApellido(apellido) {
  return checkIfElementValueIsEmpty(apellido, 'apellido');
}

function checkNacimiento(nacimiento) {
  return checkIfElementValueIsEmpty(nacimiento, 'nacimiento');
}

function checkNacimientoMayor(nacimiento) {
  return checkIsOlderThanEighteen(nacimiento);
}

function checkGenero(genero) {
  return checkIfElementValueIsEmpty(genero, 'género');
}


