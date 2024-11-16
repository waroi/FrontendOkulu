// Object Literal
// const person1 = {
//   name: "Varol",
//   age: 30,
//   langs: ["Java", "Javascript", "Python"],
//   address: {
//     city: "Istanbul",
//     street: "Kadikoy",
//   },
//   showInfos: function () {
//     console.log(this.name, this.age, this.langs, this.address);
//   },
// };

// const person2 = {
//   name: "Mehmet",
//   age: 31,
//   langs: ["Go", "Javascript", "Python"],
//   address: {
//     city: "Ankara",
//     street: "Cankaya",
//   },
//   showInfos: function () {
//     console.log(this.name, this.age, this.langs, this.address);
//   },
// };

// console.log(person1);
// console.log(person2);

// Yapıcı Fonksiyon (Constructor)
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;

  // this.showInfos = function () {
  //   console.log(this.name, this.age, this.langs);
  // };
}

Person.prototype.showInfos = function () {
  console.log(this.name, this.age, this.langs);
};

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Varol", 30, ["Java", "Javascript", "Python"], 4000);
console.log(emp1);
emp1.showInfos();

const person1 = new Person("Varol", 30, ["Java", "Javascript", "Python"]);
const person2 = new Person("Mehmet", 31, ["Go", "Javascript", "Python"]);

// console.log(person1);
// console.log(person2);
// person1.showInfos();
// person2.showInfos();
// console.log(person1.langs[0]);
