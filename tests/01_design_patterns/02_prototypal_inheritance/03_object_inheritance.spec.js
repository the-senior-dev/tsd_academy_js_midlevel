const { Vehicle, Car, ToyotaSupra, MotorBike, CustomSupra } = require('../../../src/01_design_patterns/02_prototypal_inheritance/03_object_inheritance');
 
// Tests for Vehicle
test('Vehicle should have correct default properties', () => {
    expect(Vehicle.name).toBe("Vehicle");
    expect(Vehicle.model).toBe("Generic");
    expect(Vehicle.color).toBe("blue");
    expect(Vehicle.wheels).toBe(0);
    expect(Vehicle.engine).toBe("V2");
    expect(Vehicle.passengers).toBe(0);
    expect(Vehicle.fuelType).toBe("Petrol");
    expect(Vehicle.mileage).toBe(0);
    expect(Vehicle.maxSpeed).toBe(0);
    expect(Vehicle.isParked).toBe(true);
    expect(Vehicle.fuelLevel).toBe(100);
});

test('Vehicle methods should work correctly', () => {
  expect(Vehicle.drive()).toBe("The V2 Started!");
  expect(Vehicle.break()).toBe("The V2 Stopped!");
  expect(Vehicle.start()).toBe("Vehicle started.");
  expect(Vehicle.park()).toBe("Vehicle parked.");
  expect(Vehicle.refuel(10)).toBe("Fuel level: 100%");
});


// Tests for Car
test('Car should inherit from Vehicle and have additional properties', () => {
    expect(Car.wheels).toBe(4);
    expect(Car.engine).toBe("V6");
    expect(Car.passengers).toBe(4);
    expect(Car.trunkSpace).toBe(400);
});

test('Car methods should work correctly', () => {
  expect(Car.drive()).toBe("The V6 Started!");
  expect(Car.break()).toBe("The V6 Stopped!");
  expect(Car.start()).toBe("Vehicle started.");
  expect(Car.park()).toBe("Vehicle parked.");
  expect(Car.refuel(10)).toBe("Fuel level: 100%");
});

// Tests for ToyotaSupra
test('ToyotaSupra should inherit from Car and have additional properties', () => {
    expect(ToyotaSupra.name).toBe("Toyota");
    expect(ToyotaSupra.model).toBe("Supra");
    expect(ToyotaSupra.maxSpeed).toBe(250);
    expect(ToyotaSupra.turbo).toBe(true);
});

test('ToyotaSupra methods should work correctly', () => {
  expect(ToyotaSupra.drive()).toBe("The V6 Started!");
  expect(ToyotaSupra.break()).toBe("The V6 Stopped!");
  expect(ToyotaSupra.start()).toBe("Vehicle started.");
  expect(ToyotaSupra.park()).toBe("Vehicle parked.");
  expect(ToyotaSupra.refuel(10)).toBe("Fuel level: 100%");
});

// Tests for CustomSupra
test('CustomSupra should inherit from ToyotaSupra and have additional properties', () => {
  expect(CustomSupra.name).toBe("Toyota");  // Inherited from ToyotaSupra
  expect(CustomSupra.model).toBe("Supra");  // Inherited from ToyotaSupra
  expect(CustomSupra.maxSpeed).toBe(270);  // Updated property
  expect(CustomSupra.customPaint).toBe("Metallic Red");  // New property
});

test('CustomSupra methods should work correctly, including inherited ones', () => {
  // Inherited methods
  expect(CustomSupra.drive()).toBe("The V6 Started!");  // Inherited from ToyotaSupra -> Car -> Vehicle
  expect(CustomSupra.break()).toBe("The V6 Stopped!");  // Inherited from ToyotaSupra -> Car -> Vehicle
  expect(CustomSupra.start()).toBe("Vehicle started.");  // Inherited from ToyotaSupra -> Car -> Vehicle
  expect(CustomSupra.park()).toBe("Vehicle parked.");  // Inherited from ToyotaSupra -> Car -> Vehicle
  expect(CustomSupra.refuel(10)).toBe("Fuel level: 100%");  // Inherited from ToyotaSupra -> Car -> Vehicle
  
  // New methods
  expect(CustomSupra.showOff()).toBe("Look at my custom paint and faster speed!");  // New method
});

// Tests for MotorBike
test('MotorBike should inherit from Vehicle and have additional properties', () => {
    expect(MotorBike.name).toBe("Honda");
    expect(MotorBike.model).toBe("CBR 600");
    expect(MotorBike.wheels).toBe(2);
    expect(MotorBike.engine).toBe("inline 4");
    expect(MotorBike.passengers).toBe(2);
    expect(MotorBike.sidecar).toBe(false);
});

test('MotorBike methods should work correctly', () => {
  expect(MotorBike.drive()).toBe("The inline 4 Started!");
  expect(MotorBike.break()).toBe("The inline 4 Stopped!");
  expect(MotorBike.start()).toBe("Vehicle started.");
  expect(MotorBike.park()).toBe("Vehicle parked.");
  expect(MotorBike.refuel(10)).toBe("Fuel level: 100%");
  expect(MotorBike.wheelie()).toBe("Doing a wheelie!");
});

test('MotorBike wheelie method should work correctly', () => {
    expect(MotorBike.wheelie()).toBe("Doing a wheelie!");
});
