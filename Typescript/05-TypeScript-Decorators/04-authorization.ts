
function authorizeUser(service: MockAuthorizationService) {
    return function(
        target: object, 
        propName: string, 
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
        const originalGet = descriptor.get!;

        descriptor.get = function() {
            if (!service.canViewData(propName)) {
                throw new Error('You are not authorized to view this information');
            } 
            return originalGet.call(this);
        }
        return descriptor;
    }
}

class MockAuthorizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) { 
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
            default: return false;
        }
    }
}

let mockAuthorizationService = new MockAuthorizationService('Guest');

class User5 {
    private _name: string;
    private _age: number;
    private _creditCardNumber: string

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }
    
    @authorizeUser(mockAuthorizationService)
    public get name(): string {
        return this._name;
    }

    @authorizeUser(mockAuthorizationService)
    public get age(): number {
        return this._age;
    }

    @authorizeUser(mockAuthorizationService)
    public get creditCardNumber(): string {
        return this._creditCardNumber;
    }
}

const user5 = new User5("John Doe", 30, 'ABCD-1234');
console.log(user5.name);
console.log(user5.age);
console.log(user5.creditCardNumber);