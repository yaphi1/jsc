const assert = require('assert');

const example = require('../example.js');
const addNumbers = example.addNumbers;


describe('math operations', function(){

	describe('addNumbers()', function(){

		it('should add 1 + 5 = 6', function(){
			const expected = 6;
			const actual = addNumbers(1,5);
			assert.equal(actual, expected);
		});

		it('should add 1 + -5 = -4', function(){
			const expected = -4;
			const actual = addNumbers(1,-5);
			assert.equal(actual, expected);
		});

		it('should throw error if non-numeric');
	});

});
