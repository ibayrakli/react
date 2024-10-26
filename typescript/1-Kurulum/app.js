// console.log("Typescript 1 2 3 5 6");
// console.log("hello world!");
var age = 2025;
var firstName = "Name";
var isUpdated = true;
function display(id, name) {
    console.log("ID =" + id + " Name = " + name);
}
var Employee = /** @class */ (function () {
    function Employee(empNumber, name, gender) {
        (this.empNumber = empNumber), (this.name = name), (this.gender = gender);
    }
    return Employee;
}());
var employee = new Employee(5, "John", "Doe");
console.log(employee);
