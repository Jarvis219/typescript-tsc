"use strict";
class BankAccount {
    // public static accountNumber: number; // số tài khoản
    constructor(ssn, accountNumber, firstName, lastName, rateOfInterest, balance) {
        this.ssn = ssn;
        this.accountNumber = accountNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rateOfInterest = rateOfInterest;
        this.balance = balance;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rateOfInterest = rateOfInterest ? rateOfInterest : 0;
        this.balance = balance ? balance : 0;
    }
}
class OverdreftAccount extends BankAccount {
    // overdraftInterest: number; // lãi suất thấu chi
    // overdreftLimit: number; // giới hạn thấu chi
    constructor(ssn, accountNumber, firstName, lastName, rateOfInterest = 0, balance = 0, overdraftInterest, overdreftLimit) {
        super(ssn, accountNumber, firstName, lastName, rateOfInterest, balance);
        this.ssn = ssn;
        this.accountNumber = accountNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rateOfInterest = rateOfInterest;
        this.balance = balance;
        this.overdraftInterest = overdraftInterest;
        this.overdreftLimit = overdreftLimit;
        this.overdraftInterest = overdraftInterest;
        this.overdreftLimit = overdreftLimit;
    }
    getaddInterest() {
        return this.rateOfInterest;
    }
    addInterest(fee) {
        this.rateOfInterest = fee;
    }
    deposit(amount) {
        this.balance = amount;
    }
    getBalance() {
        return this.balance;
    }
    withdraw(amount) {
        if (this.balance > amount) {
            console.log('số tiền rút:', amount);
            console.log('số tiền còn lại: ', this.balance - amount);
        }
        else {
            console.log('số dư k đủ');
        }
    }
    checkLimit() {
        return true;
    }
}
class LoanAcount extends BankAccount {
    constructor(ssn, accountNumber, firstName, lastName, rateOfInterest = 0, balance = 0, principal) {
        super(ssn, accountNumber, firstName, lastName, rateOfInterest, balance);
        this.ssn = ssn;
        this.accountNumber = accountNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rateOfInterest = rateOfInterest;
        this.balance = balance;
        this.principal = principal;
        this.principal = principal;
    }
    getaddInterest() {
        return this.rateOfInterest;
    }
    addInterest(fee) {
        this.rateOfInterest = fee;
    }
    deposit(amount) {
        this.balance = amount;
    }
    getBalance() {
        return this.balance;
    }
    withdraw(amount) {
        if (this.balance > amount) {
            console.log('số tiền rút:', amount);
            console.log('số tiền còn lại: ', this.balance - amount);
        }
        else {
            console.log('số dư k đủ');
        }
    }
}
