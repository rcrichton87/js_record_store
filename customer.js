var Customer = function(name){
  this.name = name
  this.collection = []
  this.cash = 0
}

Customer.prototype = {
  buyRecord: function(recordStore, record){
    if(recordStore.inventory.includes(record) && this.cash >= record.price){
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
  },

  collectionValue: function(){
    var totalValue = 0
    this.collection.forEach(function(record){
      totalValue += record.price
    })
    return totalValue
  }
}


module.exports = Customer