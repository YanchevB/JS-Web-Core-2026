"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetManager = void 0;
const models_1 = require("./models");
const vehicle_types_1 = require("./vehicle-types");
class FleetManager {
    constructor() {
        this._vehicles = [];
        this._drivers = new Map();
    }
    addVehicle(item) {
        this._vehicles.push(item);
        this._drivers.set(item.id, []);
        return `Vehicle "${item.model}" (ID: ${item.id}) has been added`;
    }
    assignDriver(vehicleId, driver) {
        const vehicleDriverList = this._drivers.get(vehicleId);
        if (!vehicleDriverList) {
            return `ERROR: Vehicle with ID ${vehicleId} not found.`;
        }
        vehicleDriverList.push(driver);
        return `Driver ${driver.name} assigned to vehicle ID ${vehicleId} successfully`;
    }
    listAllVehicles() {
        let result = ["--- List of All Vehicles ---"];
        for (let vehicle of this._vehicles) {
            let specificDetail = '';
            if (vehicle instanceof vehicle_types_1.Sedan) {
                specificDetail = `Passengers: ${vehicle.passengerCount}`;
            }
            else if (vehicle instanceof vehicle_types_1.SUV) {
                specificDetail = `4WD: ${vehicle.fourWheelDrive}`;
            }
            else if (vehicle instanceof vehicle_types_1.Truck) {
                specificDetail = `Payload: ${vehicle.payloadTons}t`;
            }
            result.push(`[${models_1.VehicleCategory[vehicle.category].toUpperCase()}] ${vehicle.model} (${vehicle.engineCC}cc, ${specificDetail}) - Maintenance: ${vehicle.getMaintenanceCost().toFixed(2)}€`);
        }
        result.push("-----------------------------");
        return result;
    }
    findVehicle(vehicleId) {
        return (0, vehicle_types_1.findItemById)(this._vehicles, vehicleId);
    }
}
exports.FleetManager = FleetManager;
