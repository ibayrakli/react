// console.log("Typescript 1 2 3 5 6");
// console.log("hello world!");
var age = 2025;
var firstName = "Name";
var isUpdated = true;
function display(id, name) {
    console.log("ID =" + id + " Name = " + name);
}
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Please enter a valid input");
}
console.log(add(5, 6));
console.log(add("Jane ", " John"));
console.log(add(5, "Jane"));
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        //..
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        //
        return true;
    };
    return Supplier;
}());
function signContractor(partner) {
    var message = "";
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed()
            ? "Credit allowed for customer"
            : "Problem for customer";
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList()
            ? "Credit allowed for supplier"
            : "Problem for supplier";
    }
    return message;
}
