const car = {
  model: "Toyota Camry",
  year: 2019,
  speed: 120,
  accelerate(increase) {
    this.speed += increase;
    console.log(`${this.model} медленіше  ${this.speed} км/ч`);
  },
  brake(decrease) {
    this.speed -= decrease;
    if (this.speed < 0) this.speed = 0;
    console.log(`${this.model} швидше ${this.speed} км/ч`);
  },
};

const cars = [
  {
    model: "Audi RS8",
    year: 2024,
    speed: 320,
    accelerate(increase) {
      this.speed += increase;
      console.log(`${this.model} медленіше ${this.speed} км/ч`);
    },
    brake(decrease) {
      this.speed -= decrease;
      if (this.speed < 0) this.speed = 0;
      console.log(`${this.model} швидше ${this.speed} км/ч`);
    },
  },
  {
    model: "BMW X6",
    year: 2005,
    speed: 180,
    accelerate(increase) {
      this.speed += increase;
      console.log(`${this.model} медленіше ${this.speed} км/ч`);
    },
    brake(decrease) {
      this.speed -= decrease;
      if (this.speed < 0) this.speed = 0;
      console.log(`${this.model} швидше ${this.speed} км/ч`);
    },
  },
  {
    model: "Mersedes",
    year: 2017,
    speed: 110,
    accelerate(increase) {
      this.speed += increase;
      console.log(`${this.model} медленіше ${this.speed} км/ч`);
    },
    brake(decrease) {
      this.speed -= decrease;
      if (this.speed < 0) this.speed = 0;
      console.log(`${this.model} швидше ${this.speed} км/ч`);
    },
  },
];

cars.forEach((car) => {
  const accelerate = car.accelerate.bind(car, 10);
  accelerate();
});

cars.forEach((car) => {
  car.accelerate.call(car, 10);
  car.brake.call(car, 5);
});

cars.forEach((car) => {
  car.accelerate.apply(car, [20]);
  car.brake.apply(car, [10]);
});

const newCars = cars.filter((car) => car.year > 2015);

console.log("Машини новіші за 2015:", newCars);
