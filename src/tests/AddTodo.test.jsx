import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";


import AddTodo from "AddTodo";


describe("AddTodo", () => {
    it("should exist", () => {
        expect(AddTodo).toExist();
    });

    it("should call onTodoAdd prop with valid data", () => {
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onTodoAdd={spy} />);
        let elem = ReactDOM.findDOMNode(addTodo);

        addTodo.refs.todo.value = "Check mail";

        TestUtils.Simulate.submit(elem);

        expect(spy).toHaveBeenCalledWith("Check mail");

    });

});
