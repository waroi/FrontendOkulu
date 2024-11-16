// Class
// Classlar ES6 ile birlikte gelmiştir. Classlar bir blueprint'tir. Classlar ile objeler oluşturulur.
// Classlar bir blueprint'tir. Classlar ile objeler oluşturulur.

// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   showInfos() {
//     console.log(`İsim: ${this.name} Yaş: ${this.age} Maaş: ${this.salary}`);
//   }
// }

// const emp1 = new Employee("Mustafa", 25, 4000);

// console.log(emp1);
// emp1.showInfos();

// Static Methods
// Nesne üzerinden değil, sınıf üzerinden çağrılır.

// class Matematik {
//   cube(x) {
//     console.log(x * x * x);
//   }

//   static cube2(x) {
//     console.log(x * x * x);
//   }
// }

// const math = new Matematik();
// math.cube2(3); // Hata verir.
// math.cube(3); // Doğru kullanım.

// Matematik.cube2(3); // Doğru kullanım.

// Math.random(); // Statik bir methoddur. Nesne üzerinden değil sınıf üzerinden çağrılır.

// Inheritance (Kalıtım)
// Bir sınıfın özelliklerini başka bir sınıfa aktarmak için kullanılır.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log(`İsim: ${this.name} Yaş: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.salary = salary;
  }
}

const emp = new Employee("Mustafa", 25, 4000);
console.log(emp);
emp.showInfos();
