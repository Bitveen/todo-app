import expect from "expect";
import TodoAPI from "TodoAPI";


describe("TodoAPI", () => {

    it("should exist", () => {
        expect(TodoAPI).toExist();
    });

    describe("setTodos", () => {
        it("should set valid todos array", () => {
            let todos = [{
                id: 23,
                text: "test all files",
                completed: false
            }];

            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem("todos"));
            expect(actualTodos).toEqual(todos);
            


        });
    });

    describe("getTodos", () => {

    });


});
