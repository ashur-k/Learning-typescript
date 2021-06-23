const carMakers = ['ford', 'toyota', 'chevy'];

// if we hover on top of carMakers it will tell us its type script

// if we really want to explict about type
const anotherCarMakers: string[] = ['toyota', 'honda', 'bmw'];


const dates: Date[] = [new Date(), new Date()]

// 2 dimensonal arrays

const carsByMake: string[][] = [
  ['f150'],
  ['corrolla'],
  ['camaro']
]

// Whats big deal about array.
    //TS can fo type inference when extracting values from an array
    //TS can prevent us from adding incompatible values tp the array
    //We can get help with 'map', 'foreach', 'reduce' functions
    //Flexible - arays can still contain multitple different types

// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const car = carMakers[0];
  // so in this value TS knows carMakers is string and we are only pulling one value out of it

  const myCar = carMakers.pop();

  // PREVEN INCOMPATIBLE VALUES
carMakers.push(100); // We will see an error message we can't do this

  // Help with 'map'
  carMakers.map((car: string): string => {
    return car.toUpperCase();
  })

    // Flexible Types
  const importantDates: (Date | string) [] = [new Date(), '20-10-10'];
    // We are saying this array can contain either type of value

  importantDates.push('2030-10-10');
  importantDates.push(new Date);
  importantDates.push(100);
    // this will be an erro because its neither a string or date object

// Where to use typed arrays
    //Anytime we need to represent a collection of records with
    //some arbitary order

