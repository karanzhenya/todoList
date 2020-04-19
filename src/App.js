import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import PropTypes from 'prop-types';

class App extends React.Component {

    newTaskTitleRef = React.createRef();
    state = {
        tasks: [
            {title: 'ReactJS', isDone: false, priority: "low"},
            {title: 'CSS', isDone: false, priority: "hight"},
            {title: 'JS', isDone: false, priority: "low"},
            {title: 'jQuery', isDone: true, priority: "medium"},
            {title: 'Patterns', isDone: true, priority: "low"}
        ],
        filterValue: "Completed"
    };
    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value
        let newTask = {
            title: newText,
            isDone: false,
            priority: "low"
        };
        let newTasks = [
            ...this.state.tasks, newTask
        ]
        this.setState({
            tasks: newTasks,
        });
        this.newTaskTitleRef.current.value = "";
    }

    render() {
        return (
            <div className="App">
                <div className="todoList">

                    <div className="TodoListHeader">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>

                    <TodoListTasks tasks={this.state.tasks}/>

                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        )
    }
}

export default App;
App.propTypes = {

};
