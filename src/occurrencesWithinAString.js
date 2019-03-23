console.log("######################################################################");
//Given an string print the characters with their number of occurrences
//   Input : aaccceezzzzqaaa
//   Output: a2c3e2z4q1a3

let input = 'aaccceezzzzqaaa';
let length = input.length;
let count;
let output = '';

console.log('Given an string print the characters with their number of occurrences');
console.log('Input : ' + input);

for(a=0; a<length; a++) {
     count = 1;
    for(b=a+1; b<length; b++) {
        if (input.charAt(b) === input.charAt(a)) {
            count++;
            if (b === length - 1) {
                a = length;
            }                    
        } else {
            output = output + input.charAt(a) + count;
            //console.log(input.charAt(a) + ' ' + count);
            a = b - 1;
            b = length;
        }
    }    
}
output = output + input.charAt(length-1) + count;
//console.log(input.charAt(length-1) + ' ' + count);
console.log('Output : ' + output);