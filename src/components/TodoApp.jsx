import React from "react";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";
import uuid from "node-uuid";


export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            showCompleted: false,
            searchText: "",
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Play video games',
                    completed: true
                }
            ]

        };

    }

    addTodo(todoText) {
        let {todos} = this.state;
        let newTodo = {
            id: uuid(),
            text: todoText,
            completed: false
        };

        this.setState({
            todos: todos.concat([newTodo])
        });
    }


    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    handleToggle(id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({
            todos: updatedTodos
        });

    }

    render() {
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onTodoAdd={this.addTodo} />
            </div>
        );
    }
}
