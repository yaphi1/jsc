const assert = chai.assert;

describe('stuff', function(){
	it('should do stuff');
});


describe('math stuff', function(){

	describe('addNumbers()', function(){
		it('should add 1 + 2 = 3', function(){
			const actual = addNumbers(1,2);
			const expected = 3;
			assert.equal(actual, expected);
		});

		it('should add 1 + -5 = -4', function(){
			const expected = -4;
			const actual = addNumbers(1,-5);
			assert.equal(actual, expected);
		});

		it('should add 1 + 2 = 3 (purposely failing test)', function(){
			const actual = addNumbers(1,2)+5;
			const expected = 3;
			assert.equal(actual, expected, 'OUR ADDITION DONE GOOFED');
		});

		it('should throw error for non-numeric inputs');
	});

});