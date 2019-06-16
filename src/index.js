import Todo from './Todo.js'

window.onload = function () {
    var todoList = new Todo;
    todoList.load();
    out(todoList.todos);

    function out(todos) {
        document.getElementById("out").innerHTML = '';
        for (var i=0; i<todos.length; i++) {
            var button = document.createElement('button');
            var span = document.createElement('span');
            var br = document.createElement('br');          
            button.addEventListener('click', function () {
                todoList.remove(this.value);
                out(todoList.todos);
            });
            button.value = todos[i].name;
            button.innerHTML = "x";
            span.innerHTML = todos[i].name;
            if(todos[i].check) {
                span.className = "check";
            }
            span.addEventListener('click', function () {
                for(let i=0; i < todoList.todos.length; i++) {
                    if(todoList.todos[i].name == this.innerText) {
                        todoList.todos[i].check = !(todoList.todos[i].check);
                        if(todoList.todos[i].check) {
                            this.className="check";
                        }
                        else {
                            this.className="";
                        }
                    }
                }
                todoList.toLocalStorage();
            });
            document.getElementById('out').appendChild (span);
            document.getElementById('out').appendChild (button);
            document.getElementById('out').appendChild (br);
        }
        
    }

    document.getElementById("add").onclick = function() {
        let value = document.getElementById("in").value;
        if (value) {
            todoList.add(value);
        }
        else {
            confirm("Enter some words..");
        }
        document.getElementById("in").value = "";
        /*if (document.getElementById("data").value != "") {
            let date = document.getElementById("data").value;
            let temp = date.split(" ");
            date = temp[0].split("-").concat(temp[1].split(":"));
            temp = new Date(+date[0]+2000,+date[1]-1,+date[2], +date[3], +date[4]);
            date = new Date;
            console.log(temp-date);
        }*/
        out(todoList.todos);
    }

    document.getElementById("delCheckList").onclick = function () {
        if(confirm("Are you sure?")) {
            todoList.checkedList();
        }
        out(todoList.todos);
    }

    document.getElementById("search").onkeyup = function () {
        var value = document.getElementById("search").value;
        var temp = [];
        for (let i = 0; i < todoList.todos.length; i++) {
            if(todoList.todos[i].name.indexOf(value) === 0) {
                temp.push(todoList.todos[i]);
            }
        }
        out(temp);
    }
}
