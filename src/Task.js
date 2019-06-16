class Task {
    constructor(str) {
        this.name = str;
        this.check = false;
    }

    getObject() {
        return { "name" : this.name,
                 "check" : this.check }
    }
}

export default Task;