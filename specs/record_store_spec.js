var assert = require('assert')
var RecordStore = require('../recordStore.js')

describe("Record Store", function(){

  var recordStore

  beforeEach(function(){
    recordStore = new RecordStore("Ross' Records", "Edinburgh")
  })

  it("has a name", function(){
    assert.strictEqual("Ross' Records", recordStore.name)
  })

  it("has a city", function(){
    assert.strictEqual("Edinburgh", recordStore.city)
  })

  it("begins with an empty inventory", function(){
    assert.strictEqual(0, recordStore.inventory.length)
  })

})