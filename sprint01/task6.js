function accountPatients(n) {
    let fb = n;
    const admit = () => {
        if(fb < 1) console.log('Can not admit a patient, no beds available');
        else console.log('A patient was admitted, ${--fb} beds are available');
    }
    const discharge = () => {
        if (fb === n) console.log('There are no patients to discharge');
        else console.log('A patient was discharged, ${++fb} beds are available');
    }
    return [admit, discharge];
}


// Please, implement a function accountPatients that takes a count of free beds in a hospital and returns two functions:
// the first one for adding a patient
// the second one for discharging a patient
// accountPatients should keep track of free beds in a hospital and every time when a patient is admitted or discharged, print the count to the console like in examples:
// A patient was discharged, 54 beds are available
// A patient was admitted, 34 beds are available
// When there are no beds available, 
// Can not admit a patient, no beds available should be printed
// When there is an attempt to discharge a patient when there are no patients,
// There are no patients to discharge should be printed
