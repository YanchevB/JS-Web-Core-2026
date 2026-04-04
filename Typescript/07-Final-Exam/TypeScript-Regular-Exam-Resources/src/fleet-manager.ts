import { Driver, VehicleCategory } from "./models";
import { BaseVehicle, findItemById, Sedan, SUV, Truck } from "./vehicle-types";

export class FleetManager {
    private _vehicles: BaseVehicle[] = [];
    private _drivers: Map<number, Driver[]> = new Map();

    addVehicle(item: BaseVehicle): string {
        this._vehicles.push(item);
        this._drivers.set(item.id, []);

        return `Vehicle "${item.model}" (ID: ${item.id}) has been added`;
    }

    assignDriver(vehicleId: number, driver: Driver): string {
        const vehicleDriverList = this._drivers.get(vehicleId);

        if (!vehicleDriverList) {
            return `ERROR: Vehicle with ID ${vehicleId} not found.`
        }

        vehicleDriverList.push(driver);
        return `Driver ${driver.name} assigned to vehicle ID ${vehicleId} successfully`
    }

    listAllVehicles(): string[] {
        let result = ["--- List of All Vehicles ---"];

        for (let vehicle of this._vehicles) {
            let specificDetail: string = ''

            if (vehicle instanceof Sedan) {
                specificDetail = `Passengers: ${vehicle.passengerCount}`;
            } else if (vehicle instanceof SUV) {
                specificDetail = `4WD: ${vehicle.fourWheelDrive}`;
            } else if (vehicle instanceof Truck) {
                specificDetail = `Payload: ${vehicle.payloadTons}t`
            }

            result.push(`[${VehicleCategory[vehicle.category].toUpperCase()}] ${vehicle.model} (${vehicle.engineCC}cc, ${specificDetail}) - Maintenance: ${vehicle.getMaintenanceCost().toFixed(2)}€`);
        }

        result.push("-----------------------------");
        return result
    }

    findVehicle(vehicleId: number): BaseVehicle | undefined {
        return findItemById(this._vehicles, vehicleId);
    }
}