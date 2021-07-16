"use strict";
class Person {
    //hàm khởi tạo
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // geter, seter
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getId() {
        return this.id;
    }
}
// kế thừa
class Emp extends Person {
    constructor(id, name, salary) {
        super(id, name);
        this.salary = salary;
    }
    getSalary() {
        return this.getSalary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    dowork() {
        console.log("go to the park");
    }
}
let per1 = new Emp(1, 'kai', 3000);
// console.log(per1.getName());
per1.dowork();
