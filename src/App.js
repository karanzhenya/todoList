import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import PropTypes from 'prop-types';

class App extends React.Component {

    state = {
        tasks: [ ],
        filterValue: ""
    };
    
    componentDidMount = () => {
        this.restoreState();
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state", stateAsString)
    };
    restoreState = () => {
        let stateAsString = localStorage.getItem("our-state");
        if (stateAsString) {
        let state = JSON.parse(stateAsString);
        state.tasks.forEach(t => {
            if(t.id >= this.nextTaskId) {this.nextTaskId = t.id +1}
        });
        this.setState(state)
    }};
    nextTaskId = 1;
    addTask = (newTitle) => {
        let newTask = {
            title: newTitle,
            isDone: false,
            priority: "low",
            id: this.nextTaskId
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks});
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue}, () => {this.saveState()})};

    changeTask = (taskId, obj) => {
        let taskCopy = this.state.tasks.map(t => {
            if(t.id === taskId) {
                return { ...t, ...obj}
            }
            return t;
        });
        this.setState({tasks: taskCopy}, () => {this.saveState()})
    };

    changeStatus = (taskId, status) => {
        let obj = {
            isDone: status
        };
        this.changeTask(taskId, obj)
    };
    changeTitle = (taskId, title) => {
        let obj = {
            title: title
        };
        this.changeTask(taskId, obj)};

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
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}/>

                    <TodoListFooter filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter}/>
                </div>
            </div>
        )
    }
}

export default App;
App.propTypes = {};
