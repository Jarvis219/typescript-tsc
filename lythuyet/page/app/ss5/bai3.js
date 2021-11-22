"use strict";
class Departerment {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static creatEmployee(name) {
        return { name: name };
    }
    adddEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Departerment.fiscalyear = 2020;
class ITDepartment extends Departerment {
    constructor(id, admins) {
        super(id, 'IT');
        this.employees = [];
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID ${this.id}`);
    }
    getEmployees() {
        return this.employees;
    }
}
const emp1 = Departerment.creatEmployee('Max');
console.log(emp1, Departerment.fiscalyear);
const it = new ITDepartment('d1', ['max1']);
it.adddEmployee('max2');
it.adddEmployee('max3');
// print id
it.describe();
//Print employees[]
console.log(it.getEmployees());
