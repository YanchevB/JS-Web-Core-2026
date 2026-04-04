"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = exports.SUV = exports.Sedan = exports.FleetManager = void 0;
// index.ts 
const fleet_manager_js_1 = require("./fleet-manager.js");
Object.defineProperty(exports, "FleetManager", { enumerable: true, get: function () { return fleet_manager_js_1.FleetManager; } });
const vehicle_types_js_1 = require("./vehicle-types.js");
Object.defineProperty(exports, "Sedan", { enumerable: true, get: function () { return vehicle_types_js_1.Sedan; } });
Object.defineProperty(exports, "SUV", { enumerable: true, get: function () { return vehicle_types_js_1.SUV; } });
Object.defineProperty(exports, "Truck", { enumerable: true, get: function () { return vehicle_types_js_1.Truck; } });
async function main() {
    // --- Input 1: Add Vehicles ---
    const fleetManager = new fleet_manager_js_1.FleetManager();
    const sedan = new vehicle_types_js_1.Sedan(1, 'Toyota Camry', 2500, 5);
    const suv = new vehicle_types_js_1.SUV(2, 'Ford Explorer', 3500, true, 180);
    const truck = new vehicle_types_js_1.Truck(3, 'Volvo FH', 12000, 20, 350);
    console.log(fleetManager.addVehicle(sedan));
    console.log(fleetManager.addVehicle(suv));
    console.log(fleetManager.addVehicle(truck));
    // --- Input 2: Assign Drivers ---
    // const driver1: Driver = { name: 'Alice', licenseNumber: 'DL-001' };
    // const driver2: Driver = { name: 'Bob', licenseNumber: 'DL-002' };
    // console.log(fleetManager.assignDriver(2, driver1));
    // console.log(fleetManager.assignDriver(3, driver2));
    // console.log(fleetManager.assignDriver(9, driver2));
    // --- Input 3: List All Vehicles ---
    // console.log(fleetManager.listAllVehicles().join('\n'));
    // --- Input 4: Find Vehicle by ID ---
    // const foundVehicle = fleetManager.findVehicle(2);
    // if (foundVehicle) {
    //     console.log(`Found vehicle: ${foundVehicle.model}, Maintenance: ${foundVehicle.getMaintenanceCost()}€`);
    // } else {
    //     console.log('Vehicle not found');
    // }
    // --- Input 5: Check Decorated insuredRentalPrice ---
    console.log(`Truck base rental price: ${truck.baseRentalPrice?.toFixed(2)}€`);
    console.log(`Truck insured rental price: ${truck.insuredRentalPrice?.toFixed(2)}€`);
    console.log(`Sedan insured rental price (should be undefined): ${sedan.insuredRentalPrice}`);
}
main();
