const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let todos = [
    { id: 1, task: "Complete PANS Lab", completed: false },
    { id: 2, task: "Complete DL Lab", completed: true },
    { id: 3, task: "Finish Final Year Project", completed: false }
];

// Home
app.get("/", (req, res) => {
    res.send("To-Do List API is Running");
});

// Get all todos
app.get("/todos", (req, res) => {
    res.json(todos);
});

// Get one todo
app.get("/todos/:id", (req, res) => {

    const todo = todos.find(t => t.id == req.params.id);

    if (!todo)
        return res.status(404).json({ message: "Task not found" });

    res.json(todo);
});

// Add a todo
app.post("/todos", (req, res) => {

    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

// Mark as completed
app.put("/todos/:id", (req, res) => {

    const todo = todos.find(t => t.id == req.params.id);

    if (!todo)
        return res.status(404).json({ message: "Task not found" });

    todo.completed = true;

    res.json(todo);
});

// Delete task
app.delete("/todos/:id", (req, res) => {

    todos = todos.filter(t => t.id != req.params.id);

    res.json({
        message: "Task deleted"
    });

});

// Performance endpoint
app.get("/compute", (req, res) => {

    let total = 0;

    for (let i = 0; i < 10000000; i++) {
        total += i;
    }

    res.json({
        message: "Computation Complete",
        result: total
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});