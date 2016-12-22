import React from "react";


export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {text, id, completed} = this.props;

        return (
            <div className="todo" onClick={() => {
                    this.props.onToggle(id);
                }}>
                <input type="checkbox" checked={completed} />
                {text}
            </div>
        );
    }
}

Todo.propTypes = {
    text: React.PropTypes.string.isRequired
};
