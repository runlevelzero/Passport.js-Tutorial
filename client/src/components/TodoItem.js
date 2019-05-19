import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return (this.props.todo.completed) ? {
            textDecoration: 'line-through',
            padding: '10px',
            borderBottom: '1px #cccccc dotted',
            backgroundColor: '#a4ffa4'
        } : {
            textDecoration: 'none',
            padding: '10px',
            borderBottom: '1px #cccccc dotted',
            backgroundColor: '#f4f4f4'
        };

    }
    
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
            <p style={{display:'inline'}}>
                <input type='checkbox' onChange={this.props.changeMark.bind(this, id)} />{' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
            </p>
            
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor : "#ff4444",
    color           : "#ffffff",
    border          : "none",
    padding         : '5px 9px',
    borderRadius    : '50%',
    cursor          : 'pointer',
    float           : 'right'
}

export default TodoItem
