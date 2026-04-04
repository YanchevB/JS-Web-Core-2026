"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findItemById = exports.Truck = exports.SUV = exports.Sedan = exports.BaseVehicle = void 0;
const decorators_1 = require("./decorators");
const models_1 = require("./models");
class BaseVehicle {
    constructor(id, model, engineCC, category) {
        this.id = id;
        this.model = model;
        this.engineCC = engineCC;
        this.category = category;
    }
    get baseRentalPrice() {
        return this._baseRentalPrice;
    }
    get insuredRentalPrice() {
        return this._baseRentalPrice;
    }
}
exports.BaseVehicle = BaseVehicle;
__decorate([
    decorators_1.ApplyInsurance
], BaseVehicle.prototype, "insuredRentalPrice", null);
class Sedan extends BaseVehicle {
    constructor(id, model, engineCC, passengerCount) {
        super(id, model, engineCC, models_1.VehicleCategory.Sedan);
        this.passengerCount = passengerCount;
    }
    getMaintenanceCost() {
        return (this.engineCC * 0.03) + (this.passengerCount * 15);
    }
}
exports.Sedan = Sedan;
class SUV extends BaseVehicle {
    constructor(id, model, engineCC, fourWheelDrive, baseRentalPrice) {
        super(id, model, engineCC, models_1.VehicleCategory.SUV);
        this.fourWheelDrive = fourWheelDrive;
        this._baseRentalPrice = baseRentalPrice;
    }
    getMaintenanceCost() {
        return (this.engineCC * 0.05) + (this.fourWheelDrive ? 200 : 0);
    }
}
exports.SUV = SUV;
class Truck extends BaseVehicle {
    constructor(id, model, engineCC, payloadTons, baseRentalPrice) {
        super(id, model, engineCC, models_1.VehicleCategory.Truck);
        this.payloadTons = payloadTons;
        this._baseRentalPrice = baseRentalPrice;
    }
    getMaintenanceCost() {
        return (this.engineCC * 0.07) + (this.payloadTons * 50);
    }
}
exports.Truck = Truck;
function findItemById(items, id) {
    return items.find((item) => item.id === id);
}
exports.findItemById = findItemById;
