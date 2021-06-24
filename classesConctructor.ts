class Automobile {
  //color: string;

  // if we want our class to take arguments we need to define
  // special funciton called construcor function

  // if we are not defining constructor function its there
  // by default

  // in this e.g. we are taking an argument from class instance and 
  // using that argument we are assigning a value to color: string

  // we can also define color as public and remove property definition a top
  // its a shortcut for initialising color variable at top
  constructor(public color: string) {
    this.color = color;
  }
  // if we make this variable private we are no longer be 
  // able to read it outside of the class

  // if we mark color as protected we still are not able to 
  // use it outside of the class but we will be able to access it inside
  // child class which is extending from automobile

  protected honk(): void {
    console.log('beep')
  }

}

const automobile = new Automobile('orange')
console.log(automobile.color);

class MotorCar extends Automobile{
  // what when we are defining constructor funciton inside child class

  constructor (public wheels: number, color: string) {
    // inside this super now we need to give 
    // arguments values for parent class constructor

    // so if we use public or keyword with this color paremater 
    // thats mean we are reinitialising var
    // and now doing by this we not need to give hardcoded values
    // super('red') but we can do like this super(color)

    // doing this will show us error in code below, saying expected 2 arguments
    // but got 1
    super(color);

  }

  private drive(): void {
    console.log('vroom')
  }
}

const motorcar = new MotorCar(4, 'red');
// const motorcar = new MotorCar(); if we are gogint to try to do this will make error
// we need to pass argument for parent class