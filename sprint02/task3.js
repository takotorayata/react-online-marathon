// Find the maximum interval between two consecutive numbers. Numbers are entered as arguments
// Example:
// maxInterv(3, 5, 2, 7); //5
// maxInterv(3, 5, 2, 7, 11, 0, -2); //11
// maxInterv(3, 5); //2
// maxInterv(3); //0

const maxInterv = (...arg) => {
    returnarg.reduce((acc, currentValue, index, array) => {
        let interval = array[index - 1] - currentValue;
        if (interval < 0)
            interval = -interval;
        return interval > acc ? interval : acc}, 0);
};
