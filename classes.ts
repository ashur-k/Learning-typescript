// To execute this file we can say ==> ts-node classes.ts // I have installed package ts-node and thats making it possible

//always going to captailise the name of class
// inside class body we are goign to define methods
// bydefault all methods are public methods
// so when we are foing to define private and protected then we are
//going to see difference

class Vehicle {

  colorr: string = 'red';

  // if class want to take special arguments we need to describe special function
  // called constructor function

  constructor(colorr: string){
      this.colorr = colorr;
      // we are reinitalising value of variable
  }
  // So whenever we are goign to pass argument in class instance, 
  // constructor function is going to run 
  // annotating drive to take no args with no return type
  public drive(): void {
    console.log ('chugaa chugga');
  }
  public honk(): void {
    console.log ('beep');
  }

  protected color(): void {
    console.log ('beep');
  }
}
const redVehicle = new Vehicle('orange')
console.log(redVehicle.colorr)

//Basic inheritance
// a car is a type of vehicle
// keywor extends is used fo inheritance
class Car extends Vehicle {
  // overridden a method on a child class
  // we are also goign to see another error in class Car definition
  // class Car incorrectly extends base class Vehicl property drive
  // is private in type Car but not in type Vehicle
  //private drive(): void{
    drive(): void{
      console.log('vroom');
    // this.color();
    // if we are trying to do this we are going to see error
    // property color is private and only accessible in Vehicle class
    // so if we make color prothected in parent class then it will only
    // be accessible in child class and no where else 
  }

  // so this.drive is only accessible isside this class
  startDrivingProcess(): void {
    this.drive();
  }
}

// below is instance of class and we are going to name it with lower alphabet
// const vehicle = new Vehicle;
// vehicle.drive();
// vehicle.honk();

const car = new Car();
  // so the moment when I made drive private in car class car.drive started showing an error
  // saying property drive is private and only accessible in car class
// car.drive();
// now with change made above inside car extends vehicle we can use
car.startDrivingProcess();
car.honk();

// if we run this command 'ts-node classes.ts' we are going to see same output 
// which we have earlier seen coming out from // vehicle.drive();
// vehicle.honk();

const vehicle = new Vehicle();
// vehicle.color() // WE are not allowed to do this because its protected