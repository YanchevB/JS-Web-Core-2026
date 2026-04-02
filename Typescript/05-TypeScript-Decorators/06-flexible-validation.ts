function validateName(minLength: number) {
    return function(target: object, propName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalSet = descriptor.set!;

        descriptor.set = function(val: string) {
            if (val.length < minLength) {
                throw new Error("name must have a min length of 3 characters");
            }

            originalSet.call(this, val);
        }
        return descriptor;
    }
}

function validateAge(minAge: number, maxAge: number) {
    return function(target: object, propName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalSet = descriptor.set!;

        descriptor.set = function(val: number) {
            if (val < minAge || val > maxAge) {
                throw new Error(`age must be between ${minAge} and ${maxAge}`);
            }

            originalSet.call(this, val);
        }
        return descriptor;
    }
}

function validatePassword(pattern: RegExp) {
    return function(target: object, propName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalSet = descriptor.set!;

        descriptor.set = function(val: string) {
            if (!val.match(pattern)) {
                throw new Error(`password needs to match ${pattern}`);
            }

            originalSet.call(this, val);
        }
        return descriptor;
    }
}

class User2 {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this._age = age;
        this._password = password;
    }

    @validateName(3)
    set name(val: string) { 
        this._name = val; 
    }

    @validateAge(1, 100)
    set age(val:number) {
        this._age = val
    }

    set password(val: string) {
        this._password = val;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

let user = new User2('John', 130, 'hardPassword12');
let user2 = new User2('John', 30, '!test');
let user3 = new User2('John', 25, '@werty');
let user4 = new User2('Jo', 20, 'password123');