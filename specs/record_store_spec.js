var assert = require('assert')
var RecordStore = require('../recordStore.js')
var Record = require('../record.js')

describe("Record Store", function(){

  var recordStore
  var record1
  var record2

  beforeEach(function(){
    recordStore = new RecordStore("Ross' Records", "Edinburgh")
    record1 = new Record("Perturbator", "The Uncanny Valley", "Electronic" , 1099)
    record2 = new Record("Iron Maiden", "Powerslave", "Metal", 799)
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

  it("begins with a balance of 0", function(){
    assert.strictEqual(0, recordStore.balance)
  })

  it("can add records to the inventory", function(){
    recordStore.addRecord(record1)
    assert.deepEqual([record1], recordStore.inventory)
  })

  

  it("can get t")

})