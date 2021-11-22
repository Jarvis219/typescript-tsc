interface Named {
    readonly name?: string;
    outputName?: string;
}
interface Greetable extends Named {
    // name: string;
    // outputName: string;
    greet(phrase: string): void;

}

class Persons implements Greetable {
    public greet(name: string): void {
        // return name;
        console.log(name);
    }


}
let user1: Greetable;
user1 = new Persons();
user1.greet('hi Iam iro man');
// console.log(user1.name);

