// console.log("Typescript 1 2 3 5 6");
// console.log("hello world!");
var age = 2025;
var firstName = "Name";
var isUpdated = true;
function display(id, name) {
    console.log("ID =" + id + " Name = " + name);
}
function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Abc",
    lastName: "Xyz",
};
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("Abc Def", true));
