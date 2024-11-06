class Employee {
    constructor(
        private _empName: string,
        private _empAge: number,
        private _empJob: string,
    ) {
    }

// get / set
    get empName() {
        return this._empName;
    }

    set empName(val
                    :
                    string
    ) {
        this._empName = val;
    }

    printEmp = (): void => {
        console.log(this._empName + '의 나이는 ' + this._empAge + '이고, 직업은 ' + this._empJob + '입니다.');
    }
}

let employee1 = new Employee('hello', 20, 'planner');
employee1.empName = 'world'

employee1.printEmp();
