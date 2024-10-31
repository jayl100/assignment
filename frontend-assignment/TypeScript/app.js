"use strict";
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
class MyStudent {
    constructor() {
        this.stdId = 990;
        this.stdName = 'llet';
        this.age = 90;
        this.gender = GenderType.Male;
        this.course = 'react';
        this.completed = false;
    }
    setName(name) {
        this.stdName = name;
        console.log('set name : ' + this.stdName);
    }
}
const myInstance = new MyStudent();
myInstance.setName('hello');
// function getStdInfo(id: number): Student {
//     return {
//         stdId: id,
//         stdName: 'hay',
//         // age: 10,
//         gender: 'f',
//         course: 'typescript',
//         completed: true,
//     };
// }
//
// let std = {
//     stdId: 990,
//     stdName: 'llet',
//     age: 90,
//     gender: 'n',
//     course: 'react',
//     completed: false
// }
//
// function setInfo(student: Student): void {
//     console.log(student);
// }
//
// setInfo(std);
// console.log(getStdInfo(1111));
// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a: number, b: number): number {
//     return a + b;
// }
// void 타입은 아무것도 리턴하지 않는다.
