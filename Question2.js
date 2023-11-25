/*Question: Implement a function sumObjectValues that calculates the sum of all numeric values
in an object.
Input: {a: 10, b: 20, c: 30}
Output: 60 (sum of all numeric values in the object)
*/
let obj={a: 10, b: 20, c: 30};
let sum=0


const sumObjectValues=()=>{
    sum=sum+obj.a+obj.b+obj.c
    
    return sum
}
console.log(sumObjectValues(sum))
