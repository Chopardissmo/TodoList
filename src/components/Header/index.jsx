import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
    handleKeyUp = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) {
            // 13 is the keycode for return
            return;
        }

        // pass the new todo item to App component
        const newTodo = {
            id: "005",
            name: target.value,
            done: false,
        };
        this.props.addTodo(newTodo);
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
