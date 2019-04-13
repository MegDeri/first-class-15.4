function Phone(brand, price, color, size) {
  this.brand = brand;
  //by using this, the "brand" property of the object we create will assume the value of the brand argument
  this.price = price;
  this.color = color;
  this.size = size;
}

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and the size is " + this.size + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "Mobile-L");
var onePlusOne = new Phone("Nokia", 1250, "gold", "Mobile-S");
var samsungGalaxyS6 = new Phone("Samsung", 1790, "black", "Mobile-M");

iPhone6S.printInfo();
onePlusOne.printInfo();
samsungGalaxyS6.printInfo();