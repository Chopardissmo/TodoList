import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodos: PropTypes.func.isRequired,
        clearAllDoneTodos: PropTypes.func.isRequired,
    };
    // handleCheckAll = (event) => {
    //     console.log(event.target.checked);
    //     this.props.checkAllTodos(event.target.checked);
    // };
    // handleClearDone = () => {
    //     const { clearAllDoneTodos } = this.props;
    //     clearAllDoneTodos();
    // };
    render() {
        const { todos, checkAllTodos, clearAllDoneTodos } = this.props;
        // method1:
        //const finishedNumTodos = todos.filter((todoObj) => todoObj.done).length;
        // method2:
        const finishedNumTodos = todos.reduce((pre, cur) => {
            return pre + (cur.done ? 1 : 0);
        }, 0);
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        checked={
                            finishedNumTodos === todos.length &&
                            todos.length !== 0
                                ? true
                                : false
                        }
                        onChange={
                            //this.handleCheckAll
                            checkAllTodos
                        }
                    />
                </label>
                <span>
                    <span>已完成{finishedNumTodos}</span> / 全部
                    {todos.length}
                </span>
                <button className="btn btn-danger" onClick={clearAllDoneTodos}>
                    清除已完成任务
                </button>
            </div>
        );
    }
}
