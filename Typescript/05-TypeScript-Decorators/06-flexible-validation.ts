
//TODO: Solve exercise

class User2 {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this._age = age;
        this._password = password;
    }

    set name(val: string) { 
        this._name = val; 
    }
}