"use strict";
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehical(vehical) {
    vehical.drive();
    if (vehical instanceof Truck) {
        vehical.loadCargo(1000);
    }
}
