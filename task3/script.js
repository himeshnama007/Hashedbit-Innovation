// =====================================
// Q1. Remove state names starting with vowels
// =====================================

const states = [
  "Andhra Pradesh",
  "Uttar Pradesh",
  "Odisha",
  "Assam",
  "Bihar",
  "Rajasthan",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu"
];

const filteredStates = states.filter(state => {
  const firstChar = state[0].toLowerCase();
  return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log("Q1 Output:");
console.log(filteredStates);


// =====================================
// Q2. Reverse words in sentence
// =====================================

let str = "I love my India";

let reversedSentence = str.split(" ").reverse().join(" ");

console.log("\nQ2 Output:");
console.log(reversedSentence);


// =====================================
// Q3. INDIA -> INDONESIA using splice
// =====================================

let country = "INDIA";

let countryArr = country.split("");

countryArr.splice(3, 2, "O", "N", "E", "S", "I", "A");

console.log("\nQ3 Output:");
console.log(countryArr.join(""));


// =====================================
// Q4. Count vowels and consonants
// =====================================

let text = "JavaScript is a powerful language";

let vowels = 0;
let consonants = 0;

for (let ch of text.toLowerCase()) {
  if (/[a-z]/.test(ch)) {
    if ("aeiou".includes(ch)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("\nQ4 Output:");
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


// =====================================
// Q5. Replace wrong word with correct word
// =====================================

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log("\nQ5 Output:");
console.log(
  correctfn(
    "I am learning JavScript",
    "JavScript",
    "JavaScript"
  )
);


// =====================================
// Q6. Filter numbers greater than 5
// =====================================

const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

const greaterThanFive = inputArr.filter(num => num > 5);

console.log("\nQ6 Output:");
console.log(greaterThanFive);


// =====================================
// Q7. Average marks using map and reduce
// =====================================

const studentsQ7 = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] }
];

const averageResult = studentsQ7.map(student => {
  const average =
    student.scores.reduce((sum, score) => sum + score, 0) /
    student.scores.length;

  return {
    name: student.name,
    average: average
  };
});

console.log("\nQ7 Output:");
console.log(averageResult);


// =====================================
// Q8. Repeated sum of digits
// =====================================

function singleDigitSum(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return num;
}

console.log("\nQ8 Output:");
console.log(singleDigitSum(456));


// =====================================
// Q9. Count number of words
// =====================================

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

const paragraph =
  "JavaScript is a popular programming language used worldwide.";

console.log("\nQ9 Output:");
console.log(countWords(paragraph));


// =====================================
// Q10. Reverse a string
// =====================================

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("\nQ10 Output:");
console.log(reverseString("Hello"));


// =====================================
// Q11. Find average marks of each student
// =====================================

const studentsQ11 = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

const averageMarks = {};

for (let student in studentsQ11) {
  const marks = Object.values(studentsQ11[student]);

  const average =
    marks.reduce((sum, mark) => sum + mark, 0) /
    marks.length;

  averageMarks[student] = {
    average: average
  };
}

console.log("\nQ11 Output:");
console.log(averageMarks);