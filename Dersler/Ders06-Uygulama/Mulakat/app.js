// console.log("one");
// setTimeout(function () {
//   console.log("two");
// }, 0);
// console.log("three");

// var foo = { n: 1 };
// var bar = foo;
// foo.x = foo = { n: 2 };
// console.log(foo.x);

// var x = 500;
// let y, z, p, q;
// q = 200;
// if (true) {
//   q = y = z = p = x;
//   document.getElementById("display").innerHTML =
//     "x=" + x + "y :" + y + "z :" + z + "p :" + p + "q :" + q;
// }

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

// const obj = {
//   name: "Isim",
//   getName: function () {
//     return this.name;
//   },
// };
// const getNameFunction = obj.getName;
// const anotherObj = {
//   name: "Test",
//   getName: obj.getName,
// };
// console.log(obj.getName());
// console.log(getNameFunction());
// console.log(anotherObj.getName());
// function globalGetName() {
//   console.log(this.name);
// }
// globalGetName();
// const boundFunction = globalGetName.bind({ name: "Deneme" });
// boundFunction();
