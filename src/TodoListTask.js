import React from 'react';
import PropTypes from 'prop-types';


class TodoListTask extends React.Component {
    state = {
        editMode: false
    };
    activateEditMode = () => {
        this.setState({editMode: true})
    };
    deactivateEditMode = () => {
        this.setState({editMode: false})
    };
    onIsDoneChanged = (event) => {
        this.props.changeStatus(this.props.task.id, event.currentTarget.checked)
    };
    render = () => {

        const taskClassName = this.props.task.isDone ? "todoList-task done" : "todoList-task"

        return (
            <div className={taskClassName}>
                <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged}
                />
                {this.state.editMode ?
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.task.title}/> :
                <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title} - priority: {this.props.task.priority}</span>}
            </div>
        )
    }
}

export default TodoListTask;

TodoListTask.propTypes = {
    title: PropTypes.string,
    priority: PropTypes.string,
    isDone: PropTypes.bool
};