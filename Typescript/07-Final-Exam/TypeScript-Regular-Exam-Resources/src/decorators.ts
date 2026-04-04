export function ApplyInsurance(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
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
    }
    return descriptor;
}