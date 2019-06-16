import Todo from './Todo.js'

window.onload = function () {
    var todoList = new Todo;
    todoList.load();
    out(todoList.todos);

    function out(todos) {
        document.getElementById("out").innerHTML = '';
        for (var i = 0; i<todos.length; i++) {
            var li = document.createElement('li');  
            li.innerHTML = todos[i].name;

            var span = document.createElement("span");
            span.className = "close";
            span.innerHTML = "&times;";
            li.appendChild(span);

            span.addEventListener('click', function () {
                var str = this.parentElement.innerText;
                todoList.remove(str.substr(0, str.indexOf("\n")));
                out(todoList.todos);
            });
            document.getElementById('out').appendChild (li);


            if(todos[i].check) {
                li.className = "check";
            }
            li.addEventListener('click', function () {
                var str = this.innerText.substr(0, this.innerText.indexOf("\n"));
                for(let i=0; i < todoList.todos.length; i++) {
                    if(todoList.todos[i].name == str) {
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
            
        }
        
    }

    document.getElementById("in").addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
          let value = document.getElementById("in").value;
        if (value) {
            todoList.add(value);
        }
        else {
            confirm("Enter some words..");
        }
        document.getElementById("in").value = "";
        out(todoList.todos);
        }
    });
        
    

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
