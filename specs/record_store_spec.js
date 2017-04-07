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

})