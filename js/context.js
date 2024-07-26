function hello() {
  console.log("Hello", this);
}

// const user = {
//   name: "John",
//   age: 18,
//   showName() {
//     console.log(this.name);
//   },
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   showInfo() {
//     console.log(`Hello, me name ${this.name}, i'm ${this.age}`);
//   },
// };
// const user2 = {
//   name: "Anna",
//   age: 21,
// };

// user.sayHello();
// user.sayHelloWindow();
// user.showInfo();

// user.showInfo.bind(user2)();
// user.showInfo.call(user2, 12, 5, 10, 36);
// user.showInfo.apply(user2, [65, 25, 12, "hi"]);

// console.log(window);
// function fnA() {
//   console.log(arguments, this);
// }
// fnA(25, 10, 36);
// const fnB = () => {
//   console.log(this);
// }

// fnB(100);
const user_info = {
  name: "John",
  age: 18,
  showName() {
    console.log(this.name);
  },
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  showInfo(job, phone) {
    console.group(`${this.name}info:`);
    console.log(`My name is ${this.name}, i'm ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};
const user_marta = {
  name: "Marta",
  age: "22",
};

user_info.showInfo.bind(user_marta)("Apple", "068356564554");
user_info.showInfo.call(user_marta, "ItStep", "646545465465");
user_info.showInfo.apply(user_marta, ["Google", "31321321321"]);
