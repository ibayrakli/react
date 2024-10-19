// console.log("Typescript 1 2 3 5 6");
// console.log("hello world!");
var age = 2025;
var firstName = "Name";
var isUpdated = true;
function display(id, name) {
    console.log("ID =" + id + " Name = " + name);
}
//display(1, "Deneme");
// lesson 79, data-type-number-string-boolean
// let first: number = 123;
// let second: number = 0x37cf;
// let third: number = 0o377;
// let fourth: number = 0b111001;
// console.log(first); //123
// console.log(second); //14287
// console.log(third); //255
// console.log(fourth); //57
// let employeefirstName: string = "Deneme";
// let department: string = "Dept1";
// console.log(employeefirstName);
// //pre-es6
// let desc1: string =
//   employeefirstName + " works in the " + department + " department.";
// //post-es6
// let desc2: string = `${employeefirstName} works in the ${department} department.`;
// console.log(desc1);
// console.log(desc2);
// let isPresent: boolean = false;
// console.log(isPresent);
// let firstNames: string[] = ["X", "Y", "Z"];
// //let firstNames: Array<string> = ["X", "Y", "Z"];
// console.log(firstNames);
// let arr = [1, 3, "Apple", "Orange", "Banana", true, false];
// let ids: Array<number>;
// ids = [23, 34, 100, 44];
// // let values: (string | number)[] = ["Apple", 2, "Banana"];
// let values: Array<string | number> = ["Apple", 2, "Banana"];
// let fruits: Array<string>;
// fruits = ["Apple", "Orange", "Banana"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// let id: number = 1;
// let instructorName: string = "DenemeIns";
// let instructor: [number, string] = [2, "Denem2"];
// var user: [number, string, boolean, number, string];
// user = [1, "Deneme", true, 20, "Admin"];
// console.log(instructor, user);
// let employee: [number, string][];
// employee = [
//   [1, "A"],
//   [2, "B"],
//   [3, "C"],
// ];
// console.log(employee);
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };
// let instructor: Person;
// instructor = {
//   firstName: "Name",
//   lastName: "LastName",
//   age: 13,
//   jobTitle: "Software Instructor",
// };
// let person: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };
// person = {
//   firstName: "Name",
//   lastName: "LastName",
//   age: 13,
//   jobTitle: "Software Instructor",
// };
// console.log(instructor.age);
// console.log(person);
// enum Media {
//   Newspaper = 1,
//   Newsletter,
//   Magazine,
//   Book,
// }
// // console.log(Media.Magazine);
// console.log(Media[1]);
// enum PrintMedia {
//   Newspaper = "NEWSPAPER",
//   Newsletter = "NEWSLETTER",
//   Magazine = "MAGAZINE",
//   Book = "BOOK",
// }
// // console.log(PrintMedia.Newsletter);
// // console.log(PrintMedia["Book"]);
// let code: string | number | boolean;
// // code = 123;
// code = false;
// console.log(code);
// let something: any = "Hello";
// something = 45;
// something = true;
// something = {
//   firstName: "Namee",
//   lastName: "Lastname",
// };
// console.log(something);
// let arr: any[] = ["John", 21, true];
// console.log(arr);
// function sayHello(): void {
//   console.log("Hi");
// }
// sayHello();
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }
// throwError("Hata");
// let something: void | null = null;
// let sayac = 0;
// console.log(typeof sayac);
// function increment(counter: number): number {
//   return counter++;
// }
// // let a = "something";
// // let b = 123;
// // a = b;
// function sum(a: number, b: number) {
//   return a + b;
// }
// let total: number = sum(3, 10);
// let code: any = 123;
// let empCode = <number>code;
// console.log(typeof empCode);
// interface Employee {
//   name: string;
//   code: number;
// }
// let employee = <Employee>{};
// console.log(typeof employee);
// employee.name = "Name";
// console.log(employee);
// let x: number = 40;
// let y: number = 25;
// // if (x > y) {
// //   console.log("X Y den buyuktur");
// // } else if (x < y) {
// //   console.log("X Y den kucuktur");
// // } else {
// //   console.log("X Y ye esittir");
// // }
// x > y
//   ? console.log("X Y den buyuktur")
//   : console.log("X Y den kucuktur veya esittir");
// let day: number = 26;
// switch (day) {
//   case 0:
//     console.log("Pazar");
//     break;
//   case 1:
//     console.log("Pazartesi");
//     break;
//   case 2:
//     console.log("Sali");
//     break;
//   case 3:
//     console.log("Carsamba");
//     break;
//   case 4:
//     console.log("Persembe");
//     break;
//   case 5:
//     console.log("Cuma");
//     break;
//   case 6:
//     console.log("Cumartesi");
//     break;
//   default:
//     console.log("Boyle bir gun yok");
//     break;
// }
// for (let i = 0; i < 3; i++) {
//   console.log("i value:", i);
// }
// let arr = [10, 20, 30, 40, 50];
// for (let item of arr) {
//   console.log(item);
// }
// let str = "Name Surname";
// for (let item of str) {
//   console.log(item);
// }
// for (let item in arr) {
//   console.log(item);
// }
var counter = 10;
while (counter < 5) {
    console.log(counter);
    counter++;
    if (counter == 3)
        break;
}
do {
    console.log(counter);
    counter++;
} while (counter < 5);
