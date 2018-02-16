const expect = require('chai').expect;
const fizzbuzz = require('./index').fizzbuzz;

describe('fizzbuzz', () => {
    it('should return a number', () => {
        const result = fizzbuzz(1);
        expect(result).to.equal('1');
    });
});