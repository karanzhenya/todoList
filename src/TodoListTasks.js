import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import PropTypes from 'prop-types';


class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map(task => {
            return <TodoListTask task={task} changeStatus={this.props.changeStatus}/>
        });
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;
TodoListTasks.propTypes = {
    isDone: PropTypes.bool
};
