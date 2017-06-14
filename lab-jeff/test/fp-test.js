'use strict';

const expect = require('expect');

const fp = require('../lib/fp.js');

const testArray = [1, 2, 3];
const otherArray = [4, 5, 6];

describe('testing fp', () => {

  describe('testing map', () => {
    it('should return ', () => {
      let result = fp.map(testArray, n => n * 3);
      expect(result).toEqual([3, 6, 9]);
    });
  });

  describe('testing map', () => {
    it('should return null', () => {
      let result = fp.map('blue');
      expect(result).toEqual(null);
    });
  });

  describe('testing filter', () => {
    it('should return items in array less than 3', () => {
      let result = fp.filter(testArray, n => n < 3);
      expect(result).toEqual([1, 2]);
    });
  });

  describe('testing filter', () => {
    it('should return null', () => {
      let result = fp.filter('red');
      expect(result).toEqual(null);
    });
  });

  describe('testing reduce', () => {
    it('should return the sum of the numbers in array', () => {
      let result = fp.reduce(testArray, [(a, b) => a + b, 10]);
      expect(result).toEqual(16);
    });
  });

  describe('testing reduce', () => {
    it('should return null', () => {
      let result = fp.reduce('green');
      expect(result).toEqual(null);
    });
  });

  describe('testing concat', () => {
    it('should return two arrays concatenated as one', () => {
      let result = fp.concat(testArray, otherArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('testing concat', () => {
    it('should return null', () => {
      let result = fp.concat('orange');
      expect(result).toEqual(null);
    });
  });

  describe('testing splice', () => {
    it('should return array with 24 added to index position 2', () => {
      fp.splice(testArray, [2, 0, 24]);
      expect(testArray).toEqual([1, 2, 24, 3]);
    });
  });

  describe('testing splice', () => {
    it('should return null', () => {
      let result = fp.splice('purple');
      expect(result).toEqual(null);
    });
  });
});
