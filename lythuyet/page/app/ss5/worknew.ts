interface IBankAccount {
    accountNumber: number; // số tài khoản
    balance?: number; // số dư
    firstName: string;
    lastName: string;
    rateOfInterest?: number;//lãi suất
    ssn: number; // số an sinh xã hội
    getaddInterest(): number;// xem lãi suất
    addInterest(fee: number): void; // thêm lãi suất
    deposit(amount: number): void;// tiền gửi
    getBalance(): number;// số dư
    withdraw(amonut: number): void;// số tiền rút
}


abstract class BankAccount implements IBankAccount {
    public static nextAccountNumber: number; // số tài khoản tiếp theo
    // public static accountNumber: number; // số tài khoản
    constructor(public readonly ssn: number, public readonly accountNumber: number, public firstName: string,
        public lastName: string, public rateOfInterest?: number | 0, public balance?: number | 0) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rateOfInterest = rateOfInterest ? rateOfInterest : 0;
        this.balance = balance ? balance : 0
    }
    abstract getaddInterest(): number;
    abstract addInterest(fee: number): void; // thêm lãi suất
    abstract deposit(amount: number): void // tiền gửi
    abstract getBalance(): number; // số dư
    abstract withdraw(amount: number): void;// số tiền rút

}
class OverdreftAccount extends BankAccount {
    // overdraftInterest: number; // lãi suất thấu chi
    // overdreftLimit: number; // giới hạn thấu chi
    constructor(public readonly ssn: number, public readonly accountNumber: number, public firstName: string,
        public lastName: string, public rateOfInterest: number = 0, public balance: number = 0, public overdraftInterest: number,
        public overdreftLimit: number) {
        super(ssn, accountNumber, firstName, lastName, rateOfInterest, balance)
        this.overdraftInterest = overdraftInterest;
        this.overdreftLimit = overdreftLimit;
    }
    getaddInterest() { // xem lãi suất
        return this.rateOfInterest;
    }
    public addInterest(fee: number) {  // thêm lãi suất
        this.rateOfInterest = fee;
    }
    public deposit(amount: number) {  //tiền gửi
        this.balance = amount;
    }
    public getBalance() {// số dư
        return this.balance;
    }
    public withdraw(amount: number) {// số tiền rút
        if (this.balance > amount) {
            console.log('số tiền rút:', amount);
            console.log('số tiền còn lại: ', this.balance - amount);
        } else {
            console.log('số dư k đủ');
        }
    }
    public checkLimit(): boolean {
        return true;
    }
}

class LoanAcount extends BankAccount {

    constructor(public readonly ssn: number, public readonly accountNumber: number, public firstName: string,
        public lastName: string, public rateOfInterest: number = 0, public balance: number = 0, public principal: number) {
        super(ssn, accountNumber, firstName, lastName, rateOfInterest, balance)
        this.principal = principal;
    }

    getaddInterest() {
        return this.rateOfInterest;
    }
    public addInterest(fee: number) {  // thêm lãi suất
        this.rateOfInterest = fee;
    }
    public deposit(amount: number) {  //tiền gửi
        this.balance = amount;
    }
    public getBalance() {// số dư
        return this.balance;
    }
    public withdraw(amount: number) {
        if (this.balance > amount) {
            console.log('số tiền rút:', amount);
            console.log('số tiền còn lại: ', this.balance - amount);
        } else {
            console.log('số dư k đủ');
        }
    }
}