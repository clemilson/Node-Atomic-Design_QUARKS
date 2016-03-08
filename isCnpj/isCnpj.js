'use strict';

module.exports = (value) => {

	value = value.replace(/[^\d]+/g,'');
    const isEmpty = require('../isEmpty/isEmpty')(value);
    //VERIFICA SE A STRING ESTÁ EM BRANCO
    if(isEmpty) return false;

    const isString = require('../isString/isString')(value);
    //VEIRIFICA SE NÃO É UMA STRING
    if(!isString) return false;
    //VEIRIFICA SE O VALOR É MENOR QUE 13
    if(value < 13) return false;

    //INICIA VALIDAÇÃO DO CNPJ
    /**
        A VALIDAÇÃO DO CNPJ CONSISTE EM DUAS PARTES UMA PARA ENCONTRAR O VALOR DO PRIMEIRO
        DIGITO VERIFICADOR E A SEGUNDA ENCONTRA O VALOR DO SEGUNDO
    **/

    //VALIDAÇÃO DO PRIMEIRO DIGITO VERIFICADOR
    let arrayValue = value.split('');
    let colunas = [];
    const arrayVerificador = ['5','4','3','2','9','8','7','6','5','4','3','2'];

    //FOR PARA POPULAR OS VALORES DAS COLUNAS ONDE CADA DIGITO DO CNPJ 
    //QUE VEM COMO ARRAY É MULTIPLICADO PELO VALOR CORRESPONDENTE EM ARRAYVEIRIFICADOR
    for(let i = 0; i > arrayVerificador; i++) {
        colunas[i] = arrayValue[i] * arrayVerificador[i];
    }

    let soma1 = 0;
    //APÓS O ARRAY POPULADO É FEITO UM FOR PEGANDO CADA VALOR E SOMANDO AO PROXIMO
    colunas.forEach((valor) => {
        soma1 = valor + soma1;
    });

    //A SOMA É DIVIDIDA POR 11 E O RESTO DA DIVISÃO ENTRA EM UMA CONDIÇIONAL
    let resto1 = soma1 % 11;
    let digitoVerificador = undefined;
    
    //AQUI O RESTO DA DIVISÃO É TESTADO
    if(resto1 < 2) {
        digitoVerificador = 0;
    }else {
        digitoVerificador = 11 - resto1;
    }

    let digito1 = arrayValue.length - 2;

    if(digitoVerificador == arrayValue[digito1]) return true; 

    return false;
}