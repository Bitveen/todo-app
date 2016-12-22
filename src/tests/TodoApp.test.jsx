import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";


import TodoApp from "TodoApp";


describe("TodoApp", () => {
    it("should exist", () => {
        expect(TodoApp).toExist();
    });

    it("should add todo to the todos state on addTodo", () => {
        let todoText = "test text";
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [] });
        todoApp.addTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it("should toggle completed value when handleToggle called", () => {
        let todoData = {
            id: 11,
            text: 'Test features',
            completed: false
        };

        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [todoData]});
        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completed).toBe(true);



    });


});
