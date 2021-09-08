function factorial(n) {
    return n ? n * factorial(n - 1);
}

function processArray(arr, factorial) {
    let arr1 = arr.map((x) => factorial(x));
    return arr1;
}

//must be edited; it must be written without recursion
