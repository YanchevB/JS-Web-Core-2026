"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyInsurance = void 0;
function ApplyInsurance(target, propertyKey, descriptor) {
    const originalGet = descriptor.get;
    if (!originalGet) {
        throw new Error("ApplyInsurance can only be applied to getters");
    }
    descriptor.get = function () {
        const baseRentalPrice = originalGet?.call(this);
        if (baseRentalPrice === undefined) {
            return undefined;
        }
        const insuredPrice = baseRentalPrice * 1.12;
        return Number(insuredPrice.toFixed(2));
    };
    return descriptor;
}
exports.ApplyInsurance = ApplyInsurance;
