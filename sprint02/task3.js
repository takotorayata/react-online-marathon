const maxInterv = (...num) => {
    if (num.length === 1) return 0;
    return num.reduce((acc, curr, index, arr) => {
        return acc >= Math.abs(arr[index - 1] - curr) ? acc : Math.abs(arr[index - 1] - curr);
    }, num[0]);
};
