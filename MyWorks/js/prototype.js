//yapıcı fonksiyon constructor
function Person(name, age, langs){
    this.name = name;
    this.age = age;
    this.langs = langs;
}

Person.prototype.showInfos = function(){
    console.log(this.name, this.age, this.langs);
};
this.showInfos = function(){
    console.log(this.name, this.age, this.langs);
}


function Employee(name, age,langs, salary){
    Person.call(this, name, age,langs );
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
const emp1 = new Employee("Varol", 30, ["java","js","py"], 4000)
console.log(emp1);
emp1.showInfos();


const person1 = new Person("Varol", 30, ["java", "js", "py"]);
const person2 = new Person("Mehmet", 20, ["php", "yi2", "c#"]);

console.log(person1);
console.log(person2);

person1.showInfos();
