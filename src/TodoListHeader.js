import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


class TodoListHeader extends React.Component {

    state = {
        error: false,
        title: ""
    };
    onAddTaskClick = () => {
        let newTitle = this.state.title;
        if ( newTitle !== "") {
        this.props.addTask(newTitle);
            this.setState({error: false, title: ""})
        }

        else {
            this.setState({error: true})
        }
    };
    onKeyPress = (e) => { if (e.key === "Enter"){this.onAddTaskClick()}};
    onTitleChanged = (e) => {this.setState({title: e.currentTarget.value})};

    render = () => {
        const inputClassName = this.state.error? "error" : "";
        return (
            <div className="TodoListHeader">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name" className={inputClassName} onKeyPress={this.onKeyPress} value={this.state.title} onChange={this.onTitleChanged}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}
export default TodoListHeader;
TodoListHeader.propTypes = {

};
