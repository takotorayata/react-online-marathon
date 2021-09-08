function getModifiedArray(array) {
    const arr = [...array];
    arr[0] = 'Start';
    arr[arr.length - 1] = 'End';
    return arr;
}
