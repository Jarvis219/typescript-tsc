
type numStrBoolean = number | string | boolean;

const literal = (a: numStrBoolean, b: numStrBoolean, typeAs: 'as-number' | 'as-string'): numStrBoolean => {
    if ((typeof a == 'number' && typeof b == 'number') || typeAs == 'as-number') {
        return (+a) + (+b);
    } else if ((typeof a == 'string' && typeof b == 'string') || typeAs == 'as-string') {
        return a.toString() + b.toString();
    } else {
        return a && b;
    }
}
// console.log(literal(1, 3, 'as-number'));
// console.log(literal('kaio ', 'shin', 'as-string'));
type checkGt = string | 0 | 1;
const checkGT = (valible: checkGt, typeAs: 'as-number' | 'as-string') => {
    if ((typeof valible == 'number' && valible == 0 || valible == 1) || typeAs == 'as-number') {
        let result = valible == 0 ? 'Nu' : 'Nam';
        console.log('gioi tinh: ' + result);
    } else {
        console.log('ho ten: ' + valible);
    }

}
checkGT(0, 'as-number')
checkGT('sa', 'as-string');