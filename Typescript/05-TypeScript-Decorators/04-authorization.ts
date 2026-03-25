
//TODO: Solve exercise

class Age1 {

    private _age!: number;

    constructor(age: number){
        this.age = age;
    }

    set age(val: number){ 
        this._age = val; 
    }

    get age() { 
        return this._age; 
    }
}