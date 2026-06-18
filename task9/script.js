// Q1. Difference between var, let and const

function scopeDemo() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("var:", a);
    console.log("let:", b);
    console.log("const:", c);
}

scopeDemo();

// var -> function scoped
// let -> block scoped
// const -> block scoped and cannot be reassigned


// Q2. Return second fruit

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function secondFruit(arr) {
    return arr[1];
}

console.log(secondFruit(fruits));


// Q3. Push and Pop

function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();

    return arr;
}

console.log(modifyArray([1, 2, 3, 4]));


// Q4. Square each number using map()

const nums = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log(squareNumbers(nums));


// Q5. Filter odd numbers

function oddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(oddNumbers([1, 2, 3, 4, 5, 6, 7]));


// Q6. Greeting using object

const person = {
    name: "Himesh",
    age: 21,
    occupation: "Student"
};

function greet(person) {
    console.log(
        `Hello, my name is ${person.name}. I am ${person.age} years old and I am a ${person.occupation}.`
    );
}

greet(person);


// Q7. Area of rectangle

function rectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}

console.log(rectangleArea({
    width: 10,
    height: 5
}));


// Q8. Return object keys

const student = {
    name: "Ram",
    age: 20,
    branch: "CSE"
};

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys(student));


// Q9. Merge two objects

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

console.log(
    mergeObjects(
        { name: "Ram" },
        { age: 20 }
    )
);


// Q10. Sum of array using reduce()

const numbers = [10, 20, 30, 40, 50];

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray(numbers));