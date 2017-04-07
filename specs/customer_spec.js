var assert = require('assert')
var Customer = require('../customer.js')

describe("Customer", function(){

  var customer1
  var customer2

  beforeEach(function(){
    customer1 = new Customer("Ross")
    customer2 = new Customer("Mike")
  })

  it("should have a name", function(){
    assert.strictEqual("Ross", customer1.name)
  })

  it("should start with an empty collection", function(){
    assert.strictEqual(0, customer1.collection.length)
  })

})