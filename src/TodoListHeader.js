import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


class TodoListHeader extends React.Component {

    state = {
        error: false
    };
    newTaskTitleRef = React.createRef();    //создание новой ссылки для инпута
    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        if ( newTitle !== "") {
        this.props.addTask(newTitle);
            this.setState({error: false})
        }

        else {
            this.setState({error: true})
        }
    };
    onKeyPress = (e) => { if (e.key === "Enter"){this.onAddTaskClick()}}

    render = () => {
        const inputClassName = this.state.error? "error" : "";
        return (
            <div className="TodoListHeader">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name" className={inputClassName} onKeyPress={this.onKeyPress} ref={this.newTaskTitleRef} />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}
export default TodoListHeader;
TodoListHeader.propTypes = {

};
