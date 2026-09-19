"use strict";
let todoList = [];
function addTask(taskText) {
    let newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    todoList.push(newTask);
    console.log(`Task added: "${taskText}"`);
}
addTask("Testing TSConfig Configuration");
