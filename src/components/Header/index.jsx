import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    };
    handleKeyUp = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) {
            // 13 is the keycode for return
            return;
        }
        if (target.value.trim() === "") {
            return;
        }
        const newTodo = {
            id: nanoid(),
            name: target.value.trim(),
            done: false,
        };
        // pass the new todoObj from item(child) to App(parent) component
        this.props.addTodo(newTodo);
        target.value = "";
    };

    render() {
        return (
            <div className="todo-header">
                <input
                    type="text"
                    onKeyUp={this.handleKeyUp}
                    placeholder="请输入你的任务名称，按回车键确认"
                />
            </div>
        );
    }
}
