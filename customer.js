var Customer = function(name){
  this.name = name
  this.collection = []
  this.cash = 0
}

Customer.prototype = {
  buyRecord: function(recordStore, record){
    if(recordStore.inventory.includes(record)){
      recordStore.sellRecord(record)
      this.cash -= record.price
      this.collection.push(record)
    }
  }
}


module.exports = Customer