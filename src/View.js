class View {

    add() {
        let value = document.getElementById("in").value;
        if (value) {
            todoList.add(value);
        }
        else {
            confirm("Enter some words..");
        }
        document.getElementById("in").value = "";
        out();
    }


}

export default View;