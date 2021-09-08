const filterNums = (arr, n, p) => {
    n = n || 0;
    if (p === 'greater' || typeof p === 'undefined') return (arr.filter((item) => item > n));
    if (p === 'less') return (arr.filter((item) => item < n));
    if (typeof p === 'undefined' && typeof n === 'undefined') return (arr.filter((item) => item > 0));
};
