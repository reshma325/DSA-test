/* Question: Write a function sumPositiveNumbers that takes an array of numbers as input and
returns the sum of all positive numbers.
Input: [1, -2, 3, 4, -5]
Output: 8 (sum of positive numbers: 1 + 3 + 4)
Object Key Check:*/
let array = [1, -2, 3, 4, -5]
const sumPositiveNumbers = () => {
    let positive = [];
    let sum = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positive.push(array[i]);

        }
    }


    for (i = 0; i < positive.length; i++) {
        sum = sum + positive[i]
    }
    return sum;
    
}
console.log(sumPositiveNumbers())

