const combine = (a: number | string, b: number | string) => {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    } else if (typeof a == 'string' && typeof b == 'string') {
        return a.toString() + b.toString();
    }
}
// console.log(combine(1, 3));
// console.log(combine('kaio ', 'shin'));


const checkGt = (valible: string | 0 | 1) => {
    if ((typeof valible == 'number' && valible == 0 || valible == 1)) {
        let result = valible == 0 ? 'Nu' : 'Nam';
        console.log('gioi tinh: ' + result);
    } else {
        console.log('ho ten: ' + valible);
    }
}
// checkGt(0)
// checkGt("kai")
let person = { name: 'Max' }
let salary = { name: 'Bullet', basic: '$2900' }
const summary = { ...salary, ...person }
console.log(summary);