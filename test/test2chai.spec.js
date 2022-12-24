var chai = require('chai')
var assert = chai.assert
var should =  chai.should()
var expect = chai.expect

describe('testing with chai', function () {
    describe('#index of a nmbr()', function () {
      it(' it should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(2), 1)
      });
    });
  });

  describe('Assert check', function(){
    let username= 'Prashant';
    it('checking username type',function(){
        assert.typeOf(username,'string')
    })

    it('matching username',function(){
        assert.equal(username,'Prashant')
    })
  })