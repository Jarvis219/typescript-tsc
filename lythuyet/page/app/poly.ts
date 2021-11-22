class Poly {
    private static cosoHN: Poly;

    private constructor(private readonly address: string) {
        this.address = address;
    }
    public static getCoSo(): Poly {
        if (Poly.cosoHN == null) {
            Poly.cosoHN = new Poly("TVB");
            console.log(Poly.cosoHN.address);
        }
        return Poly.cosoHN;
    }
}
let poly1: Poly = Poly.getCoSo();