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
