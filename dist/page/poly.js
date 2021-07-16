"use strict";
class Poly {
    constructor(address) {
        this.address = address;
        this.address = address;
    }
    static getCoSo() {
        if (Poly.cosoHN == null) {
            Poly.cosoHN = new Poly("TVB");
        }
        return Poly.cosoHN;
    }
}
let poly1 = Poly.getCoSo();
