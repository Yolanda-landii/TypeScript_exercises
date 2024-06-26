"use strict";
// 1. Create a Person class with name and age properties. Implement a method to return the person's name.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = '';
    }
    getName() {
        return this.name;
    }
    // 2. Add a private property socialSecurityNumber to the Person class and a method to get the age.
    setSocialSecurityNumber(ssn) {
        this.socialSecurityNumber = ssn;
    }
    getAge() {
        return this.age;
    }
    getSocialSecurityNumber() {
        return this.socialSecurityNumber;
    }
}
const person = new Person("Yolanda Mabotja", 23);
console.log("Name:", person.getName());
console.log("Age:", person.getAge());
person.setSocialSecurityNumber("123-45-6789");
console.log("Social Security Number:", person.getSocialSecurityNumber());
