// import { itEach } from '../build/index';
import { itEach } from '../lib/index';
import { expect } from 'chai';
import { Done } from 'mocha';


describe('Tests', function() {
  describe('in a loop sync with a value', function() {
    itEach.only('should all pass', [1, 1, 1], function(value: any) {
      expect(value).to.equal(1);
    });
  });

  describe('with objects works', function() {
    itEach.only('should all pass', [{ data: 1 }, { data: 1 }, { data: 1 }], function(value: any) {
      expect(value.data).to.equal(1);
    });
  });

  describe('Values are printed in description', function() {
    itEach.only('value is: ${value}', [1, 1, 1], function(value: any) {
      expect(value).to.equal(1);
    });
  });

  describe('in a loop sync without a value', function() {
    itEach.only('should all pass', [1, 1, 1], function() {
      expect(1).to.equal(1);
    });
  });

  describe('in a loop Async with a done function and a value', function() {
    itEach.only('should all pass', [1, 1, 1], function(done: Done, value: any) {
      expect(value).to.equal(1);
      done();
    });
  });

  describe('in a loop Async with values in description', function() {
    itEach.only('value is: ${value} ', [1, 1, 1], function(done: Done, value: any) {
      expect(value).to.equal(1);
      done();
    });
  });

  describe('Object literal in description should work', function() {
    itEach.only(`should pass`, [1, 1, 1], function(done: Done, value: any) {
      expect(value).to.equal(1);
      done();
    });
  });

  describe('No only, should not be called', function() {
    itEach('Will fail if called', [0], function() {
      expect(0).to.equal(1);
    });
  });

  describe.only('Test skip', function() {
    itEach.skip('With skip, should not be called, will fail if called', [0], function() {
      expect(0).to.equal(1);
    });
    itEach(`should pass`, [0], function() {
      expect(1).to.equal(1);
    });
  });
});


