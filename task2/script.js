
console.log("Even Numbers from 1 to 100:");

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

        default:
            return "Invalid Operation";
    }
}

console.log("\nCalculator:");
console.log("10 + 5 =", calculate(10, 5, '+'));
console.log("10 - 5 =", calculate(10, 5, '-'));
console.log("10 * 5 =", calculate(10, 5, '*'));
console.log("10 / 5 =", calculate(10, 5, '/'));


function findTax(salary) {
    let tax;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            tax = "Invalid Salary";
    }

    return tax;
}

console.log("\nTax Calculation:");
console.log("Salary = 400000, Tax =", findTax(400000));
console.log("Salary = 800000, Tax =", findTax(800000));
console.log("Salary = 1200000, Tax =", findTax(1200000));
console.log("Salary = 2000000, Tax =", findTax(2000000));




function sumOfProducts(n1, n2) {
    let sum = 0;

    while(n1 > 0 || n2 > 0) {
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum += digit1 * digit2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

console.log(sumOfProducts(6, 34));      // 24