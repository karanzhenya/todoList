import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


class TodoListHeader extends React.Component {
    newTaskTitleRef = React.createRef();    //создание новой ссылки для инпута
    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        this.props.addTask(newTitle)
    }

    render = () => {
        return (
            <div className="TodoListHeader">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name" ref={this.newTaskTitleRef}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}
export default TodoListHeader;
TodoListHeader.propTypes = {

};
