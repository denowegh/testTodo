import { createSlice } from '@reduxjs/toolkit';
import Todo from '../models/Todo';

const newTodo = new Todo ({
    text: 'Go for a walk',
})

const completedTodo = new Todo ({
    text: 'Watch Boardwalk Empire',
});
completedTodo.setCompleted(true);

const initialState = {
    active: {
        todos: [],
    },
    completed: {
        todos: [],
    },
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.active.todos.unshift(action.payload);
        },
        deleteActiveTodo: (state, action) => {
            state.active.todos.splice(action.payload, 1);
        },
        deleteCompletedTodo: (state, action) => {
            state.completed.todos.splice(action.payload, 1);
        },
        completeTodo: (state, action) => {
            const { active, completed } = state;
            const { payload } = action;
            const todo = active.todos[payload];
            todo.completed = !todo.completed;
            if (todo.completed) {
                active.todos.splice(payload, 1);
                completed.todos.unshift(todo);
            } else {
                completed.todos.splice(completed.todos.indexOf(todo), 1);
                active.todos.unshift(todo);
            }
        },
    },
});

export const { addTodo, deleteActiveTodo, deleteCompletedTodo, completeTodo } = todoSlice.actions;

export const selectTodoState = state => state.todo;

export default todoSlice.reducer;
