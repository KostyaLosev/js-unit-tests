import { expect } from 'chai';
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } from '../src/uesrsListUtils.js';

const users = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 20, email: 'charlie@example.com' },
  { id: 4, name: 'Dave', age: 35, email: 'dave@example.com' },
];

describe('filterUsersByAge', () => {
  it('should filter users by age range', () => {
    const result = filterUsersByAge(users, 20, 30);
    expect(result).to.have.lengthOf(3);
    expect(result[0].name).to.equal('Alice');
  });

  it('should return an empty array if no users in the specified age range', () => {
    const result = filterUsersByAge(users, 40, 50);
    expect(result).to.have.lengthOf(0);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => filterUsersByAge('invalid', 20, 30)).to.throw('Users must be an array');
  });
});

describe('sortUsersByName', () => {
  it('should sort users by name alphabetically', () => {
    const result = sortUsersByName(users);
    expect(result[0].name).to.equal('Alice');
    expect(result[1].name).to.equal('Bob');
    expect(result[2].name).to.equal('Charlie');
    expect(result[3].name).to.equal('Dave');
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => sortUsersByName('invalid')).to.throw('Users must be an array');
  });
});

describe('findUserById', () => {
  it('should find a user by ID', () => {
    const result = findUserById(users, 2);
    expect(result).to.deep.equal({ id: 2, name: 'Bob', age: 30, email: 'bob@example.com' });
  });

  it('should return null if a user with the given ID is not found', () => {
    const result = findUserById(users, 99);
    expect(result).to.be.null;
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => findUserById('invalid', 2)).to.throw('Users must be an array');
  });
});

describe('isEmailTaken', () => {
  it('should return true if email is already taken', () => {
    const result = isEmailTaken(users, 'alice@example.com');
    expect(result).to.be.true;
  });

  it('should return false if email is not taken', () => {
    const result = isEmailTaken(users, 'newuser@example.com');
    expect(result).to.be.false;
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => isEmailTaken('invalid', 'alice@example.com')).to.throw('Users must be an array');
  });
});
