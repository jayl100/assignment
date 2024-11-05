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
enum GenderType {
    Female = 0,
    Male = 1,
    None = 2
}

interface Student {
    stdId: number;
    stdName?: string;
    age?: number;
    gender?: 'female' | 'male';
    course?: string;
    completed?: boolean;
    setName: (name: string) => void;
    getName?: () => string;
}

class MyStudent implements Student {
    stdId = 990;
    stdName = 'llet';
    age = 90;
    gender : 'female' | 'male' = 'male';
    course = 'react';
    completed = false;

    setName(name: string): void {
        this.stdName = name;
        console.log('set name : ' + this.stdName)
    }
}

const myInstance = new MyStudent();
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
let mixedArray: (number | string)[]= [1, 'two', 3, 'four'];
for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}

let infer = [1,2,3]; // 타입추론
for (let i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}

// 읽기전용 array
let readOnlyArray : ReadonlyArray<number> = [1,2,3];

// 튜플
let greeting : [number, string, boolean] = [1, 'hello', true];
for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

// spread 연산자
let firstArray = [1,2,3];
let secondArray = [4,5,6];

let combineArray = [...firstArray, ...secondArray];
// ...을 spread라고 한다. 기존의 array를 없앤다.

for (let i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}