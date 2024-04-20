#! usr/bin/env node
//this is called shabang

import inquirer from "inquirer";
import chalk from "chalk";

const answer: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "Input",
    message: chalk.yellow("Enter your sentence to count the word:"),
  },
]);
const words = answer.sentence.trim().split(" ");
//.trim()        print the array of word to the console
console.log(words);
// .split(" ")    print the word count of the sentence to the console
console.log(chalk.blue(`your suntence word count is ${words.length}`));
