const todos = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Buy eggs', completed: false },
    { id: 3, title: 'Buy bread', completed: false },
];

export const getTodos = async () => {
    await delay(500);
    return todos;

}

export const getTodo = async (id: number) => {
    await delay(500);
    return todos.find(todo => todo.id === id);
}

export const addTodo = async (title: string) => {
    await delay(1000);
    const newTodo = { id: todos.length + 1, title, completed: false };
    todos.push(newTodo);
    return newTodo;
}

export const setCompleted = async (id: number, completed: boolean) => {
    await delay(1000);
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = completed;
    }
    return todo;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));