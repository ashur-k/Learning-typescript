// This is a very basic e.g. of funciton annotation
// a and b are arguments that funciton is going to take
// and after (a: number, b: number): we are telling what is type of value funciton 
// is returning

const add = (a: number, b: number): number => {
  return a + b
};  

// so if we change a + b to , a - b that logic is not something that typescript is concerened about

//Type inference 
// Now type script can read body of function and it can see 2 numbers are add and 
// addition will also be number, so type infernce here is an action 
// we catually not need to tell funciton type of returning value, 
// typescript can figure it out on its own

const secondAdd = (a: number, b:number) => {
  return a + b
};

const subtract = (a: number, b: number) => {
  a - b;
}
// So in above e.g. notice that return is missing
// if we hover over subtract we will see that return tyoe is void which means nothing
// So we have made a mistake and typescript haven't done anything to correct us
// so if we quickly add annotaion for the return number

const secondSubtract = (a: number, b: number): number => {
 return a - b;
}

// and error is saying a funcition type whose value is neith void nor any must return a value

// So thats why using return value annotaions are important 


// notice in below new e.g funciton keyword is used
function divide(a: number, b: number): number {
  return a / b;
}

// This same textis goign to work with annoynomous functions

const multiply = function (a: number, b: number): number {
  return a * b;
}


// so void below means that it is funciton which is not going to retun anything
const logger = (message: string): void => {
  console.log(message);
   // technically the function that returns none can return null or undefinded
    // by saying void we are making sure funciton not return anything 
};
// so in below funciton we are sayig we are going to throw an error
// andexit the function early without returning any value
// We only use word never when we are expecting function not turning anythig ever
const throwError = (message: string): never => {
  throw new Error(message);
}


const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date,  weather: string, }): void => 
    {
      console.log(forecast.date)
      console.log(forecast.weather)
        }

      
logWeather(todaysWeather);

// Destructering with annotaitons

const dsLogWeather = ({date, weather}: { date: Date,  weather: string, }): void => 
    {
      console.log(date)
      console.log(weather)
        }

// so destructureing are always goign to be 2 separate statments and one will have no effect on another one

// Type Annotaitons + Type Infernece for Objects

