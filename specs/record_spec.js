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

  it("has a title", function(){
    assert.strictEqual("The Uncanny Valley", record.title)
  })

  it("has a genre", function(){
    assert.strictEqual("Electronic", record.genre)
  })

})