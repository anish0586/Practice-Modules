//How would you remove duplicate members from an array?
console.log('How would you remove duplicate members from an array');

let arrayWithDuplicates  = [1, 1, 3, 5, 8, 7, 3, 8, 99];
let arrayLengthWithDuplicates = arrayWithDuplicates.length;
let arrayWithUniqueValues = [];
let counter = 0;
for (i = 0; i < arrayLengthWithDuplicates; i++) {
    counter = 0;
    for (j = i + 1; j < arrayLengthWithDuplicates; j++) {
        if (arrayWithDuplicates[i] === arrayWithDuplicates[j]) {
            counter++;
        }
    }
    if (counter === 0) {
        arrayWithUniqueValues.push(arrayWithDuplicates[i]);
    }
}
console.log('With duplicate values : ' + arrayWithDuplicates);
console.log('With unique values : ' + arrayWithUniqueValues);
console.log('With unique values using lodash : ' + _.uniq(arrayWithDuplicates));
