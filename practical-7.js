// Function to find the union of two sets 
function union(a, b) { 
    let unionSet = new Set(a); // Initialize a new set with elements of set `a` 
     
    // Add elements from set `b` to the union set 
    for (let i of b) { 
      unionSet.add(i); 
    } 
     
    return unionSet; 
  } 
   
  // Function to find the intersection of two sets 
  function intersection(setA, setB) { 
    let intersectionSet = new Set(); 
   
    // Add elements to the intersection set if they exist in both sets 
    for (let i of setB) { 
      if (setA.has(i)) { 
        intersectionSet.add(i); 
      } 
    } 
     
    return intersectionSet; 
  } 
   
  // Function to find the difference between two sets 
  function difference(setA, setB) { 
    let differenceSet = new Set(setA); // Initialize a new set with elements of set `A` 
   
    // Remove elements from `differenceSet` if they exist in set `B` 
    for (let i of setB) { 
      differenceSet.delete(i); // Corrected the element reference to `i` 
    } 
        return differenceSet; 
  } 
   
  // Function to check if `setB` is a subset of `setA` 
  function subset(setA, setB) { 
    for (let i of setB) { 
      if (!setA.has(i)) { 
        return false; // If an element in setB is not in setA, it's not a subset 
      } 
    } 
    return true; 
  } 
   
  // Creating two sets 
  const setA = new Set(['apple', 'mango', 'orange', 'banana']); 
  const setB = new Set(['apple', 'banana']); 
   
  // Testing each function 
  const result_union = union(setA, setB);  
  console.log("Union Result: ", result_union); 
   
  const result_intersection = intersection(setA, setB); 
  console.log("Intersection Result: ", result_intersection); 
   
  const result_difference = difference(setA, setB); 
  console.log("Difference Result: ", result_difference); 
   
  const result_subset = subset(setA, setB); 
  console.log("Subset Result: ", result_subset);