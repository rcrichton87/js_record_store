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
  },

  sellRecord: function(record){
    if(this.collection.includes(record)){
      this.cash += record.price
      index = this.collection.indexOf(record)
      this.collection.splice(index, 1)
    }
  }
}


module.exports = Customer