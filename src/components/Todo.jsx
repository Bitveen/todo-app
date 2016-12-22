import React from "react";


export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {text, id} = this.props;

        return (
            <div className="todo">
                {id}. {text}
            </div>
        );
    }
}

Todo.propTypes = {
    text: React.PropTypes.string.isRequired
};
