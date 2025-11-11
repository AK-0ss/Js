function func() { 
    var arr = ["shift", "splice", "filter", "pop"]; 
   
    // Removing the specified element ("splice") from the array 
    const index = arr.indexOf("splice"); // Find the index of the element 
    if (index > -1) { 
      // Check if the element exists 
      const spliced = arr.splice(index, 1); // Remove the element using splice 
      console.log("Removed element: ", spliced); 
    } 
    console.log("Remaining elements:", arr); 
} 
func(); 
// Program to check if an array contains a specified value 
const array = ['you', 'will', 'learn', 'javascript']; 
const hasValue = array.includes('javascript'); 
if (hasValue) { 
console.log('Array contains the value.'); 
} else { 
console.log('Array does not contain the value.'); 
} 5
// Program to empty an array 
function emptyArray(arr) { 
// Setting the array length to 0 to empty it 
arr.length = 0; 
return arr; 
} 
const array1 = [1, 2, 3]; 
console.log("Original Array:", array1); 
const result = emptyArray(array1); 
console.log("Empty Array Result:", result);