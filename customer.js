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

  collectionValue: function(genre){
    var totalValue = 0
    var filteredCollection = []

    if (genre){
      filteredCollection = this.collection.filter(function(record){
        return record.genre === genre
      })
    } else {
      filteredCollection = this.collection
    }

    filteredCollection.forEach(function(record){
      totalValue += record.price
    })
    return totalValue
  },

  mostValuableRecord: function(){
    var mostValuable
    var highestPrice = 0
    this.collection.forEach(function(record){
      if (record.price > highestPrice) {
        highestPrice = record.price
        mostValuable = record
      }
    })
    return mostValuable
  },  

  sortByAscendingValue: function(){
    this.collection.sort(function(record1, record2){
      return record2.price - record1.price
    })
  }
}


module.exports = Customer