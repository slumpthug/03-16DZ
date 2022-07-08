class Car {
    brand;
    model;
    carYear;
    distance;
    countOfFuel;

    constructor (brand, model, carYear, distance, countOfFuel) {
        this.brand = brand;
        this.model = model;
        this.carYear = carYear;
        this.distance = distance;
        this.countOfFuel = countOfFuel;
    }

    getConsumptionFuel = () => {
        let result = this.countOfFuel / this.distance * 100

        console.log(`${Math.round(result)} литров мы потратили на 100км`);
    }
}

const myCar = new Car('Mercedes', 'c-class', '2020', 500, 10);

myCar.getConsumptionFuel();