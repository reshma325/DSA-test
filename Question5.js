/*Question: Write a function removeDuplicates that removes duplicate elements from an array
while maintaining the original order.
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5] (array without duplicates)*/

let array=[1, 2, 2, 3,3, 4, 4, 5]

let newArray =[]
const removeDuplicates=()=>{
    for(i=0;i<array.length;i++){
        
        if(array[i]!==array[i+1]){
            newArray.push(array[i])
        }

    }
return newArray
}
console.log(removeDuplicates(newArray))