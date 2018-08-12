function getCaller() {
    return this;
}
var alice = {name: "Alice", fn: getCaller},
    bob = {name: "Bob", fn: getCaller};

console.log(alice.fn());
console.log(bob.fn());
console.log(getCaller());

// function Human(name, age) {
//     this.name = name;
//     this.age = age;
// }

// alice = new Human("Alice", 19);
// bob = new Human("Bob", 23);

// console.log(alice); 
// console.log(bob);

