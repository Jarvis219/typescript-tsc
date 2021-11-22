class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount: number) {
        console.log('loading cargo...' + amount);
    }
}
type Vehical = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehical(vehical: Vehical) {
    vehical.drive();
    if (vehical instanceof Truck) {
        vehical.loadCargo(1000);
    }
}