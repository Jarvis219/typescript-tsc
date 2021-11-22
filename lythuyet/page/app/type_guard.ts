class Moto {
    driving(): void {
        console.log('driving');
    }
}
class Bus {
    BuyTiket(price: number): void {
        console.log(price);
    }
}
type Vehicle = Moto | Bus;

function traffic(vehicle: Vehicle) {
    if ('driving' in vehicle) {
        vehicle.driving();
    } else {
        vehicle.BuyTiket(7000);
    }
    // if (vehicle instanceof Moto) {
    //     vehicle.driving();
    // } else {
    //     vehicle.BuyTiket(7000);
    // }
}
const goSchool: Moto = {
    driving(): void {
        console.log(`di hoc`);
    }
}
traffic(goSchool);