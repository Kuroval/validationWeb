"use strict";

const ABECEDARIO = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z');


export function getArrayData() {
    let arrayData = localStorage.getItem("arrayData");
    if (arrayData === null) {
        return arrayData = [];
    }
    return arrayData = JSON.parse(arrayData);
}

export function getAutonumericID() {
    let autonumericID= localStorage.getItem("autonumericID");
    if (autonumericID === null){
        return autonumericID = 0;
    }
    return autonumericID = JSON.parse(autonumericID);
}

export function cifrar(textValue) {

    const desplazamiento = 5

    let resultado = '';
    for (let i = 0; i < textValue.length; i++) {

        let indexNumber = ABECEDARIO.indexOf(textValue.charAt(i).toLowerCase());
        if (indexNumber === -1) {
            resultado = resultado + textValue.charAt(i);
            continue;
        }
        resultado = resultado + ABECEDARIO[(indexNumber + desplazamiento) % 26];
    }
    return resultado;
}

export function storeData(nombre, apellido, nacimiento, genero, iban, pass, phone, interest) {
    let arrayData = getArrayData();
    let autonumericID = parseInt(getAutonumericID());
    arrayData.push({
        id: autonumericID,
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento,
        genero: genero,
        iban: iban,
        pass: pass,
        phone: phone,
        interest: interest
    });
    autonumericID++;
    localStorage.setItem("arrayData", JSON.stringify(arrayData));
    localStorage.setItem("autonumericID", JSON.stringify(autonumericID));
}
