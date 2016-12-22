import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";


import TodoList from "TodoList";
import Todo from "Todo";


describe("TodoList", () => {
    it("should exist", () => {
        expect(TodoList).toExist();
    });

    it("should render the given list", () => {
        let todos = [
            {
                id: 1,
                text: "Test 1"
            },
            {
                id: 2,
                text: "Test 2"
            }
        ];


        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);

        // expect(todoList.props.todos.length).toBe(2);
        // let elem = ReactDOM.findDOMNode(todoList);
        // let todosLength = elem.querySelectorAll(".todo").length;
        // expect(todosLength).toBe(2);


    });



});
