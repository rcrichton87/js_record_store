var assert = require('assert')
var Record = require('../record.js')

describe("Record", function(){

  var record

  beforeEach(function(){
    record = new Record("Perturbator", "The Uncanny Valley", "Electronic" , 1099)
  })

  it("has an artist", function(){
    assert.strictEqual("Perturbator", record.artist)
  })

})