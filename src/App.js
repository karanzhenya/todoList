import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    tasks = [
        {title: 'ReactJS', isDone: false, priority: "low"},
        {title: 'CSS', isDone: false, priority: "hight"},
        {title: 'JS', isDone: false, priority: "low"},
        {title: 'jQuery', isDone: true, priority: "medium"},
        {title: 'Patterns', isDone: true, priority: "low"}
    ];
    filterValue = "Completed";

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>

                    <TodoListTasks tasks={this.tasks}/>

                    <TodoListFooter filterValue ={this.filterValue}/>;
                </div>
            </div>
        )
    }
}

export default App;

