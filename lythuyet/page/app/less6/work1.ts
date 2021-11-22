
type BasicInformation = {
    fullName: string;
    birthDate: Date;
    address: string;
}
type Phone = {
    phone: string;
}
type Email = {
    email: string;
}
type User = BasicInformation & Phone & Email;

let person1: User = {
    fullName: "kai",
    birthDate: new Date('22/10/2012'),
    address: "hn",
    phone: '0998989898',
    email: "ad@gmail.com"
}