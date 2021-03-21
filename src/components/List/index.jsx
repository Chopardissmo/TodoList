import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    };
    render() {
        const { todos, checkTodo, deleteTodo } = this.props;
        return (
            <ul className="todo-main">
                {todos.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            {...item}
                            checkTodo={checkTodo}
                            deleteTodo={deleteTodo}
                        />
                    );
                })}
            </ul>
        );
    }
}
