"use strict";
class Moto {
    driving() {
        console.log('driving');
    }
}
class Bus {
    BuyTiket(price) {
        console.log(price);
    }
}
function traffic(vehicle) {
    if ('driving' in vehicle) {
        vehicle.driving();
    }
    else {
        vehicle.BuyTiket(7000);
    }
    // if (vehicle instanceof Moto) {
    //     vehicle.driving();
    // } else {
    //     vehicle.BuyTiket(7000);
    // }
}
const goSchool = {
    driving() {
        console.log(`di hoc`);
    }
};
traffic(goSchool);
