var numbers = new Set();
numbers.add(42);
console.log(numbers);
numbers.add(43);
console.log(numbers);
numbers.add(42);
console.log(numbers);
console.log(numbers.size);
console.log(numbers.has(42));
console.log(numbers.has("Hello, world"));
numbers.delete(42);
console.log(numbers.has(42));
numbers.clear();
console.log(numbers.size);


// var objects = new Set();
// objects.add("Hello, world!");
// objects.add("Hello, world!");
// objects.add({ key: "value" });
// objects.add({ key: "value" });
// console.log(objects.size);

// var colors = new Set(["red", "green", "blue"]);
// console.log(colors.size);
// for(var item of colors) {
//     console.log(item);
// }

