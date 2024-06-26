// 1. Create a Person class with name and age properties. Implement a method to return the person's name.
class Person {
    name: string;
    age: number;
    
    private socialSecurityNumber: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = '';
    }

    getName(): string {
        return this.name;
    }

    // 2. Add a private property socialSecurityNumber to the Person class and a method to get the age.
    setSocialSecurityNumber(ssn: string): void {
        this.socialSecurityNumber = ssn;
    }

    getAge(): number {
        return this.age;
    }
    getSocialSecurityNumber(): string {
        return this.socialSecurityNumber;
    }
}
const person = new Person("Yolanda Mabotja", 23);
console.log("Name:", person.getName());           
console.log("Age:", person.getAge());             

person.setSocialSecurityNumber("123-45-6789");
console.log("Social Security Number:", person.getSocialSecurityNumber());