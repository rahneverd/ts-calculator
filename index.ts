#! /usr/bin/env node

import inquirer from "inquirer";

let validationFunc = (input: any) => !isNaN(parseFloat(input))

let answers = await inquirer.prompt([
  {
    name: 'firstNumber',
    message: 'Enter first number',
    type: 'number',
    validate: async (input: string) => validationFunc(input), //!isNaN(parseFloat(input)),
  }, {
    name: 'secondNumber',
    message: 'Enter second number',
    type: 'number',
    validate: async (input: string) => validationFunc(input), //!isNaN(parseFloat(input)),
  }, {
    name: 'operator',
    message: 'Select Operator',
    type: 'list',
    choices: ['Add', 'Subtract', 'Mutiply', 'Divide']
  }
])

// console.log(answers)
let result: number
if (answers.operator === 'Add') {
  // Addition
  result = answers.firstNumber + answers.secondNumber
} else if (answers.operator === 'Subtract') {
  // Subtraction
  result = answers.firstNumber - answers.secondNumber
}else if (answers.operator === 'Mutiply') {
  // Multiplication
  result = answers.firstNumber * answers.secondNumber
}else {
  // Division
  result = answers.firstNumber / answers.secondNumber
}
 console.log(`Result is ${result}`)