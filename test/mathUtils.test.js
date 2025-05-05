import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('add', () => {
  it('should correctly add two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should work correctly with negative numbers', () => {
    expect(add(-2, -4)).to.equal(-6);
  });
});

describe('subtract', () => {
  it('should correctly subtract two numbers', () => {
    expect(subtract(10, 4)).to.equal(6);
  });

  it('should work correctly with negative numbers', () => {
    expect(subtract(-5, -2)).to.equal(-3);
  });
});

describe('multiply', () => {
  it('should correctly multiply two numbers', () => {
    expect(multiply(3, 4)).to.equal(12);
  });

  it('should return 0 when multiplying by 0', () => {
    expect(multiply(5, 0)).to.equal(0);
  });
});

describe('divide', () => {
  it('should correctly divide two numbers', () => {
    expect(divide(10, 2)).to.equal(5);
  });

  it('should work with negative numbers', () => {
    expect(divide(-8, 2)).to.equal(-4);
  });

  it('should throw an error when dividing by 0', () => {
    expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
  });
});
