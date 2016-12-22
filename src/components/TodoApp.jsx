import React from "react";
import TodoList from "TodoList";


export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

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


    render() {
        let {todos} = this.state;
        return (
            <div>
                <h3>Hello react!</h3>
                <TodoList todos={todos} />
            </div>
        );
    }
}
