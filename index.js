import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: 'firstNumber',
        message: 'Enter first number',
        type: 'input'
    }, {
        name: 'SecondNumber',
        message: 'Enter second number',
        type: 'input'
    }, {
        name: 'operator',
        message: 'Enter operator',
        type: 'list',
        choices: ['add', 'subtract', 'multiply', 'devide']
    }]);
console.log(answer);
