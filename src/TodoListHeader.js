import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


class TodoListHeader extends React.Component {
    render = () => {
        return (
            <div className="TodoListHeader">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name"/>
                    <button>Add</button>
                </div>
            </div>
        );
    }
}
export default TodoListHeader;
TodoListHeader.propTypes = {

};
