// 1. Create a Person class with name and age properties. Implement a method to return the person's name.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = '';
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    // 2. Add a private property socialSecurityNumber to the Person class and a method to get the age.
    Person.prototype.setSocialSecurityNumber = function (ssn) {
        this.socialSecurityNumber = ssn;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getSocialSecurityNumber = function () {
        return this.socialSecurityNumber;
    };
    return Person;
}());
var person = new Person("Yolanda Mabotja", 23);
console.log("Name:", person.getName());
console.log("Age:", person.getAge());
person.setSocialSecurityNumber("123-45-6789");
console.log("Social Security Number:", person.getSocialSecurityNumber());
