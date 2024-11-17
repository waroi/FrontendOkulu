class Employee{
    constructor(name,age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log(`İsim: ${this.name}, Yaş: ${this.age}, Maaş: ${this.salary}`);
    }
}

const emp1= new Employee("Mustafa", 25, 4000);

console.log(emp1);
emp1.showInfos();