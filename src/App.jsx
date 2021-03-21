import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
    state = {
        todos: [
            { id: "001", name: "eat", done: false },
            { id: "002", name: "sleep", done: true },
            { id: "003", name: "coding", done: false },
            { id: "004", name: "shopping", done: true },
        ],
    };

    addTodo = (todoObj) => {
        // get the origial todos
        const { todos } = this.state;
        // shift the new todoObj to its head
        const newTodos = [todoObj, ...todos];
        // update the view
        this.setState({ todos: newTodos });
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} />
                    <Footer />
                </div>
            </div>
        );
    }
}
