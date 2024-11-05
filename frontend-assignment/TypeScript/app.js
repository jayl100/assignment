// let student = {
//     name: 'hay',
//     course: 'typesctript',
//     score: 100,
//     grade: function () {
//         console.log('A');
//     }
// }
//
// student.name = 'hello';
// student.score = 300;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 변수의 데이터 타입 명시
// let stdId: number = 108;
// let stdName: string = 'hay';
// let age: number = 10;
// let gender: string = 'null';
// let course: string = 'typescript';
// let completed: boolean = true;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Female"] = 0] = "Female";
    GenderType[GenderType["Male"] = 1] = "Male";
    GenderType[GenderType["None"] = 2] = "None";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 990;
        this.stdName = 'llet';
        this.age = 90;
        this.gender = 'male';
        this.course = 'react';
        this.completed = false;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('set name : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('hello');
// function getStdInfo(id: number): Student {
//     return {
//         stdId: id,
//         stdName: 'hay',
//         // age: 10,
//         gender: 'female',
//         course: 'typescript',
//         completed: true,
//     };
// }
// let std = {
//     stdId: 990,
//     stdName: 'llet',
//     age: 90,
//     gender: 'female',
//     course: 'react',
//     completed: false
// }
//
// function setInfo(student: Student): void {
//     console.log(student);
// }
// setInfo(std);
// console.log(getStdInfo(1111));
// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a: number, b: number): number {
//     return a + b;
// }
// void 타입은 아무것도 리턴하지 않는다.
// let anyVal : any = 100;
// anyVal = 999;
//
// let numbers : number[] = [1,2,3,4,5];
// let fruits : string[] = ['apple', 'banana', 'orange'];
//
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
//
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// 배열의 유니온 타입
var mixedArray = [1, 'two', 3, 'four'];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
var infer = [1, 2, 3]; // 타입추론
for (var i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
// 읽기전용 array
var readOnlyArray = [1, 2, 3];
// 튜플
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
// spread 연산자
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
// ...을 spread라고 한다. 기존의 array를 없앤다.
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
