import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import PropTypes from 'prop-types';

class App extends React.Component {

    state = {
        tasks: [
            {id: 1, title: 'ReactJS', isDone: false, priority: "low"},
            {id: 2, title: 'CSS', isDone: false, priority: "hight"},
            {id: 3, title: 'JS', isDone: false, priority: "low"},
            {id: 4, title: 'jQuery', isDone: true, priority: "medium"},
            {id: 5, title: 'Patterns', isDone: true, priority: "low"}
        ],
        filterValue: ""
    };
    nextTaskId = 6;
    addTask = (newTitle) => {
        let newTask = {
            title: newTitle,
            isDone: false,
            priority: "low",
            id: this.nextTaskId
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks});};

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue})};

    changeStatus = (taskId, status) => {
        let taskCopy = this.state.tasks.map(t => {
            if(t.id === taskId) {
                return { ...t, isDone: status}
            }
            return t;
        });
        this.setState({tasks: taskCopy})
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
