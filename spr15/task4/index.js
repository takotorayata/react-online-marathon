// Implement the Plane class, the constructor of which accepts 3 parameters model - model of the plane, fuelSupply - capacity of a stock of fuel of the plane, fuelConsumption - average fuel consumption in liters on 100 km of flight.

// Create a method of class calcFlightRange(), which determines the range of the plane by the formula fuelSupply / fuelConsumption * 100 and returns it.

// Create a static method of class sortFlightRange(planesArray), which takes an array of instances of class planesArray, sorts the flight range of plane in ascending order and outputs the result to the console in the format plane_model: range.

// Create a TransportPlane class, which is inherited from the Plane class, the constructor of which takes 5 parameters model - plane model, fuelSupply - the amount of fuel, fuelConsumption - the average fuel consumption in liters per 100 km, cargo - maximum tonnage, addTank - about additional tanks of the plane  In this class, you need to override the calcFlightRange() method to take into account that the fuelSupply has increased the amount of fuel added by the addTank.

// Create a class PassengerPlane, which is inherited from the class Plane, whose constructor accepts 5 parameters model, fuelSupply, fuelConsumption, passengers - the maximum number of passengers, refueling - the amount of additional fuel received in the refueling. In this class, you need to override the calcFlightRange() method to take into account that the fuelSupply has increased refueling.

// Create a WarPlane class, which is inherited from the Plane class, the constructor of which accepts 5 parameters model, fuelSupply, fuelConsumption, missiles - the number of missile weapons, aerodynamicsKoef - the coefficient of aerodynamics of the plane. In this class, you need to override the calcFlightRange() method in such a way as to take into account that the flight range of the plane increases in proportion to the value of the aerodynamics coefficient of aerodynamicsKoef. 



// Usage example:

// console.log("Unsorted range of planes:");

// const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);

// console.log("An-225 Mriya: ", plane1.calcFlightRange());

// const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);

// console.log("Boeing-747:", plane2.calcFlightRange());

// const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);

// console.log("F-22 Raptor:", plane3.calcFlightRange());

// console.log("Sorted range of planes:");

// const planesArray = [plane1, plane2, plane3];

// Plane.sortFlightRange(planesArray);



// Output in console:

// Unsorted range of planes:

// An-225 Mriya:  8100

// Boeing-747:  11320

// F-22 Raptor:  3075

// Sorted range of planes:

// F-22 Raptor: 3075

// An-225 Mriya: 8100

// Boeing-747: 11320

class Plane {
    constructor(model, fuelSupply, fuelConsumption) {
        this.model = model;
        this.fuelSupply = fuelSupply;
        this.fuelConsumption = fuelConsumption;
    }
    calcFlightRange() {
        return this.fuelSupply / this.fuelConsumption * 100;
    }
    static sortFlightRange(planesArray) {
        planesArray
            .sort((a, b) => a.calcFlightRange() - b.calcFlightRange())
            .map(el => console.log(`${el.model}: ${el.calcFlightRange()}`));
    }
}

class TransportPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
        super(model, fuelSupply, fuelConsumption);
        this.cargo = cargo;
        this.addTank = addTank;
    }
    calcFlightRange() {
        return (this.fuelSupply + this.addTank) / this.fuelConsumption * 100;
    }
}

class PassengerPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, passengers, refueling ) {
        super(model, fuelSupply, fuelConsumption);
        this.passengers = passengers;
        this.refueling = refueling;
    }
    calcFlightRange() {
        return (this.fuelSupply + this.refueling) / this.fuelConsumption * 100; 
    }
}

class WarPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
        super(model, fuelSupply, fuelConsumption);
        this.missiles = missiles;
        this.aerodynamicsKoef = aerodynamicsKoef;
    }
    calcFlightRange() {
        return this.fuelSupply / this.fuelConsumption * this.aerodynamicsKoef * 100;
    }
}
