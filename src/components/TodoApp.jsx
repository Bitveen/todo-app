import React from "react";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";
import uuid from "node-uuid";
import TodoAPI from "../api/TodoAPI.jsx";
import moment from "moment";

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            showCompleted: false,
            searchText: "",
            todos: TodoAPI.getTodos()
        };

    }

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    }

    addTodo(todoText) {
        let {todos} = this.state;
        let newTodo = {
            id: uuid(),
            text: todoText,
            completed: false,
            createdAt: moment().unix()
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
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <AddTodo onTodoAdd={this.addTodo} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
