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
var isPresent = false;
console.log(isPresent);
var firstNames = ["X", "Y", "Z"];
//let firstNames: Array<string> = ["X", "Y", "Z"];
console.log(firstNames);
var arr = [1, 3, "Apple", "Orange", "Banana", true, false];
var ids;
ids = [23, 34, 100, 44];
// let values: (string | number)[] = ["Apple", 2, "Banana"];
var values = ["Apple", 2, "Banana"];
var fruits;
fruits = ["Apple", "Orange", "Banana"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
var id = 1;
var instructorName = "DenemeIns";
var instructor = [2, "Denem2"];
var user;
user = [1, "Deneme", true, 20, "Admin"];
console.log(instructor, user);
var employee;
employee = [
    [1, "A"],
    [2, "B"],
    [3, "C"],
];
console.log(employee);
