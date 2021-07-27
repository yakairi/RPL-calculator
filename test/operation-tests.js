var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Math operations', function() {
    const operations = require('../math/operations');

    describe('Add', function(){
        it('2 + 8 must be 10', function(){
            assert.equal(operations.add(2,8), 10);
        });
        it('2 + 0 must be 2', function(){
            assert.equal(operations.add(2,0), 2);
        });
    });

    describe('divide', function(){
        it('20 / 5 must be 4', function(){
            assert.equal(operations.divide(20,5), 4);
        })
        it('20 / 0 must be Infinity', function(){
            assert.equal(operations.divide(20,0), Infinity);
        })
    });

    describe('multiply', function(){
        it('3.5 * 4.5 must be 15.75', function(){
            assert.equal(operations.multiply(3.5,4.5), 15.75);
        })
        it('3 * 4 must be 12', function(){
            assert.equal(operations.multiply(3,4), 15);
        })
    });

    describe('subtract', function(){
        it('3 - 2 must be 1', function(){
            assert.equal(operations.subtract(3,2), 1);
        })
    });
    
    describe('percentage', function(){
        it('((200 * 5) / 100 must be 10', function(){
            assert.equal(operations.percentage(200,5 ), 10);
        })
    })
});