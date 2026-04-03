
export function ConvertToEuro(target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalGet = descriptor.get;

    if (!originalGet) {
        throw new Error("ConvertToEuro can only be applied to getters");
    }

    descriptor.get = function() {
        const originalBasePrice = originalGet?.call(this);
        
        if (originalBasePrice === undefined) {
            return undefined;
        }

        const convertedBasePrice = originalBasePrice / 1.95583;
        return Number(convertedBasePrice.toFixed(2)); 
    }

    return descriptor;
}