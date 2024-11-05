var Employee = /** @class */ (function () {
    function Employee(_empName, _empAge, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._empAge = _empAge;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log(_this._empName + '의 나이는 ' + _this._empAge + '이고, 직업은 ' + _this._empJob + '입니다.');
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get / set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('hello', 20, 'planner');
employee1.empName = 'world';
employee1.printEmp();
