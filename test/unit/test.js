var assert = require('assert');
var Ronnie = require('../../src/ronnie');
var paul = new Ronnie();

describe('#test', function() {
    it('should return true', function(){
       assert.equal(true, paul.test()); 
    });

});
