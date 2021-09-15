// The user enters as arguments the number of seconds, minutes, hours, days, weeks, months, years. 
// Output how many seconds are in all this.
// All parameters are optional. Consider 30 days in a month
// Example:
// howMuchSec(12, 3); //192
// howMuchSec(1, 33, 22); //81181
// howMuchSec(); //0

let eq = [1, 60, 3600, 86400, 2592000, 31104000];
const howMuchSec = (...args) => args.reduce((total, arg, i) => (total += (arg *= eq[i]), total), 0);

let eq = [1, 60, 3600, 86400, 2592000, 31104000];
const howMuchSec = (...time) => {
  return time.map((x, i) => x * eq[i]).reduce(a, b) => a + b, 0);
};

