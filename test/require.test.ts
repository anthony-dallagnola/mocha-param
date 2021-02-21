import { run } from '../lib/index';
import { expect } from 'chai';


describe('Calling itParam in a loop sync with a value', function() {
  run('should all pass', [1, 1, 1], function(value) {
    expect(value).to.equal(1);
  });
});

describe('Calling itParam with objects works', function() {
  run('should all pass', [{ data: 1 }, { data: 1 }, { data: 1 }], function(value) {
    expect(value.data).to.equal(1);
  });
});

describe('Calling itParam in a loop Async with values in description', function() {
  run('values are: ${value} ', [1, 1, 1], function(done, value) {
    expect(value).to.equal(1);
    done();
  });
});


