// Write an add(x, y) function that takes two arguments x and y.
// The function should return a Promise that resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise.

const add = (x, y) => new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') resolve(x + y);
    else reject('Error!');
});


//if only the sum of 2 args can be a number, not each arg must be a number, must be rewritten:
//const add = (x, y) => new Promise((resolve, reject) => typeof (x + y) !== 'number' ? reject('Error!') : resolve(x + y));
