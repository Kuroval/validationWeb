"use strict";
import { getArrayData} from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
    mostrarDetalle();
});

function mostrarDetalle() {
    const url = document.URL;
    const claveValor = url.substring(url.indexOf("idMostrar="));
    const valorID = claveValor.substring(claveValor.indexOf("=") + 1);
    const datos = encontrarDetalle(valorID);
    const titulo = document.createTextNode(`Detalle de ${datos.nombre} ${datos.apellido}`);
    document.getElementById("titulo").appendChild(titulo);
    crearDetalle(datos);
}

function encontrarDetalle(targetID) {
    const arrayData = getArrayData();
    for (let index = 0; index < arrayData.length; index++) {
        if (parseInt(arrayData[index].id) === parseInt(targetID)) {
            return arrayData[index];
        }
    }
    alert(`No me toques la URL que la tenemos :<`);
}

function crearDetalle(data) {
    createCabecera(data);
    datosToJSON(data);
    datosToXML(data);
}

function createCabecera(data) {
    const cabeceraDiv = document.getElementById("nombre");
    const saludo = document.createElement(`h1`);
    const textSaludo = document.createTextNode(`Hola ${data.nombre} ${data.apellido}`);
    saludo.appendChild(textSaludo);
    cabeceraDiv.appendChild(saludo);
    const parrafo = document.createElement(`p`);
    const text = document.createTextNode(`Los datos que tenemos son los siguientes:`);
    parrafo.appendChild(text);
    cabeceraDiv.appendChild(parrafo);
}

/* ---------------------------------- ZONA JSON ---------------------------------------------- */
function datosToJSON(data) {
    const jsonDiv = document.getElementById("json");
    createJSONOpener(jsonDiv);
    for (const [key, value] of Object.entries(data)) {
        if (key !== `id`) {
            const parrafo = createJSONEntry(key, value);
            jsonDiv.appendChild(parrafo);
        }
    }
    createJSONClosure(jsonDiv);
}

function createJSONEntry(contentKey, contentValue) {
    const dato = document.createElement(`p`);
    const text = document.createTextNode(`${contentKey}: '${contentValue}',`);
    dato.appendChild(text);
    dato.classList.add("indentado");
    return dato;
}

function createJSONOpener(target) {
    const dato = document.createElement(`p`);
    const text = document.createTextNode(`{`);
    dato.appendChild(text);
    target.appendChild(dato);
}

function createJSONClosure(target) {
    const dato = document.createElement(`p`);
    const text = document.createTextNode(`}`);
    dato.appendChild(text);
    target.appendChild(dato);
}
/* ---------------------------------- FIN ZONA JSON ---------------------------------------------- */
/* ---------------------------------- ZONA XML ---------------------------------------------- */
function datosToXML(data) {
    const xmlDiv = document.getElementById("xml");
    createXMLOpener(xmlDiv);
    for (const [key, value] of Object.entries(data)) {
        if (key !== `id`) {
            const parrafo = createXMLEntry(key, value);
            xmlDiv.appendChild(parrafo);
        }
    }
    createXMLClosure(xmlDiv);
}

function createXMLEntry(contentKey, contentValue) {
    const dato = document.createElement(`p`);
    const text = document.createTextNode(`<${contentKey}>${contentValue}</${contentKey}>`);
    dato.appendChild(text);
    dato.classList.add("indentado");
    return dato;
}

function createXMLOpener(target) {
    const dato = document.createElement(`p`);
    const text = document.createTextNode(`<datos>`);
    dato.appendChild(text);
    target.appendChild(dato);
}

function createXMLClosure(target) {
    const dato = document.createElement(`p`);
    const text = document.createTextNode(`</datos>`);
    dato.appendChild(text);
    target.appendChild(dato);
}
/* ---------------------------------- FIN ZONA XML ---------------------------------------------- */
