function combineArray(arr1, arr2) {
    let arr3 = [...arr1, ...arr2].filter(Number.isFinite);
    return arr3;
}

//must be edited; must return Infinity too, not only +- integers;
    
// Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.
// Function example:
// combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]

