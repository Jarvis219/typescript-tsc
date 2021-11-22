interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number): number => {
    return n1 + n2
}
console.log(add(3, 5));