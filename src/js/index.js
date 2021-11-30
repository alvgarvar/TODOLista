import './css/styles.css';

import {Todo, TodoList} from './classes';

export const todoList = new TodoList();

todoList.todos.forEach( creatTodoHtml );