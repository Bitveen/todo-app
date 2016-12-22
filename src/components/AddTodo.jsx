import React from "react";

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);



        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(e) {
        e.preventDefault();
        let todoText = this.refs.todo.value.trim();
        if (todoText.length > 0) {
            this.refs.todo.value = "";
            this.props.onTodoAdd(todoText);
        } else {
            this.refs.todo.value = "";
            this.refs.todo.focus();
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <input type="text" ref="todo" placeholder="What do you need to do?"/>
                <button type="submit" className="button expanded">Add Todo</button>
            </form>
        );
    }
}
