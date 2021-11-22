// let num1: number, num2: number;
// let result: string = 'result is: ';
// let permit: boolean = true;
// num1 = 7, num2 = 9;


// const total = num1 + num2;

// if (permit) {
//     console.log(result + total);
// } else {
//     console.log('not show result');
// }

// // inference

// // const add = (x = 5) => {
// //     let phrase = 'result is ';
// //     phrase = 10;
// //     x = '2.8';
// //     return phrase + x;
// // }
// // let results: number = add();


// //object
// var person: {
//     name: string,
//     age: number
// }
// person = {
//     name: 'kai',
//     age: 20
// }
// console.log(person.name);



// //arr,tuple,any,enum
// enum Role { ADMIN, READ_ONLY, AUTHOR };
// const pers: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: string,
//     roletuple: [number, string]
// } = {
//     name: 'kai',
//     age: 21,
//     hobbies: ['sleep', 'sport'],
//     role: Role.ADMIN, //error
//     roletuple: [2, 'author']
// }

// let favoriteActive: any[];
// favoriteActive = [5, 'sport', true];
// if (pers.role == Role.AUTHOR) {
//     console.log('is author');
// }
// pers.roletuple.push('admin');
// pers.roletuple[1] = 10;//error
// pers.roletuple = [0, 'admin', 'user'];//error


// // literal and custom 

// type Combinable = number | string;
// function combines(input1: Combinable, input2: number | string, resultConversion: 'as-number' | 'as-text') {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//         result = parseFloat(input1) + parseFloat(input2);
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// const combine1 = combines(9, 26, 'as-number');
// console.log(combine1);
// const combine2 = combines('9', '26', 'as-number');
// console.log(combine2);
// const combine3 = combines('typescript', 'js', 'as-number');
// console.log(combine3);


// // num and underfined

// var z = null;
// console.log(z)
// console.log(typeof z);;
// var x;
// console.log(x);
// console.log(typeof x);
// console.log(undeclaredVar);


// //unknown and any

// let userInp: unknown;
// let userName: string;
// userInp = 5;

// userInp = 'kai',
//     userName = userInp;
// userName = <string>userInp;
// if (typeof userInp === 'string') {
//     userName == userInp;
// }
