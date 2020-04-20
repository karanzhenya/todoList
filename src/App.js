import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import PropTypes from 'prop-types';

class App extends React.Component {

    state = {
        tasks: [
            {title: 'ReactJS', isDone: false, priority: "low"},
            {title: 'CSS', isDone: false, priority: "hight"},
            {title: 'JS', isDone: false, priority: "low"},
            {title: 'jQuery', isDone: true, priority: "medium"},
            {title: 'Patterns', isDone: true, priority: "low"}
        ],
        filterValue: ""
    };
    addTask = (newTitle) => {
        let newTask = {
            title: newTitle,
            isDone: false,
            priority: "low"                              //создание новой таски
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks});};

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue})};

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if(t === task) {
                return { ...t, isDone: isDone}
            }
            return t;
        });
        this.setState({tasks: newTasks})
    };

    render() {
        let filteredTasks = this.state.tasks.filter(t => {
            switch (this.state.filterValue) {
                case "Active":
                    return t.isDone === false;
                case "Completed":
                    return t.isDone === true;
                case "All":
                    return true;
                default:
                    return true;
            }
        });
        return (
            <div className="App">
                <div className="todoList">

                    <TodoListHeader addTask={this.addTask}/>

                    <TodoListTasks
                        tasks={filteredTasks}
                        changeStatus={this.changeStatus}/>

                    <TodoListFooter filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter}/>
                </div>
            </div>
        )
    }
}

export default App;
App.propTypes = {};
