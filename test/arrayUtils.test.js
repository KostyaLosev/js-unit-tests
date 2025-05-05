import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('findMax', () => {
  it('should return the maximum value in the array', () => {
    expect(findMax([1, 2, 3, 4, 5])).to.equal(5);
  });

  it('should work correctly with negative numbers', () => {
    expect(findMax([-10, -5, -1])).to.equal(-1);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => findMax('123')).to.throw('Input must be an array');
  });
});

describe('findMin', () => {
  it('should return the minimum value in the array', () => {
    expect(findMin([3, 0, 9, -2])).to.equal(-2);
  });

  it('should work correctly with identical values', () => {
    expect(findMin([2, 2, 2])).to.equal(2);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => findMin({})).to.throw('Input must be an array');
  });
});

describe('removeDuplicates', () => {
  it('should remove duplicates from the array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4])).to.eql([1, 2, 3, 4]);
  });

  it('should return an empty array if the input is empty', () => {
    expect(removeDuplicates([])).to.eql([]);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => removeDuplicates(null)).to.throw('Input must be an array');
  });
});
