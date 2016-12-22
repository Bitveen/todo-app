import React from "react";
import TodoList from "TodoList";
import AddTodo from "AddTodo";

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);

        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                }
            ]
        };

    }

    addTodo(todoText) {
        let {todos} = this.state;
        let newTodo = {
            id: todos.length + 1,
            text: todoText
        };

        this.setState({
            todos: todos.concat([newTodo])
        });
    }

    render() {
        let {todos} = this.state;
        return (
            <div>
                <h3>Hello react!</h3>
                <TodoList todos={todos} />
                <AddTodo onTodoAdd={this.addTodo} />
            </div>
        );
    }
}
