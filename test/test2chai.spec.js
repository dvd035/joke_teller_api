var chai = require('chai')
var assert = chai.assert

describe('testing with chai', function () {
    describe('#index of a nmbr()', function () {
      it(' it should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(2), 1);
      });
    });
  });