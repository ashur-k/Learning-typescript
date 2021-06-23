const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//const pepsi = ['brown', true, 40];
// We can easily swap the order inside it but in general we not want to

// pepsi[0] = 40;
// pepsi[2] = 'brown'

const pepsi: [string, boolean, number] = ['brown', true, 40];
// so in this we are not adding pipe but adding comma to let TS know sequence of const


// extracted out idea what drink is in type alias
type Drink = [string, boolean, number];
pepsi[0] = 40; // now this is going to be wrong

const newPepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', false, 40]
const tea: Drink = ['brown', false, 0]

//Why we care about tuples and when we will use them
// are not of common use
// if we work with csv file might tuple be used

const carSpecs: [number, number] = [400, 3354];
  // what is purpose of these numbers
  // we knwo they are two values two number but dont understand there use

  const carStats = {
    horsepower: 400,
    weight: 3354
  }
