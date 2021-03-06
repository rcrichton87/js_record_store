var assert = require('assert')
var Customer = require('../customer.js')
var RecordStore = require('../recordStore.js')
var Record = require('../record.js')

describe("Customer", function(){

  var customer1
  var customer2
  var recordStore
  var record1
  var record2
  var record3
  var record4


  beforeEach(function(){
    customer1 = new Customer("Ross")
    customer2 = new Customer("Mike")
    recordStore = new RecordStore("Ross' Records", "Edinburgh")
    record1 = new Record("Perturbator", "The Uncanny Valley", "Electronic" , 1099)
    record2 = new Record("Iron Maiden", "Powerslave", "Metal", 799)
    record3 = new Record("Perturbator", "The Uncanny Valley", "Electronic" , 1099)
    record4 = new Record("Black Sabath", "Paranoid", "Metal", 999)
    record5 = new Record("Daft Punk", "Discovery", "Electronic", 899)
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    recordStore.addRecord(record3)
    recordStore.addRecord(record4) 
  })

  it("should have a name", function(){
    assert.strictEqual("Ross", customer1.name)
  })

  it("should start with an empty collection", function(){
    assert.strictEqual(0, customer1.collection.length)
  })

  it("should start with 0 cash", function(){
    assert.strictEqual(0, customer1.cash)
  })

  it("should be able to buy records", function(){
    customer1.cash = 2000
    customer1.buyRecord(recordStore, record1)
    assert.deepEqual([record1], customer1.collection)
    assert.strictEqual(901, customer1.cash)
  })

  it("can't buy a record the store doesn't have", function(){
    customer1.cash = 2000
    customer1.buyRecord(recordStore, record5)
    assert.strictEqual(0, customer1.collection.length)
    assert.strictEqual(2000, customer1.cash)
  })

  it("can't buy a record it can't afford", function(){
    customer1.buyRecord(recordStore, record1)
    assert.strictEqual(0, customer1.collection.length)
    assert.strictEqual(0, customer1.cash)
  })

  it("should be able to sell records", function(){
    customer1.cash = 2000
    customer1.collection.push(record1)
    customer1.collection.push(record2)
    customer1.collection.push(record3)
    customer1.collection.push(record4)
    customer1.sellRecord(record1)
    assert.deepEqual([record2, record3, record4], customer1.collection)
    assert.strictEqual(3099, customer1.cash)
  })

  it("can't sell a record it deosn't have", function(){
    customer1.cash = 2000
    customer1.collection.push(record1)
    customer1.collection.push(record2)
    customer1.collection.push(record3)
    customer1.collection.push(record4)
    customer1.sellRecord(record5)
    assert.strictEqual(4, customer1.collection.length)
    assert.strictEqual(2000, customer1.cash)
  })

  it("can view the value of it's collection", function(){
    customer1.collection.push(record1)
    customer1.collection.push(record2)
    customer1.collection.push(record3)
    customer1.collection.push(record4)
    assert.strictEqual(3996, customer1.collectionValue())
  })

  it("can view the value of it's collection of a genre", function(){
    customer1.collection.push(record1)
    customer1.collection.push(record2)
    customer1.collection.push(record3)
    customer1.collection.push(record4)
    assert.strictEqual(1798, customer1.collectionValue("Metal"))
  })

  it("can view it's most valuable record", function(){
    customer1.collection.push(record1)
    customer1.collection.push(record2)
    customer1.collection.push(record3)
    customer1.collection.push(record4)
    assert.deepEqual(record1, customer1.mostValuableRecord())
  })

  it("can sort it's records by descending value", function(){
    customer1.collection.push(record1)
    customer1.collection.push(record2)
    customer1.collection.push(record3)
    customer1.collection.push(record4)
    customer1.collection.push(record5)
    customer1.sortByDescendingValue()
    assert.deepEqual([record1, record3, record4, record5, record2], customer1.collection)
  })

  it("can sort it's records by ascending value", function(){
    customer1.collection.push(record1)
    customer1.collection.push(record2)
    customer1.collection.push(record3)
    customer1.collection.push(record4)
    customer1.collection.push(record5)
    customer1.sortByAscendingValue()
    assert.deepEqual([record2, record5, record4, record1, record3], customer1.collection)
  })

  it("should be able to compare the value of it's collection with another collector", function(){
    customer1.collection.push(record1)
    customer1.collection.push(record3)
    customer1.collection.push(record5)
    customer2.collection.push(record2)
    customer2.collection.push(record4)
    assert.strictEqual(1299, customer1.compareCollectionWith(customer2))
    
  })

})