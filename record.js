var Record = function(artist, title, genre, price){
  this.artist = artist
  this.title = title
  this.genre = genre
  this.price = price
}

Record.prototype = {
  
  printDetails: function(){
    return this.artist + " - " + this.title + " - " + this.genre + " - £" + this.price/100
  }
}

module.exports = Record