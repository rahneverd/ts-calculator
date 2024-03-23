import inquirer from "inquirer";

let answers = await inquirer.prompt([
  {
    name: 'firstNumber',
    message: 'Enter first number',
    type: 'number'
  }, {
    name: 'secondNumber',
    message: 'Enter second number',
    type: 'number'
  }, {
    name: 'operator',
    message: 'Select Operator',
    type: 'list',
    choices: ['Add', 'Subtract', 'Mutiply', 'Divide']
  }
])

console.log(answers)
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