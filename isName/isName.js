'use strict';

module.exports = (value) => {

	const regex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/g;
	const isEmpty = require('../isEmpty/isEmpty')(value);
	if(isEmpty) return false;

	const isString = require('../isString/isString')(value);
	if(!isString) return false;

	return regex.test(value);

 }