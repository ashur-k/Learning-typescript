// number is type annotation
let apples: number = 5;

// if its const we can not reassign var
apples = 5

let speed: string = 'fast';


let hasName: boolean = true;

// name is identical to value
let nothingMuch: null = null;
let nothing: undefined = undefined;

//builtin objects
let now: Date = new Date();


// Type annotation for an array
let colors: string[] = ['red', 'green', 'blue'] //telling typescript we are defining string arrays
let myNumbers: number[] = [1,2,3,4,5];
let truths: boolean[] = [true, true, false];

// Classes with type annotaions
class Car {

}
let car: Car = new Car ();


// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
 };

// Annotations around Functions
// We are calling void for we not want this fucnction to return anything
//Everything on left hand of funciton is annotaion and everything on right hand is the actual funciton 

const logNumber: (i: number) => void  = (i: number) => {
    console.log(i)
 };

 // Any type
 // When to us annotataions 
 // case # 1. When a function returns the 'any' type and we need to carify the value

const json = '{ "x": 10, "y": 20}'
const coordinates = JSON.parse(json);
console.log(coordinates); // { x:10, y:20 }

// if we parse our types we will see types are any

// What any type means
// json.parse returns the value of type any, typescript can't predict what json.parse is going to return
// below is the property that definitely does not exist and type script is doing nothing to 
// helpout all other var initalisations typescript ws showing us error and helping us

coordinates.fdsfaadsfsda;

// how we can use type annotations to finx this propblem.

const newCoordinates: {x: number; y:number} = JSON.parse(json);
console.log(newCoordinates.fdsfs) // this wil be an error
console.log(newCoordinates.x)

// 2. When we declare a variable on one line then initialize it later	
let words = ['red', 'green', 'blue']
// let foundWord; // If we mouseover this foundWord it will say type any so the correct way is
// this is declaration on one line and intialisation on another line
let foundWord: boolean;
for (let i=0; i < words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3. When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 1];
let numberAboveZero: boolean | number = false;

for (let i=0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // seeing error message number is not assignable to type booelean
                                  // so goignt to change abover code with boolean | number
  }
}

// Type Annotations + Type Inference with Functions
