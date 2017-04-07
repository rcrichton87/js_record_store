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
    record3 = new Record("Perturbator", "The Uncanny Valley", "Electronic" , 1099)

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

  it("can list the inventory", function(){
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    recordStore.addRecord(record3)
    var expected = "Perturbator - The Uncanny Valley - 2 copies, Iron Maiden - Powerslave - 1 copy"
    assert.strictEqual(expected, recordStore.listInventory())
  })

  it("can sell a record, removing it from the inventory and adding funds to the balance", function(){
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    recordStore.addRecord(record3)
    recordStore.sellRecord(record2)
    assert.strictEqual(2, recordStore.inventory.length)

    assert.strictEqual(799, recordStore.balance)
  })

  it("can report the financial situation", function(){
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    recordStore.addRecord(record3)
    recordStore.sellRecord(record2)
    var expected = "Ross' Records has a balance of £7.99 and an inventory value of £21.98"
    assert.strictEqual(expected, recordStore.financialSituation())
  })

})