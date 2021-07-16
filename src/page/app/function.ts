
type funGt = string | 0 | 1;
let func: (a: funGt) => void;
func = (valible: funGt) => {
    if ((typeof valible == 'number' && valible == 0 || valible == 1)) {
        let result = valible == 0 ? 'Nu' : 'Nam';
        console.log('gioi tinh: ' + result);
    } else {
        console.log('ho ten: ' + valible);
    }
}

const main = (callback: (a: funGt) => void) => {
    callback(0)
}
main(func)