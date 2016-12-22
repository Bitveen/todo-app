import React from "react";
import moment from "moment";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {text, id, completed, createdAt} = this.props;

        let renderDate = () => {
            let message = "Created ";
            let timestamp = createdAt;

            return message + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
        };


        return (
            <div className="todo" onClick={() => {
                    this.props.onToggle(id);
                }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
}

Todo.propTypes = {
    text: React.PropTypes.string.isRequired
};
