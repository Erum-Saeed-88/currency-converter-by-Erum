#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 1.91,
    GBP: 0.96,
    INR: 75.87,
    PKR: 380,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[answer.from]; // exchange rate
let toAmount = currency[answer.to]; // exchange rate
let amount = answer.amount;
let baseAmount = amount / fromAmount; // USD base amount
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
