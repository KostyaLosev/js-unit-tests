import { expect } from 'chai';
import { checkStudentKnowledge } from '../src/studentKnowlegeCheckerUtils.js';

describe('checkStudentKnowledge', () => {
  it('should return true if all answers are correct', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });

  it('should return false if at least one answer is incorrect', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'D',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return false if the number of questions does not match', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'B',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return false if the order of questions does not match', () => {
    const studentAnswers = {
      question2: 'B',
      question1: 'A',
      question3: 'C',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return false if student has extra answers', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
      question4: 'D',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return true if both answer objects are empty', () => {
    const studentAnswers = {};
    const correctAnswers = {};

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });
});
