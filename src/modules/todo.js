class ToDo {
    constructor() {
        this.list = [];
    }

    add(item) {
        this.list.push(item);
    }

    remove(item) {
        const index = this.list.indexOf(item);
        this.list.splice(index, 1);
    }
}

const l = new ToDo;
l.add(19);
l.add("Do Homework");
l.add("Go to the gym");
console.log(l.list)
l.remove("Do Homework");
console.log(l.list);

export default ToDo