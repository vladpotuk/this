const robot = {
  name: "",
  type: "drago",
  hp: 25000,
  isKnoktedOut: true ? "живий" : "не дуже живий",
  setName(newName) {
    this.name = newName;
  },
  logStatus() {
    console.log(
      `${this.name} ${this.type} ${this.isKnoktedOut}, його здоров'я ${this.hp} `
    );
  },
  healthRobot(health) {
    this.hp -= health;
    if (this.hp <= 0) {
      this.isKnoktedOut ^ false ? "живий" : "не дуже живий";
      this.hp = 0;
    }
  },
  healthPlusRobot(health) {
    this.hp += health;
    if (this.hp >= 0) {
      this.isKnoktedOut = true ? "живий" : "не дуже живий";
    }
  },
};
robot.setName("Chapi");
robot.logStatus();
robot.healthRobot(5000);
robot.healthRobot(5000);
robot.healthRobot(5000);
robot.healthRobot(5000);
robot.healthRobot(5000);
robot.healthRobot(5000);
robot.healthPlusRobot(15000);
robot.healthPlusRobot(15000);
robot.healthPlusRobot(15000);
robot.logStatus();

const r2d2 = {
  name: "R2D2",
  type: "droid",
  hp: 15000,
  isKnoktedOut: true ? "живий" : "не дуже живий",
};
robot.healthRobot.call(r2d2, 5000);
robot.logStatus.call(r2d2);

//////////

const users = [
  { name: "Kate", age: 25 },
  { name: "Tom", age: 15 },
  { name: "Mary", age: 35 },
];

const greetings = users.map(({ name }) => {
  return `Привіт я ${name}!`;
});

console.log(greetings);

// const goodbye = function () {
//   return `До побачення ${this.name}`;
// }.bind(users[0]);
// console.log(goodbye());
const goodbye = function () {
  return `До побачення ${this.name}`;
};
users.forEach((user) => {
  console.log(goodbye.call(user));
});
// console.log(goodbye());
