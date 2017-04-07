var Record = require('./record.js')

var RecordStore = function(name, city){
  this.name = name
  this.city = city
  this.inventory = []
  this.balance = 0
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record)
  },

  listInventory: function(){
    var inventoryObject = {}
    this.inventory.forEach(function(record){
      var inventoryKey = record.artist + " - " + record.title
      if(inventoryObject[inventoryKey]){
        inventoryObject[inventoryKey]++
      } else {
        inventoryObject[inventoryKey] = 1
      }
    })

    var inventoryString = ""
    var inventoryKeys = Object.keys(inventoryObject)
    var counter = 0;

    inventoryKeys.forEach(function(inventoryKey){
      counter++
      inventoryString += inventoryKey + " - " + inventoryObject[inventoryKey]
      if (inventoryObject[inventoryKey] > 1){
        inventoryString += " copies"
      } else {
        inventoryString += " copy"
      }
      if (counter < inventoryKeys.length){
        inventoryString += ", "
      }
    })
    return inventoryString
  },

  sellRecord: function(record){
    var index = this.inventory.indexOf(record)
    this.inventory.splice(index, 1)
    this.balance += record.price
  },

  financialSituation: function(){
    var inventoryValue = 0
    this.inventory.forEach(function(record){
      inventoryValue += record.price
    })

    return this.name + " has a balance of £" + this.balance/100 + " and an inventory value of £" + inventoryValue/100
  },

  getAllGenre: function(searchGenre){
    return this.inventory.filter(function(record){
      return record.genre === searchGenre
    })
  }


  
}



module.exports = RecordStore