#!/usr/bin/env node

import inquirer from "inquirer";

const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message: "Calculate the lenghth of 'Begining' ",
    choices: ["8", "4", "7"],
  },

  {
    name: "question_2",
    type: "list",
    message: "How many types of inquirer prompt we have?",
    choices: ["1", "7", "5", "6"],
  },

  {
    name: "question_3",
    type: "list",
    message: "In logical operators symbol of and is?",
    choices: ["||", "!", "&&"],
  },

  {
    name: "question_4",
    type: "list",
    message: "What kind of data type string is?",
    choices: ["non primitive", "primitive"],
  },

  {
    name: "question_5",
    type: "list",
    message: "For increament in a what would you like to use?",
    choices: ["a++", "a--", "a**"],
  },
]);
let score: number = 0;

switch (quiz.question_1) {
  case "8":
    console.log("1. Correct!");
    ++score;
    break;
  default:
    console.log("1. Incorrect!");
}

switch (quiz.question_2) {
  case "6":
    console.log("2. Correct!");
    ++score;
    break;
  default:
    console.log("2. Incorrect!");
}

switch (quiz.question_3) {
  case "&&":
    console.log("3. Correct!");
    ++score;
    break;
  default:
    console.log("3. Incorrect!");
}

switch (quiz.question_4) {
  case "primitive":
    console.log("4. Correct!");
    ++score;
    break;
  default:
    console.log("4. Incorrect!");
}

switch (quiz.question_5) {
  case "a++":
    console.log("5. Correct!");
    ++score;
    break;
  default:
    console.log("5. Incorrect!");
}

console.log(`score: ${score}`);
