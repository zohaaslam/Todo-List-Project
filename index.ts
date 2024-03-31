#! /usr/bin/env node


import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition)
{
let addTask = await inquirer.prompt(
    [

    {
        name: "todos",
        message :"what u want to do?",
        type : "input"

},
{
    name: "addMore",
    message: "Do you wan to add more?",
    type : "confirm",
    default : "false"


}






]);
todos.push(addTask.todos);
condition = addTask.addMore
console.log(todos)
}