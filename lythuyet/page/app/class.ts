interface workable {
    dowork(): void;
}

class Person {
    // khai báo thuộc tính 
    private readonly id: number;
    protected name: string;
    //hàm khởi tạo
    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    // geter, seter

    public getName() {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getId() {
        return this.id;
    }
}

// kế thừa

class Emp extends Person implements workable {
    private salary: number;
    public constructor(id: number, name: string, salary: number) {
        super(id, name);
        this.salary = salary;
    }
    public getSalary() {
        return this.getSalary;
    }
    public setSalary(salary: number) {
        this.salary = salary;
    }
    public dowork(): void {
        console.log("go to the park");
    }
}
let per1: Emp = new Emp(1, 'kai', 3000);
// console.log(per1.getName());
per1.dowork();