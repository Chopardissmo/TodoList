import React, { Component } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
    state = {
        todos: [
            { id: nanoid(), name: "eat", done: false },
            { id: nanoid(), name: "sleep", done: true },
            { id: nanoid(), name: "coding", done: false },
            { id: nanoid(), name: "shopping", done: true },
        ],
    };

    //状态在哪里，操作状态的方法就在那里
    addTodo = (todoObj) => {
        // get the origial todos
        const { todos } = this.state;
        // add the new todoObj to its head
        const newTodos = [todoObj, ...todos];
        // update the view
        this.setState({ todos: newTodos });
    };

    checkTodo = (id, isFinished) => {
        const { todos } = this.state;
        const newtodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done: isFinished };
            } else {
                return todoObj;
            }
        });
        this.setState({ todos: newtodos });
    };

    deleteTodo = (id) => {
        const { todos } = this.state;
        const newtodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        });
        this.setState({ todos: newtodos });
    };

    // checkAllTodos = (checked) => {
    //     const { todos } = this.state;
    //     const newtodos = todos.map((todoObj) => {
    //         return { ...todoObj, done: checked };
    //     });
    //     this.setState({ todos: newtodos });
    // };
    checkAllTodos = (event) => {
        const { todos } = this.state;
        const newtodos = todos.map((todoObj) => {
            return { ...todoObj, done: event.target.checked };
        });
        this.setState({ todos: newtodos });
    };

    clearAllDoneTodos = () => {
        const { todos } = this.state;
        const newtodos = todos.filter((todoObj) => {
            return !todoObj.done;
        });
        this.setState({ todos: newtodos });
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List
                        todos={todos}
                        checkTodo={this.checkTodo}
                        deleteTodo={this.deleteTodo}
                    />
                    <Footer
                        todos={todos}
                        checkAllTodos={this.checkAllTodos}
                        clearAllDoneTodos={this.clearAllDoneTodos}
                    />
                </div>
            </div>
        );
    }
}
