console.log('test logged here');

const assert = require('assert');
describe('adding stuff', ()=>{
	it('should add 1+1=2', ()=>{
		const expected = 2;
		const actual = 1+1;
		assert.equal(expected, actual);
	});
});