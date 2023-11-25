/*Question: Implement a function reverseArray that reverses the order of elements in an array
without using the built-in reverse() method.
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1] (the reversed array)*/

let array=[1, 2, 3, 4, 5]
let newArray=[]
const reverseArray=()=>{
for(i=array.length-1;i>=0;i--){
    
   newArray.push(array[i])

   
}
return newArray
}
console.log(reverseArray(newArray))