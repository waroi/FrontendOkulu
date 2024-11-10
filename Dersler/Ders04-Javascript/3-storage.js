// Local Storage
// Local Storage, tarayıcıda veri saklamak için kullanılan bir API'dir.
// Local Storage'a veri eklemek için setItem() metodu kullanılır.
// Local Storage'dan veri almak için getItem() metodu kullanılır.
// Local Storage'dan veri silmek için removeItem() metodu kullanılır.
// Local Storage'daki tüm verileri silmek için clear() metodu kullanılır.
// Local Storage'daki verileri görmek için console'da localStorage yazılabilir.
// Local Storage'da veri saklamak için sadece string veri tipi kullanılabilir.
// Local Storage'da veri saklamak için JSON.stringify() ve JSON.parse() metotları kullanılabilir.

// // Local Storage'a veri eklemek
// let userName = "Varol";
// localStorage.setItem("name", userName);

// // Local Storage'dan veri almak
// let name = localStorage.getItem("name");
// console.log(name);

// let yas = 25;
// localStorage.setItem("age", yas);
// let age = Number(localStorage.getItem("age"));
// console.log(age);
// console.log(typeof age);

// let user = {
//   name: "Varol",
//   age: 25,
//   city: "Ankara",
//   lang: ["Java", "Python", "Javascript"],
// };

// localStorage.setItem("userDetail", JSON.stringify(user));

// let userDetail = JSON.parse(localStorage.getItem("userDetail"));
// console.log(userDetail);

// let users = [
//   { name: "Varol", age: 25 },
//   { name: "Ahmet", age: 30 },
//   { name: "Mehmet", age: 22 },
// ];
// localStorage.setItem("users", JSON.stringify(users));

// let usersDetail = JSON.parse(localStorage.getItem("users"));

// usersDetail.map((user) => {
//   document.write(`<p>${user.name} - ${user.age}</p>`);
// });

// Session Storage

// let users = [
//   { name: "Varol", age: 25 },
//   { name: "Ahmet", age: 30 },
//   { name: "Mehmet", age: 22 },
// ];
// sessionStorage.setItem("users", JSON.stringify(users));

// let usersDetail = JSON.parse(sessionStorage.getItem("users"));

// usersDetail.map((user) => {
//   document.write(`<p>${user.name} - ${user.age}</p>`);
// });

// let filteredUsers = usersDetail.filter((user) => user.age < 26);

// filteredUsers.map((user) => {
//   document.write(`<p>${user.name} - ${user.age}</p>`);
// });

// const numbers = [43, 22, 35, 4, 12, 80, 50, 8, 99];
// let langs = ["Python", "Java", "C++", "Javascript"];

// const result = numbers.reduce((toplam, number) => {
//   return toplam + number;
// }, 0);

// console.log(result);

// spread operator

// const result = [...langs, ...numbers];
// console.log(result);

// langs = [...langs, "C#"];
// console.log(langs);

// Destructing Assignment
let user = {
  name: "Varol",
  age: 25,
  city: "Ankara",
  lang: ["Java", "Python", "Javascript"],
};

let { name, ...geriKalanlar } = user;

console.log(name, geriKalanlar);
