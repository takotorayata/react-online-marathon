function checkAdult(age) {
    try {
        if(age === '' || age === null || typeof(age) === 'undefined') throw new Error('Please, enter your age');
        if(age < 0) throw new Error('Please, enter positive number');
        if(IsNaN(age)) throw new Error('Please, enter number');
        if(!Number.isInteger(age)) throw new Error('Please, enter integer number');
        if(age < 18) throw new Error('Acces denied - you're too young!');
        console.log('Acces allowed');
    }
    catch(exception) {
          console.log(exception.name + ' ' + exception.message);
    }
    finally {
            console.log('Age verification complete');
            }
}

//must be edited; it must be written with switch...case;


// Write a checkAdult(age) function whose input parameter is the age of the user age. The function checks whether the set age parameter is set correctly, if it is set incorrectly, the corresponding error should be generated and displayed in the console:
// - if the age value has not been set, you need to create the following error: "Please, enter your age",
// - If you set a negative age value, you need to create the following error: "Please, enter positive number",
// - if a non-numeric value of age was specified, you need to create the following error: "Please, enter number",
// - if the integer value of age was not specified, you need to create the following error: "Please, enter Integer number",
// - If the user is under 18, you need to create the following error: "Access denied - you are too young!".
// If there is no error, the message “Access allowed” is displayed in the console.
// In the function, implement the handling of possible exceptions, providing the output to the console of the name and description of the error.
// Regardless of whether the age parameter was set correctly or incorrectly, the message “Age verification complete” should be displayed at the end of the test.
// Function usage example:
// checkAdult(15);  // Error Access denied - you are too young!
//                            // Age verification complete
// checkAdult(25);  // Access allowed
//                             // Age verification complete
