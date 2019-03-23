//Write a JavaScript program to sort the items of an array.
console.log('Write a JavaScript program to sort the items of an array');

let sampleArray  = [1, 4, 2, 5, 6, 7, 3, 8, 99];
let arrayLength = sampleArray.length;
let tmpValue;

console.log('Unsorted Array: ' + sampleArray);
for (i = 0; i <= arrayLength - 1; i++) {
    for (j = i + 1; j <= arrayLength - 1; j++) {
        if (sampleArray[i] > sampleArray[j]) {
            tmpValue = sampleArray[i];
            sampleArray[i] = sampleArray[j];
            sampleArray[j] = tmpValue;         
        }
    }
}
console.log('Sorted Array: ' + sampleArray);

console.log('-------------');
console.log('Using lodash');
console.log('-------------');
const _ = require('lodash');
let sampleArrayWithLodash  = [1, 4, 2, 5, 6, 7, 3, 8, 99];
console.log('Unsorted Array: ' + sampleArrayWithLodash);
console.log('Sorted Array using lodash: ' + _.sortBy(sampleArrayWithLodash));