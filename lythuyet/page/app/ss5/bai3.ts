

abstract class Departerment {
    static fiscalyear = 2020;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {

    }
    static creatEmployee(name: string) {
        return { name: name };
    }
    abstract describe(this: Departerment): void;
    adddEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Departerment {
    admins: string[];
    protected employees: string[] = [];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
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
