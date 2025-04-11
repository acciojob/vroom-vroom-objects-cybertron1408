// 1. Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// 2. SportsCar Constructor
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to inherit make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Example usage:
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getMakeModel()); // Output: "Toyota Corolla"

const mySportsCar = new SportsCar("Ferrari", "488", 211);
console.log(mySportsCar.getMakeModel()); // Output: "Ferrari 488"
console.log(mySportsCar.getTopSpeed());  // Output: 211
