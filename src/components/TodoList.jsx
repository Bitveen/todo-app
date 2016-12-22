import React from "react";
import Todo from "Todo";


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        let {todos} = this.props;


        let renderTodos = () => {
            return todos.map((todo) => {
                return <Todo onToggle={this.props.onToggle} key={todo.id} {...todo} />;
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}
