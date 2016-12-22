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


        this.state = {
            showCompleted: false,
            searchText: "",
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the yard'
                }
            ]

        };

    }

    addTodo(todoText) {
        let {todos} = this.state;
        let newTodo = {
            id: uuid(),
            text: todoText
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


    render() {
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onTodoAdd={this.addTodo} />
            </div>
        );
    }
}
