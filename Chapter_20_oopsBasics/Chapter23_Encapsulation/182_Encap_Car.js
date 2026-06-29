class Car {
    // Private fields
    #engineNumber;
    #fuelLevel;

    constructor(brand, model, engineNumber, fuelLevel) {
        this.brand = brand;      // Public
        this.model = model;      // Public
        this.#engineNumber = engineNumber; // Private
        this.#fuelLevel = fuelLevel;       // Private
    }

    // Public method to start the car
    start() {
        if (this.#fuelLevel > 0) {
            console.log(`${this.brand} ${this.model} has started.`);
        } else {
            console.log("Cannot start. Fuel tank is empty.");
        }
    }

    // Public method to add fuel
    refuel(liters) {
        this.#fuelLevel += liters;
        console.log(`Added ${liters} liters of fuel.`);
    }

    // Public getter
    getFuelLevel() {
        return this.#fuelLevel;
    }

    // Public getter for engine number
    getEngineNumber() {
        return this.#engineNumber;
    }
}

// Create object
const car1 = new Car("Toyota", "Camry", "ENG123456", 10);

car1.start();
console.log("Fuel Level:", car1.getFuelLevel());

car1.refuel(20);
console.log("Fuel Level:", car1.getFuelLevel());

console.log("Engine Number:", car1.getEngineNumber());