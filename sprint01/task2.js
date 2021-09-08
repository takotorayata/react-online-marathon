function combineArray(arr1, arr2) {
    let arr3 = [...arr1, ...arr2].filter(Number.isFinite);
    return arr3;
}

//must be edited; must return Infinity too, not only +- integers;
    
