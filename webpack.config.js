module.exports = {
    entry: __dirname + "/src/index.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
        root: __dirname + "/src",
        alias: {
            TodoApp: "components/TodoApp.jsx",
            TodoList: "components/TodoList.jsx",
            Todo: "components/Todo.jsx",
            AddTodo: "components/AddTodo.jsx",
            TodoSearch: "components/TodoSearch.jsx",
            TodoAPI: "api/TodoAPI.jsx"
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /.\jsx?$/,
                include: __dirname + "/src"
            }
        ]
    }
};
