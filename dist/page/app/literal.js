"use strict";
const literal = (a, b, typeAs) => {
    if ((typeof a == 'number' && typeof b == 'number') || typeAs == 'as-number') {
        return (+a) + (+b);
    }
    else if ((typeof a == 'string' && typeof b == 'string') || typeAs == 'as-string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
const checkGT = (valible, typeAs) => {
    if ((typeof valible == 'number' && valible == 0 || valible == 1) || typeAs == 'as-number') {
        let result = valible == 0 ? 'Nu' : 'Nam';
        console.log('gioi tinh: ' + result);
    }
    else {
        console.log('ho ten: ' + valible);
    }
};
checkGT(0, 'as-number');
checkGT('sa', 'as-string');
