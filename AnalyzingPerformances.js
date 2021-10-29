// Objects are efficient
// insertion: O(1)
// removal: O(1)
// search: O(n)
// access: O(1)
// object.keys: O(n)
// object.values: O(n)
// object.entries: O(n)
// hasOwnProperty: O(1)

// Arrays are a bit less efficient
// insertion: depends, O(1) if adding to the end of the array. 
//                     O(n) if adding to the start because the entire array needs to be re-indexed
// remove: depends same as insertion
// search: O(n)
// access: O(1)