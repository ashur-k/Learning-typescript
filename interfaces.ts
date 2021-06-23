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
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

const printV = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
}