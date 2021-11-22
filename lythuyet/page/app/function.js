"use strict";
let func;
func = (valible) => {
    if ((typeof valible == 'number' && valible == 0 || valible == 1)) {
        let result = valible == 0 ? 'Nu' : 'Nam';
        console.log('gioi tinh: ' + result);
    }
    else {
        console.log('ho ten: ' + valible);
    }
};
const main = (callback) => {
    callback(0);
};
main(func);
