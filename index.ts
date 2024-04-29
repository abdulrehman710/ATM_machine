#! /usr/bin/env node

import inquirer from "inquirer";

let user_pin = 8454;

let balance = 10000;

const pin_answer = await inquirer.prompt([
  { message: "Enter your pin : ", type: "number", name: "pin" },
]);

if (user_pin == pin_answer.pin) {
  console.log("Correct pin");

  const option_answer = await inquirer.prompt([
    {
      message: "Select an option : ",
      type: "list",
      name: "option",
      choices: ["Withdraw amount", "Check balance"],
    },
  ]);

  if (option_answer.option === "Withdraw amount") {
    const amount = await inquirer.prompt([
      {
        message: "Enter amount to withdraw multiple of (500 - 1000): ",
        type: "list",
        name: "select",
        choices: ["500", "1000", "5000", "10000", "20000", "other"],
      },
    ]);

    if (amount.select == "500") {
      if (amount.select <= balance){
        console.log("Cash withdraw : ");
        console.log("Balance remained : ", balance - amount.select);
      } else {
        console.log("Not enough balance");
      }
    } else if (amount.select == "1000") {
      if (amount.select <= balance){
        console.log("Cash withdraw : ", amount.select);
        console.log("Balance remained : ", balance - amount.select);
      } else {
        console.log("Not enough balance");
      }
    } else if (amount.select == "5000") {
      if (amount.select <= balance){
        console.log("Cash withdraw : ", amount.select);
        console.log("Balance remained : ", balance - amount.select);
      } else {
        console.log("Not enough balance");
      }
    } else if (amount.select == "10000") {
      if (amount.select <= balance){
        console.log("Cash withdraw : ", amount.select);
        console.log("Balance remained : ", balance - amount.select);
      } else {
        console.log("Not enough balance");
      }
    } else if (amount.select == "20000") {
      if (amount.select <= balance){
        console.log("Cash withdraw : ", amount.select);
        console.log("Balance remained : ", balance - amount.select);
      } else {
        console.log("Not enough balance");
      }
    } else if (amount.select == "other") {
      const other = await inquirer.prompt([
        {
          message: "Enter amount multiple of (500 or 1000) : ",
          type: "number",
          name: "amount",
        },
      ]);
      if (other.amount % 500 == 0) {
        if (amount.select <= balance){
          console.log("Cash withdraw : ", amount.select);
          console.log("Balance remained : ", balance - amount.select);
        } else {
          console.log("Not enough balance");
        }
      } else {
        console.log("Incorrect input");
      }
    }
  } else if (option_answer.option == "Check balance"){
    console.log("Your balance is : ", balance);
  }
} else {
  console.log("Incorrect pin");
}
