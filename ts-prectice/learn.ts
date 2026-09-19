interface Task {
    id: number;
    text: string;
    completed: boolean;
}

let todoList: Task[] = [];

function addTask(taskText: string): void {
    let newTask: Task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    todoList.push(newTask);
    console.log(`Task added: "${taskText}"`);
}

addTask("Testing TSConfig Configuration");