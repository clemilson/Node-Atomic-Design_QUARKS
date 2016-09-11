'use strict';

const expect = require('chai').expect;

const valueFalse = ['','Arthur11','#ddd',2009, '@seu nom'];
const valueTrue = ['Arthur','Arthur Lima', 'Arthur Lima filho do Ronaldo'];

const testeFalse = (values) => {
	values.forEach((element,index) => {
		it('testando: '+element,() => {
			expect(require('./isName')(element)).to.equal(false);
		});
	});
}

const testeTrue = (values) => {
	values.forEach((element,index) => {
		it('testando: '+element,() => {
			expect(require('./isName')(element)).to.equal(true);
		});
	});
}

describe('testando validação dos nomes:' , () => {
	describe('teste False',() => testeFalse(valueFalse));
	describe('teste True',() => testeTrue(valueTrue));
});