const profile = {
  name:'alex',
  age: 20,
  coordinate: {
      lat: 0,
      lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    },
};

const { age }: {age: number, } = profile;

const { 
  coordinate: { lat, lng } 
}: { coordinate: {lat: number, lng: number} } = profile;