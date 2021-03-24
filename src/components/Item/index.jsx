import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
    state = {
        mouse: false,
    };

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        };
    };

    //! callback function - curring implementation
    //! onChange={this.handleCheck(id)}
    handleCheck = (id) => {
        return (event) => {
            const { checkTodo } = this.props;
            checkTodo(id, event.target.checked);
        };
    };
    //! callback function - non curring implementation
    //! onChange={(event) => {this.handleCheck(id, event)}}
    // handleCheck = (id, e) => {
    //     const { checkTodo } = this.props;
    //     checkTodo(id, e.target.checked);
    // };

    // callback function-non curring implementation
    handleDelete = (id) => {
        const { deleteTodo } = this.props;
        if (window.confirm("R u sure to delete this item?")) {
            deleteTodo(id);
        }
    };

    render() {
        const { id, name, done: isFinished } = this.props;
        const { mouse } = this.state;
        return (
            <li
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}
                style={{ backgroundColor: mouse ? "#ddd" : "white" }}
            >
                <label>
                    <input
                        type="checkbox"
                        checked={isFinished}
                        onChange={this.handleCheck(id)}
                    />
                    <span>{name}</span>
                </label>
                <button
                    className="btn btn-danger"
                    style={{ display: mouse ? "block" : "none" }}
                    onClick={() => this.handleDelete(id)}
                >
                    删除
                </button>
            </li>
        );
    }
}
