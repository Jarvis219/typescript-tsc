"use strict";
//Generic
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Max', hobbies: ['sports'] }, { age: 30 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements';
    }
    return [element, descriptionText];
}
// Generic class
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItem());
const numberStorage = new DataStorage();
