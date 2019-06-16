import Task from './Task.js'

class Todo {
    constructor() {
        this.todos = [];
    }

    add(to_do) {
        var todo = new Task(to_do);
        this.todos.push(todo.getObject());
        this.toLocalStorage();
    }

    remove(todo) {
        for(let i = 0; i < this.todos.length; i++) {
            if(this.todos[i].name == todo) {
                var idx = this.todos.indexOf(this.todos[i]);
                if (idx != -1) {
                    this.todos.splice(idx, 1);
                }
            }
        }
        this.toLocalStorage();
    }

    checkedList() {
        for(let i = 0; i < this.todos.length; i++) {
            if(this.todos[i].check == true) {
                this.remove(this.todos[i].name);
                i = i-1;
            }
        }
        this.toLocalStorage();
    }

    toLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    load() {
        if (localStorage.getItem('todo')) {
            this.todos = JSON.parse(localStorage.getItem('todo'));
        }
    }
}

export default Todo;