//when ever we create interface we use capital letter
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}


const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`
  }
};



const printVehicle = (vehicle: Vehicle ): void  => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic)

// so rahter than typing long line we can use interface
const printAnotherVehicle = (vehicle: Vehicle): void  => {
  //console.log(`Name: ${vehicle.name}`);
  //console.log(`Year: ${vehicle.year}`);
  //console.log(`Broken: ${vehicle.broken}`);

  console.log(`Broken: ${vehicle.summary()}`);
};

printVehicle(oldCivic);

const printV = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
}

interface Reportable {
  summary(): string;
}


const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `My drink has ${this.sugar} grams of sugar.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

//Genric looking functions make more senseto be used with both drink and vehicle
printSummary(oldCivic);
printSummary(drink)

// By renaming Interface to Reportable we ca reuse it for 
// totally different functioning objects.

