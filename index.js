'use strict';

const coorganizador = {
    nombre: 'Juan Camilo',
    apellidos: 'Montoya',
    ciudad: 'Itagui',
    telefono: '2222222'
}

const validateData = function validateData() {
    let nombrecompleto = coorganizador.nombre + ' ' + coorganizador.apellidos;
    return nombrecompleto;
}

module.exports = {
    validateData : validateData
};