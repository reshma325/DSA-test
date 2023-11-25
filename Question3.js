/*Question: Implement a function findMaxValue that finds and returns the maximum value in an
array of integers.
Input: [2, 8, 5, 1, 9]
Output: 9 (the maximum value in the array)*/

 let Input= [2, 8, 5, 1, 9,100]
 let max=0
const findMaxValue=()=>{
   for(i=0;i<Input.length;i++){
    if(max<Input[i]){
        max=Input[i]

    }
   }
return max

}
console.log(findMaxValue(max))