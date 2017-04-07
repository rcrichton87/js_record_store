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

  getDetails: function(){
    return this.name + " in " + this.city + " has a balance of " + this.balance + " and " + this.inventory.length + " records in stock"
  }
}


module.exports = RecordStore