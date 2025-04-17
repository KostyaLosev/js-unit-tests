import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from "../src/stringUtils.js";

describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('should work with a single-character string', () => {
    expect(capitalize('h')).to.equal('H');
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => capitalize(123)).to.throw('Input must be a string');
  });
});

describe('reverseString', () => {
  it('should reverse the string', () => {
    expect(reverseString('abc')).to.equal('cba');
  });

  it('should return an empty string when input is empty', () => {
    expect(reverseString('')).to.equal('');
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => reverseString(null)).to.throw('Input must be a string');
  });
});

describe('isPalindrome', () => {
  it('should return true for palindromes', () => {
    expect(isPalindrome('madam')).to.be.true;
  });

  it('should return false for non-palindromes', () => {
    expect(isPalindrome('hello')).to.be.false;
  });

  it('should treat an empty string as a palindrome', () => {
    expect(isPalindrome('')).to.be.true;
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => isPalindrome(12321)).to.throw('Input must be a string');
  });
});
