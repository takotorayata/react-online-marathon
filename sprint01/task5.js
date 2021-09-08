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
