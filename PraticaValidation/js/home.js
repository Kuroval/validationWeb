"use strict";
import { getArrayData, cifrar } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  crearRowsTabla();
  const arrayEliminar = document.getElementsByClassName("eliminar");
  for (let element of arrayEliminar) {
    element.addEventListener("click", function () {
      deleteRowTabla(this.id)
    });
  }
  // const arrayMostrar = document.getElementsByClassName("mostrar");
  // for (let element of arrayMostrar) {
  //   element.addEventListener("click", function () {
  //     verDetalleRowTabla(this.id);
  //   });
  // }
});

function crearRowsTabla() {
  const arrayData = getArrayData()
  const tbody = document.getElementById('iBody');
  arrayData.forEach(element => {
    const row = document.createElement('tr');
    addDataColumn(element.nombre, row);
    addDataColumn(element.apellido, row);
    addDataColumn(element.phone, row);
    addDataColumn(element.nacimiento, row);
    addDataColumn(element.interest, row);
    addDataColumn(element.genero, row);
    addDataColumn(element.iban, row);
    addDataColumn(cifrar(element.pass), row);
    const del = createInputButton('Eliminar');
    del.classList.add("eliminar");
    del.setAttribute("id", `d${element.id}`);
    addInputColumn(del, row);
    const enlace = document.createElement('a');
    enlace.setAttribute("href",`detalle.html?idMostrar=${element.id}`);
    const show = createInputButton('Ver');
    show.classList.add("mostrar");
    show.setAttribute("id", `s${element.id}`);
    enlace.appendChild(show);
    addInputColumn(enlace, row);
    tbody.appendChild(row);
  });
}

function deleteRowTabla(rowID) {
  let arrayData = getArrayData();
  const rowNumber = String(rowID).substring(1);
  for (let index = 0; index < arrayData.length; index++) {
    if(parseInt(arrayData[index].id) === parseInt(rowNumber)){
      arrayData.splice(index, 1);
    }
  }
  localStorage.setItem("arrayData", JSON.stringify(arrayData));
  location.reload();
}

// function verDetalleRowTabla(rowID) {
//   let arrayData = getArrayData();
//   const rowNumber = String(rowID).substring(1);
//   for (let index = 0; index < arrayData.length; index++) {
//     if(parseInt(arrayData[index].id) === parseInt(rowNumber)){
//       localStorage.setItem("detalle", JSON.stringify(arrayData[index]));
//     }
//   }
// }

function addDataColumn(text, row) {
  const name = document.createElement('td');
  const texto = document.createTextNode(text);
  name.appendChild(texto);
  row.appendChild(name);
}

function addInputColumn(input, row) {
  const name = document.createElement('td');
  name.appendChild(input);
  row.appendChild(name);
}

function createInputButton(value) {
  const button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', value);
  return button;
}