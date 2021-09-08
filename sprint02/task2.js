let eq = [1, 60, 3600, 86400, 2592000, 31104000];

const howMuchSec = (...args) => args.reduce((total, arg, i) => (total += (arg *= eq[i]), total), 0);
