"use strict";
const anias = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
// console.log(anias(1, 3));
// console.log(anias('kaio ', 'shin'));
