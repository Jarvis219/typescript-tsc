/*
In the ts file create an interface called IVATCalculator with a single method called calculate.
The method should have a single parameter called amount of the type number and it should return a number as well.
In the same file create a class with the name VATCalculator, and let the class implement the interface IVATCalculator

Implement the method calculate. The method should return the amount with VAT of 25% added to it.

Create an instance of this class and assign it to a const called vat of the type IVATCalculator.

Create some log-statements like:
console.log(vat.calculate(100)); to test the class.

*/
interface IVATCalculator {
    calculate(amount: number): number;
}

class VATCalculator implements IVATCalculator {
    public calculate(amount: number): number {
        return amount * 1.25;
    }
}
const vat: VATCalculator = new VATCalculator();